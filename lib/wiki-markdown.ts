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

export function htmlToMarkdown(
  html: string,
  pageUrl: string,
): { title: string; md: string } {
  const title = squash(html.match(/<title>([\s\S]*?)<\/title>/i)?.[1] ?? pageUrl);

  let body = html.match(/<body[\s\S]*<\/body>/i)?.[0] ?? html;
  body = body
    .replace(/<(script|style|noscript|svg|nav|header|footer)[\s\S]*?<\/\1>/gi, "")
    .replace(/<!--[\s\S]*?-->/g, "");

  const contents = body.match(/<div[^>]*class="contents"[^>]*>([\s\S]*)/i);
  if (contents) body = contents[1];

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
