import { PDFDocument, StandardFonts, rgb, type PDFFont, type PDFPage } from "pdf-lib";
import { htmlToMarkdown } from "@/lib/wiki-markdown";

const USER_AGENT = "NavtelecomKnowledgeBot/1.0 (https://navtelecom-iot.com)";
const FETCH_TIMEOUT_MS = 25_000;
const MAX_HTML_BYTES = 2 * 1024 * 1024;
const MAX_REMOTE_PDF_BYTES = 20 * 1024 * 1024;

export class WikiFetchError extends Error {
  status: number;

  constructor(message: string, status = 400) {
    super(message);
    this.name = "WikiFetchError";
    this.status = status;
  }
}

export type WikiPdf = {
  filename: string;
  bytes: Buffer;
  sourceUrl: string;
};

export type WikiDocuments = {
  files: WikiPdf[];
  warnings: string[];
};

const MAX_LINKED_FILES = 12;

function isWikipediaHost(hostname: string): boolean {
  const host = hostname.toLowerCase();
  return host === "wikipedia.org" || host.endsWith(".wikipedia.org");
}

function isNtcWikiHost(hostname: string): boolean {
  return hostname.toLowerCase() === "wiki.navtelecom.ru";
}

export function parseWikiUrl(raw: string): URL {
  const trimmed = raw.trim();
  if (!trimmed) throw new WikiFetchError("Enter a Wikipedia or NTC Wiki link.");

  let url: URL;
  try {
    url = new URL(trimmed);
  } catch {
    throw new WikiFetchError("Enter a valid link.");
  }

  if (url.protocol !== "https:") {
    throw new WikiFetchError("The link must start with https://.");
  }
  if (url.username || url.password) {
    throw new WikiFetchError("That link is not allowed.");
  }
  if (!isWikipediaHost(url.hostname) && !isNtcWikiHost(url.hostname)) {
    throw new WikiFetchError(
      "Only Wikipedia and wiki.navtelecom.ru links can be converted.",
    );
  }

  url.hash = "";
  return url;
}

