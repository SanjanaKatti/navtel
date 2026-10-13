/**
 * Downloads NTC Wiki pages and saves them as Markdown files in ./knowledge,
 * ready to be uploaded with `npm run ingest`.
 *
 *   npm run fetch-wiki
 *
 * Add more pages to PAGES below (url + output filename).
 */
import fs from "node:fs";
import path from "node:path";

const BASE = "https://wiki.navtelecom.ru";

const PAGES: { url: string; file: string }[] = [
  { url: `${BASE}/en/home/devices/s2010`, file: "wiki-start-s-2010.md" },
  { url: `${BASE}/en/home/devices/s2011`, file: "wiki-start-s-2011.md" },
  { url: `${BASE}/en/home/devices/s2013`, file: "wiki-start-s-2013.md" },
  // Shared pages linked from the device pages
  {
    url: `${BASE}/en/home/devices/characteristics/s201x`,
    file: "wiki-start-s-201x-characteristics.md",
  },
  {
    url: `${BASE}/en/home/devices/notes/no_cpu_1`,
    file: "wiki-important-notes-sim868e-models.md",
  },
];

const decode = (s: string) =>
  s
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&apos;/g, "'")
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(Number(n)))
    .replace(/&amp;/g, "&");

const squash = (s: string) => decode(s).replace(/\s+/g, " ").trim();

function inline(html: string, pageUrl: string): string {
  return squash(
    html
      .replace(/<br\s*\/?>/gi, " ")
      .replace(/<(strong|b)[^>]*>([\s\S]*?)<\/\1>/gi, "**$2**")
      .replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, "`$1`")
      .replace(
        /<a [^>]*href="([^"#][^"]*)"[^>]*>([\s\S]*?)<\/a>/gi,
        (_, href: string, text: string) => {
          const label = text.replace(/<[^>]+>/g, "").trim();
          if (!label) return "";
          const abs = new URL(href, pageUrl).toString();
          return `[${label}](${abs})`;
        },
      )
      .replace(/<[^>]+>/g, ""),
  );
}

function tableToMarkdown(tableHtml: string, pageUrl: string): string {
  const rows = [...tableHtml.matchAll(/<tr[\s\S]*?<\/tr>/gi)].map((r) =>
    [...r[0].matchAll(/<t[dh][^>]*>([\s\S]*?)<\/t[dh]>/gi)].map((c) =>
      inline(c[1], pageUrl).replace(/\|/g, "\\|"),
    ),
  );
  if (rows.length === 0) return "";
  const width = Math.max(...rows.map((r) => r.length));
  const pad = (r: string[]) => [...r, ...Array(width - r.length).fill("")];
  const lines = rows.map((r) => `| ${pad(r).join(" | ")} |`);
  lines.splice(1, 0, `| ${Array(width).fill("---").join(" | ")} |`);
  return lines.join("\n");
}

function htmlToMarkdown(html: string, pageUrl: string): { title: string; md: string } {
  const title = squash(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? pageUrl);

  let body = html.match(/<body[\s\S]*<\/body>/i)?.[0] ?? html;
  body = body
    .replace(/<(script|style|noscript|svg|nav|header|footer)[\s\S]*?<\/\1>/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "");

  // Prefer the actual page content when the wiki marks it.
  const contents = body.match(/<div[^>]*class="contents"[^>]*>([\s\S]*)/i);
  if (contents) body = contents[1];

  // Tables first (replace with placeholders so the generic pass can't mangle them).
  const tables: string[] = [];
  body = body.replace(/<table[\s\S]*?<\/table>/gi, (t) => {
    tables.push(tableToMarkdown(t, pageUrl));
    return `\n@@TABLE${tables.length - 1}@@\n`;
  });

  body = body
    .replace(/<h([1-6])[^>]*>([\s\S]*?)<\/h\1>/gi, (_, lvl: string, t: string) => {
      const text = inline(t, pageUrl).replace(/^¶\s*/, "");
      return `\n\n${"#".repeat(Number(lvl))} ${text}\n\n`;
    })
    .replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_, t: string) => `\n- ${inline(t, pageUrl)}`)
    .replace(/<\/(ul|ol)>/gi, "\n\n")
    .replace(/<img[^>]*alt="([^"]*)"[^>]*>/gi, (_, alt: string) => (alt ? ` [image: ${alt}] ` : ""))
    .replace(/<p[^>]*>([\s\S]*?)<\/p>/gi, (_, t: string) => `\n\n${inline(t, pageUrl)}\n\n`)
    .replace(/<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi, (_, t: string) => `\n\n> ${inline(t, pageUrl)}\n\n`)
    .replace(/<(div|section|details|summary)[^>]*>/gi, "\n")
    .replace(/<\/(div|section|details|summary)>/gi, "\n")
    .replace(/<a [^>]*href="([^"#][^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, (_, href: string, t: string) => {
      const label = t.replace(/<[^>]+>/g, "").trim();
      return label ? ` [${label}](${new URL(href, pageUrl).toString()}) ` : "";
    })
    .replace(/<[^>]+>/g, "");

  let md = decode(body).replace(/@@TABLE(\d+)@@/g, (_, i: string) => `\n\n${tables[Number(i)]}\n\n`);
  md = md
    .split("\n")
    .map((l) => l.replace(/[ \t]+/g, " ").trimEnd())
    .join("\n")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  return { title, md };
}

/** Remove a named column (e.g. 2012) from pipe tables so unused models stay out of the KB. */
function dropMarkdownTableColumn(md: string, header: string): string {
  const lines = md.split("\n");
  let dropAt = -1;
  return lines
    .map((line) => {
      if (!line.includes("|")) {
        dropAt = -1;
        return line;
      }
      const cells = line.split("|");
      if (dropAt < 0) {
        const idx = cells.findIndex((c) => c.replace(/[*`]/g, "").trim() === header);
        if (idx < 0) return line;
        dropAt = idx;
      }
      if (dropAt >= 0 && dropAt < cells.length) cells.splice(dropAt, 1);
      return cells.join("|");
    })
    .join("\n");
}

async function main() {
  const outDir = path.resolve(process.cwd(), "knowledge");
  fs.mkdirSync(outDir, { recursive: true });

  for (const { url, file } of PAGES) {
    const res = await fetch(url, { headers: { "User-Agent": "navtel-kb-fetch/1.0" } });
    if (!res.ok) {
      console.error(`FAILED ${res.status} ${url}`);
      process.exitCode = 1;
      continue;
    }
    let { title, md } = htmlToMarkdown(await res.text(), url);
    if (file.includes("s-201x-characteristics")) {
      md = dropMarkdownTableColumn(md, "2012");
      md =
        "Note: This table is for START S-2010, S-2011 and S-2013 only. S-2012 is not a current product.\n\n" +
        md;
    }
    const out = `# ${title}\n\nSource: ${url}\n\n${md}\n`;
    fs.writeFileSync(path.join(outDir, file), out);
    console.log(`Saved ${file} (${out.length} chars)`);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
