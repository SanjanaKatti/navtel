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
import { htmlToMarkdown } from "../lib/wiki-markdown";

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