function pdfFilename(label: string): string {
  const cleaned = label
    .replace(/[\\/:*?"<>|]+/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 140);
  const base = cleaned || "wiki-page";
  return base.toLowerCase().endsWith(".pdf") ? base : `${base}.pdf`;
}

function pageTitle(title: string, fallback: string): string {
  const head = title.split("|")[0]?.trim() || fallback;
  return head.replace(/\s+/g, " ").trim() || fallback;
}

function wikipediaArticleTitle(url: URL): string {
  const fromPath = url.pathname.match(/^\/wiki\/(.+)$/i)?.[1];
  const fromQuery = url.searchParams.get("title");
  const raw = fromPath || fromQuery;
  if (!raw) throw new WikiFetchError("That Wikipedia link is not an article.");
  let title = raw;
  try {
    title = decodeURIComponent(raw);
  } catch {
    throw new WikiFetchError("That Wikipedia link is not valid.");
  }
  title = title.replace(/_/g, " ").trim();
  if (!title || title.length > 300 || title.toLowerCase().startsWith("special:")) {
    throw new WikiFetchError("That Wikipedia link is not an article.");
  }
  return title;
}

function wikipediaApiHost(hostname: string): string {
  const host = hostname.toLowerCase().replace(/\.m\.wikipedia\.org$/, ".wikipedia.org");
  if (host === "wikipedia.org") return "en.wikipedia.org";
  return host;
}

function toPdfText(input: string): string {
  const replaced = input
    .replace(/\u00a0/g, " ")
    .replace(/[\u2018\u2019\u2032]/g, "'")
    .replace(/[\u201c\u201d]/g, '"')
    .replace(/[\u2013\u2014]/g, "-")
    .replace(/\u2026/g, "...")
    .replace(/[\u2022\u00b7]/g, "-");
  return [...replaced]
    .filter((ch) => {
      const code = ch.codePointAt(0) ?? 0;
      return code === 0x0a || (code >= 0x20 && code <= 0x7e);
    })
    .join("");
}

async function readLimited(response: Response, maxBytes: number): Promise<Buffer> {
  const declared = Number(response.headers.get("content-length") ?? 0);
  if (declared > maxBytes) {
    throw new WikiFetchError("The page is too large to convert.", 413);
  }

  const reader = response.body?.getReader();
  if (!reader) {
    const bytes = Buffer.from(await response.arrayBuffer());
    if (bytes.length > maxBytes) {
      throw new WikiFetchError("The page is too large to convert.", 413);
    }
    return bytes;
  }

  const chunks: Buffer[] = [];
  let total = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    total += value.byteLength;
    if (total > maxBytes) {
      await reader.cancel();
      throw new WikiFetchError("The page is too large to convert.", 413);
    }
    chunks.push(Buffer.from(value));
  }
  return Buffer.concat(chunks);
}

async function fetchAllowed(
  url: string,
  allowed: (hostname: string) => boolean,
): Promise<Response> {
  let response: Response;
  try {
    response = await fetch(url, {
      redirect: "follow",
      signal: AbortSignal.timeout(FETCH_TIMEOUT_MS),
      headers: {
        "User-Agent": USER_AGENT,
        Accept: "text/html,application/pdf;q=0.9,*/*;q=0.8",
      },
    });
  } catch {
    throw new WikiFetchError("The page could not be reached. Try the link again.");
  }

  let finalHost = "";
  try {
    finalHost = new URL(response.url).hostname;
  } catch {
    throw new WikiFetchError("The page could not be reached.");
  }
  if (!allowed(finalHost)) {
    throw new WikiFetchError("The page redirected to a site that is not allowed.");
  }
  return response;
}

async function wikipediaPdf(url: URL): Promise<WikiPdf> {
  const article = wikipediaArticleTitle(url);
  const apiHost = wikipediaApiHost(url.hostname);
  const pdfUrl = `https://${apiHost}/api/rest_v1/page/pdf/${encodeURIComponent(article.replace(/ /g, "_"))}`;
  const response = await fetchAllowed(
    pdfUrl,
    (host) => isWikipediaHost(host) || host.endsWith(".wikimedia.org"),
  );

  if (response.status === 404) {
    throw new WikiFetchError("That Wikipedia page could not be found.");
  }
  if (!response.ok) {
    throw new WikiFetchError("Wikipedia could not make a PDF of that page.");
  }

  const bytes = await readLimited(response, MAX_REMOTE_PDF_BYTES);
  if (bytes.subarray(0, 5).toString("latin1") !== "%PDF-") {
    throw new WikiFetchError("Wikipedia did not return a PDF for that page.");
  }

  return {
    filename: pdfFilename(`Wikipedia - ${article}`),
    bytes,
    sourceUrl: url.toString(),
  };
}

function wrapLine(text: string, font: PDFFont, size: number, maxWidth: number): string[] {
  const words = text.split(/\s+/).filter(Boolean);
  if (words.length === 0) return [];
  const lines: string[] = [];
  let current = "";

  const append = (word: string) => {
    if (font.widthOfTextAtSize(word, size) <= maxWidth) {
      const next = current ? `${current} ${word}` : word;
      if (font.widthOfTextAtSize(next, size) <= maxWidth) {
        current = next;
        return;
      }
      if (current) lines.push(current);
      current = word;
      return;
    }
    if (current) {
      lines.push(current);
      current = "";
    }
    let chunk = "";
    for (const ch of word) {
      const next = chunk + ch;
      if (font.widthOfTextAtSize(next, size) <= maxWidth) chunk = next;
      else {
        if (chunk) lines.push(chunk);
        chunk = ch;
      }
    }
    current = chunk;
  };

  for (const word of words) append(word);
  if (current) lines.push(current);
  return lines;
}

async function markdownToPdf(title: string, source: string, markdown: string): Promise<Buffer> {
  const pdf = await PDFDocument.create();
  const font = await pdf.embedFont(StandardFonts.Helvetica);
  const bold = await pdf.embedFont(StandardFonts.HelveticaBold);
  const pageWidth = 595.28;
  const pageHeight = 841.89;
  const margin = 50;
  const maxWidth = pageWidth - margin * 2;

  let page: PDFPage = pdf.addPage([pageWidth, pageHeight]);
  let y = pageHeight - margin;

  const draw = (text: string, size: number, usedFont: PDFFont, gap: number) => {
    const lines = wrapLine(toPdfText(text), usedFont, size, maxWidth);
    for (const line of lines) {
      if (y < margin + size) {
        page = pdf.addPage([pageWidth, pageHeight]);
        y = pageHeight - margin;
      }
      page.drawText(line, {
        x: margin,
        y,
        size,
        font: usedFont,
        color: rgb(0.1, 0.12, 0.16),
      });
      y -= size + gap;
    }
  };

  draw(title, 18, bold, 6);
  y -= 4;
  draw(source, 9, font, 3);
  y -= 10;

  for (const rawLine of toPdfText(markdown).split("\n")) {
    const heading = /^(#{1,6})\s+(.*)$/.exec(rawLine);
    if (heading) {
      y -= 6;
      draw(heading[2], heading[1].length <= 2 ? 14 : 12, bold, 4);
      continue;
    }
    if (!rawLine.trim()) {
      y -= 8;
      continue;
    }
    draw(rawLine.replace(/^>\s?/, "").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1"), 11, font, 3);
  }

  return Buffer.from(await pdf.save());
}

function linkedPdfUrls(html: string, pageUrl: string): URL[] {
  const seen = new Set<string>();
  const urls: URL[] = [];
  for (const match of html.matchAll(/href="([^"]+)"/gi)) {
    const href = match[1];
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("javascript:")) {
      continue;
    }
    let linked: URL;
    try {
      linked = new URL(href, pageUrl);
    } catch {
      continue;
    }
    if (linked.protocol !== "https:" || !isNtcWikiHost(linked.hostname)) continue;
    if (!linked.pathname.toLowerCase().endsWith(".pdf")) continue;
    linked.hash = "";
    const key = linked.toString();
    if (seen.has(key)) continue;
    seen.add(key);
    urls.push(linked);
    if (urls.length >= MAX_LINKED_FILES) break;
  }
  return urls;
}

async function downloadWikiPdf(url: URL, filename: string): Promise<WikiPdf> {
  const response = await fetchAllowed(url.toString(), isNtcWikiHost);
  if (response.status === 404) {
    throw new WikiFetchError(`Could not download ${filename}.`);
  }
  if (!response.ok) {
    throw new WikiFetchError(`Could not download ${filename}.`);
  }
  const bytes = await readLimited(response, MAX_REMOTE_PDF_BYTES);
  if (bytes.subarray(0, 5).toString("latin1") !== "%PDF-") {
    throw new WikiFetchError(`${filename} is not a PDF.`);
  }
  return { filename: pdfFilename(filename), bytes, sourceUrl: url.toString() };
}

async function ntcWikiDocuments(url: URL): Promise<WikiDocuments> {
  if (url.pathname.toLowerCase().endsWith(".pdf")) {
    const name = decodeURIComponent(url.pathname.split("/").pop() || "wiki-file.pdf");
    return { files: [await downloadWikiPdf(url, name)], warnings: [] };
  }

  const response = await fetchAllowed(url.toString(), isNtcWikiHost);
  if (response.status === 404) {
    throw new WikiFetchError("That wiki page could not be found.");
  }
  if (!response.ok) {
    throw new WikiFetchError("The wiki page could not be downloaded.");
  }

  const html = (await readLimited(response, MAX_HTML_BYTES)).toString("utf8");
  const { title, md } = htmlToMarkdown(html, url.toString());
  const readable = md.replace(/\s+/g, " ").trim();
  if (readable.length < 80) {
    throw new WikiFetchError("That page did not contain enough text to make a PDF.");
  }

  const name = pageTitle(title, "NTC Wiki page");
  const pagePdf: WikiPdf = {
    filename: pdfFilename(`NTC Wiki - ${name}`),
    bytes: await markdownToPdf(name, `Source: ${url.toString()}`, md),
    sourceUrl: url.toString(),
  };

  const files: WikiPdf[] = [pagePdf];
  const warnings: string[] = [];
  for (const linked of linkedPdfUrls(html, url.toString())) {
    const rawName = decodeURIComponent(linked.pathname.split("/").pop() || "attachment.pdf");
    try {
      files.push(await downloadWikiPdf(linked, rawName));
    } catch (err) {
      warnings.push(
        err instanceof Error ? `${rawName}: ${err.message}` : `Could not download ${rawName}.`,
      );
    }
  }
  return { files, warnings };
}

export async function wikiUrlToDocuments(rawUrl: string): Promise<WikiDocuments> {
  const url = parseWikiUrl(rawUrl);
  if (isWikipediaHost(url.hostname)) {
    return { files: [await wikipediaPdf(url)], warnings: [] };
  }
  return ntcWikiDocuments(url);
}
