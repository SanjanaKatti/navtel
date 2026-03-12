// Usage:
// 1. Place your Excel file at: data/comparison.xlsx
// 2. Run: node scripts/generate-comparison-data.mjs
// 3. This will create: data/comparison.json used by the compare page.

import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import xlsx from "xlsx";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const INPUT_PATH = path.join(__dirname, "..", "data", "comparison.xlsx");
const OUTPUT_PATH = path.join(__dirname, "..", "data", "comparison.json");

function normalizeCell(cell) {
  if (cell === null || cell === undefined) return "-";

  if (typeof cell === "string") {
    const trimmed = cell.trim();
    if (trimmed === "") return "-";
    if (trimmed === "+") return true;
    if (trimmed === "-" || trimmed === "−" || trimmed === "–") return "-";
    if (trimmed.toLowerCase() === "true") return true;
    if (trimmed.toLowerCase() === "false") return false;
    return trimmed;
  }

  return cell;
}

function normalizeBluetoothValue(value) {
  if (value === 4) return "4.0";
  if (typeof value === "string") {
    const trimmed = value.trim();
    if (trimmed === "4") return "4.0";
  }
  return value;
}

function main() {
  if (!fs.existsSync(INPUT_PATH)) {
    console.error(
      `Excel file not found at ${INPUT_PATH}. Please copy your comparison.xlsx there.`,
    );
    process.exit(1);
  }

  const workbook = xlsx.readFile(INPUT_PATH);
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];

  // Convert to 2D array: [ [header...], [row1...], [row2...] ... ]
  const rows = xlsx.utils.sheet_to_json(sheet, { header: 1 });
  if (!rows.length) {
    console.error("Sheet is empty.");
    process.exit(1);
  }

  const headerRow = rows[0];
  const deviceColumns = headerRow.slice(1); // skip first 'Parameter' cell

  /** @type {Record<string, { name: string; series?: string; connectivity?: string; specs: Record<string, unknown> }>} */
  const deviceData = {};

  /**
   * rows: ordered list of rows to render.
   * - section: a header like "Network" / "GNSS"
   * - param: a parameter row with values per device
   *
   * @type {{ type: "section"; label: string } | { type: "param"; label: string }}[]
   */
  const rowOrder = [];

  for (const deviceHeader of deviceColumns) {
    if (!deviceHeader) continue;
    const key = String(deviceHeader).trim();
    if (!key) continue;

    deviceData[key] = deviceData[key] ?? {
      name: key,
      specs: {},
    };
  }

  for (let r = 1; r < rows.length; r += 1) {
    const row = rows[r];
    if (!row || !row.length) continue;

    const rawLabel = row[0];
    if (!rawLabel) continue;

    const label = String(rawLabel).trim();
    if (!label) continue;

    const hasAnyValue = row
      .slice(1)
      .some(
        (cell) =>
          cell !== null &&
          cell !== undefined &&
          String(cell).trim() !== "",
      );

    // If the row has only a label and no values across devices, treat it as a section header.
    if (!hasAnyValue) {
      rowOrder.push({ type: "section", label });
      continue;
    }

    rowOrder.push({ type: "param", label });

    for (let c = 1; c < headerRow.length; c += 1) {
      const deviceKeyRaw = headerRow[c];
      if (!deviceKeyRaw) continue;

      const deviceKey = String(deviceKeyRaw).trim();
      if (!deviceKey || !deviceData[deviceKey]) continue;

      let value = normalizeCell(row[c]);
      if (label.trim().toLowerCase() === "bluetooth") {
        value = normalizeBluetoothValue(value);
      }
      deviceData[deviceKey].specs[label] = value;
    }
  }

  const payload = {
    rows: rowOrder,
    deviceData,
  };

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(payload, null, 2), "utf8");
  console.log(
    `Generated comparison data with ${rowOrder.length} rows for ${Object.keys(deviceData).length} devices.`,
  );
  console.log(`Output written to ${OUTPUT_PATH}`);
}

main();

