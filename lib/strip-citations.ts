/** OpenAI file-search citation tokens, e.g. fileciteturn0file0 or 【12†source】. */
const CITE_OPEN = "\uE200";
const CITE_CLOSE = "\uE201";

export function stripCitationMarkers(text: string): string {
  return text
    .replace(new RegExp(`${CITE_OPEN}[\\s\\S]*?${CITE_CLOSE}`, "g"), "")
    .replace(/【[^】]*】/g, "")
    .replace(/[\uE200-\uE26F]/g, "")
    .replace(/\bfilecite\b/gi, "")
    .replace(/\bturn\d+file\d+\b/gi, "")
    .replace(/[ \t]{2,}/g, " ");
}

/** Holds incomplete citation spans so they are not streamed to the UI. */
export function createCitationStreamFilter() {
  let pending = "";

  const flushComplete = (): string => {
    let emit = "";
    while (pending.length) {
      const startCite = pending.indexOf(CITE_OPEN);
      const startBracket = pending.indexOf("【");
      const start =
        startCite === -1
          ? startBracket
          : startBracket === -1
            ? startCite
            : Math.min(startCite, startBracket);
      if (start === -1) {
        emit += pending;
        pending = "";
        break;
      }
      emit += pending.slice(0, start);
      const rest = pending.slice(start);
      const close =
        rest.startsWith(CITE_OPEN) ? rest.indexOf(CITE_CLOSE) : rest.indexOf("】");
      if (close === -1) {
        pending = rest;
        break;
      }
      pending = rest.slice(close + 1);
    }
    return stripCitationMarkers(emit);
  };

  return {
    push(chunk: string): string {
      pending += chunk;
      return flushComplete();
    },
    end(): string {
      const leftover = stripCitationMarkers(pending);
      pending = "";
      return leftover;
    },
  };
}
