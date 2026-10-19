"use client";

import { FormEvent, useCallback, useEffect, useRef, useState } from "react";

type KnowledgeFile = {
  id: string;
  filename: string;
  status: "in_progress" | "completed" | "cancelled" | "failed";
  createdAt: number;
  error: string | null;
};

const STATUS_LABEL: Record<KnowledgeFile["status"], string> = {
  completed: "Indexed",
  in_progress: "Indexing",
  failed: "Failed",
  cancelled: "Cancelled",
};

async function readError(response: Response): Promise<string> {
  try {
    const body = (await response.json()) as { error?: string };
    if (body.error) return body.error;
  } catch {
    // non-JSON body
  }
  return "The knowledge store request failed.";
}

export default function AdminPage() {
  const [files, setFiles] = useState<KnowledgeFile[]>([]);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);
  const [wikiLinks, setWikiLinks] = useState("");
  const uploadInputRef = useRef<HTMLInputElement>(null);
  const replaceInputRef = useRef<HTMLInputElement>(null);
  const replaceIdRef = useRef<string | null>(null);

  const loadFiles = useCallback(async () => {
    const response = await fetch("/api/admin/files", { cache: "no-store" });
    if (!response.ok) throw new Error(await readError(response));
    const body = (await response.json()) as { files: KnowledgeFile[] };
    setFiles(body.files);
  }, []);

  useEffect(() => {
    let cancelled = false;
    loadFiles()
      .catch((err: unknown) => {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Could not load files.");
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [loadFiles]);

  async function uploadPdf(file: File, replaceId?: string) {
    setBusy(true);
    setNotice(null);
    setError(null);
    setPendingDeleteId(null);
    try {
      const form = new FormData();
      form.set("file", file);
      if (replaceId) form.set("replaceId", replaceId);
      const response = await fetch("/api/admin/files", {
        method: "POST",
        body: form,
      });
      if (!response.ok) throw new Error(await readError(response));
      setNotice(
        replaceId
          ? `${file.name} replaced the previous file and is indexed.`
          : `${file.name} is indexed.`,
      );
      await loadFiles();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Upload failed.");
      await loadFiles().catch(() => undefined);
    } finally {
      setBusy(false);
    }
  }

  async function onAddWiki(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const urls = wikiLinks
      .split(/\n+/)
      .map((line) => line.trim())
      .filter(Boolean);
    if (urls.length === 0) {
      setError("Paste a Wikipedia or NTC Wiki link.");
      return;
    }
    if (urls.length > 10) {
      setError("Add up to 10 links at a time.");
      return;
    }

    setBusy(true);
    setNotice(null);
    setError(null);
    setPendingDeleteId(null);
    const added: string[] = [];
    const warnings: string[] = [];
    try {
      for (let index = 0; index < urls.length; index += 1) {
        const url = urls[index];
        setNotice(`Converting ${index + 1} of ${urls.length} to PDF…`);
        const response = await fetch("/api/admin/wiki", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url }),
        });
        if (!response.ok) {
          const message = await readError(response);
          throw new Error(`${url}: ${message}`);
        }
        const body = (await response.json()) as {
          files?: KnowledgeFile[];
          file?: KnowledgeFile;
          warnings?: string[];
        };
        const listed = body.files ?? (body.file ? [body.file] : []);
        added.push(
          ...listed.flatMap((file) => (file?.filename ? [file.filename] : [])),
        );
        warnings.push(...(body.warnings ?? []));
      }
      const indexed =
        added.length === 1 ? `${added[0]} is indexed.` : `${added.length} files are indexed.`;
      setNotice(warnings.length > 0 ? `${indexed} Skipped: ${warnings.join(" ")}` : indexed);
      setWikiLinks("");
      await loadFiles();
    } catch (err: unknown) {
      setNotice(null);
      setError(err instanceof Error ? err.message : "Could not convert that link.");
      await loadFiles().catch(() => undefined);
    } finally {
      setBusy(false);
    }
  }

  async function onUpload(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const file = uploadInputRef.current?.files?.[0];
    if (!file) {
      setError("Choose a PDF to upload.");
      return;
    }
    await uploadPdf(file);
    if (uploadInputRef.current) uploadInputRef.current.value = "";
  }

  function startReplace(id: string) {
    replaceIdRef.current = id;
    replaceInputRef.current?.click();
  }

  async function onReplaceSelected() {
    const file = replaceInputRef.current?.files?.[0];
    const replaceId = replaceIdRef.current ?? undefined;
    if (replaceInputRef.current) replaceInputRef.current.value = "";
    replaceIdRef.current = null;
    if (!file || !replaceId) return;
    await uploadPdf(file, replaceId);
  }

  async function confirmDelete(id: string) {
    setBusy(true);
    setNotice(null);
    setError(null);
    try {
      const response = await fetch(`/api/admin/files/${encodeURIComponent(id)}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error(await readError(response));
      setNotice("File removed from the knowledge store.");
      setPendingDeleteId(null);
      setFiles((current) => current.filter((file) => file.id !== id));
      await loadFiles();
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : "Delete failed.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <main className="min-h-screen bg-brand-light-3 text-brand-navy">
      <div className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6">
        <p className="text-label">Admin</p>
        <h1 className="mt-2 text-h2">Knowledge PDFs</h1>
        <p className="mt-3 max-w-2xl text-body">
          Upload a PDF, or paste a Wikipedia or NTC Wiki link. A link is
          converted to a PDF and stored with the other files. A file with the
          same name replaces the copy already stored. Indexing can take a minute.
        </p>

        <form
          onSubmit={onUpload}
          className="mt-8 flex flex-col gap-4 rounded-3xl bg-white p-5 shadow-sm sm:flex-row sm:items-end"
        >
          <label className="flex min-w-0 flex-1 flex-col gap-2 text-sm font-semibold">
            PDF file
            <input
              ref={uploadInputRef}
              type="file"
              name="file"
              accept="application/pdf,.pdf"
              disabled={busy}
              className="block w-full text-sm font-medium text-neutral-dark-gray file:mr-4 file:rounded-full file:border-0 file:bg-brand-navy file:px-4 file:py-2 file:text-sm file:font-bold file:text-white hover:file:bg-brand-primary"
            />
          </label>
          <button
            type="submit"
            disabled={busy}
            className="rounded-full bg-brand-navy px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-primary disabled:opacity-60"
          >
            {busy ? "Working…" : "Upload PDF"}
          </button>
        </form>

        <form
          onSubmit={onAddWiki}
          className="mt-4 flex flex-col gap-4 rounded-3xl bg-white p-5 shadow-sm"
        >
          <label className="flex flex-col gap-2 text-sm font-semibold">
            Wikipedia or NTC Wiki links
            <textarea
              value={wikiLinks}
              onChange={(event) => setWikiLinks(event.target.value)}
              disabled={busy}
              rows={4}
              placeholder={"https://en.wikipedia.org/wiki/Telematics\nhttps://wiki.navtelecom.ru/en/home/devices/s2010"}
              className="w-full rounded-2xl border border-neutral-light-gray-1 px-4 py-3 text-sm font-medium text-brand-navy outline-none focus:border-brand-primary"
            />
          </label>
          <p className="text-sm font-medium text-neutral-dark-gray">
            One link per line. Wikipedia pages use Wikipedia&apos;s own PDF.
            An NTC Wiki page is saved as text, and every PDF linked from that
            page, such as a datasheet, is indexed too.
          </p>
          <div>
            <button
              type="submit"
              disabled={busy}
              className="rounded-full bg-brand-navy px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-brand-primary disabled:opacity-60"
            >
              {busy ? "Working…" : "Convert to PDF"}
            </button>
          </div>
        </form>

        <input
          ref={replaceInputRef}
          type="file"
          accept="application/pdf,.pdf"
          className="hidden"
          onChange={onReplaceSelected}
        />

        {notice ? (
          <p className="mt-4 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-brand-deep">
            {notice}
          </p>
        ) : null}
        {error ? (
          <p className="mt-4 rounded-2xl bg-white px-4 py-3 text-sm font-semibold text-red-700">
            {error}
          </p>
        ) : null}

        <section className="mt-8 overflow-hidden rounded-3xl bg-white shadow-sm">
          <div className="flex items-center justify-between gap-4 border-b border-neutral-light-gray-1 px-5 py-4">
            <h2 className="text-h3">Files in the store</h2>
            <button
              type="button"
              disabled={busy || loading}
              onClick={() => {
                setLoading(true);
                setError(null);
                loadFiles()
                  .catch((err: unknown) => {
                    setError(
                      err instanceof Error ? err.message : "Could not load files.",
                    );
                  })
                  .finally(() => setLoading(false));
              }}
              className="text-sm font-bold text-brand-deep hover:text-brand-primary disabled:opacity-60"
            >
              Refresh
            </button>
          </div>

          {loading ? (
            <p className="px-5 py-8 text-sm font-medium text-neutral-dark-gray">
              Loading files…
            </p>
          ) : files.length === 0 ? (
            <p className="px-5 py-8 text-sm font-medium text-neutral-dark-gray">
              No files in the knowledge store yet.
            </p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead className="text-label">
                  <tr>
                    <th className="px-5 py-3 font-bold">Name</th>
                    <th className="px-5 py-3 font-bold">Status</th>
                    <th className="px-5 py-3 font-bold">Added</th>
                    <th className="px-5 py-3 font-bold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {files.map((file) => (
                    <tr
                      key={file.id}
                      className="border-t border-neutral-light-gray-1 align-top"
                    >
                      <td className="px-5 py-4 font-semibold">
                        {file.filename}
                        {file.error ? (
                          <p className="mt-1 text-xs font-medium text-red-700">
                            {file.error}
                          </p>
                        ) : null}
                      </td>
                      <td className="px-5 py-4 font-medium">
                        {STATUS_LABEL[file.status]}
                      </td>
                      <td className="px-5 py-4 font-medium text-neutral-dark-gray">
                        {new Date(file.createdAt * 1000).toLocaleString()}
                      </td>
                      <td className="px-5 py-4">
                        {pendingDeleteId === file.id ? (
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="text-xs font-semibold">
                              Remove this file?
                            </span>
                            <button
                              type="button"
                              disabled={busy}
                              onClick={() => confirmDelete(file.id)}
                              className="rounded-full bg-red-700 px-3 py-1.5 text-xs font-bold text-white disabled:opacity-60"
                            >
                              Delete
                            </button>
                            <button
                              type="button"
                              disabled={busy}
                              onClick={() => setPendingDeleteId(null)}
                              className="rounded-full px-3 py-1.5 text-xs font-bold text-brand-navy"
                            >
                              Cancel
                            </button>
                          </div>
                        ) : (
                          <div className="flex flex-wrap gap-2">
                            <button
                              type="button"
                              disabled={busy}
                              onClick={() => startReplace(file.id)}
                              className="rounded-full bg-brand-light-2 px-3 py-1.5 text-xs font-bold text-brand-navy disabled:opacity-60"
                            >
                              Replace
                            </button>
                            <button
                              type="button"
                              disabled={busy}
                              onClick={() => setPendingDeleteId(file.id)}
                              className="rounded-full px-3 py-1.5 text-xs font-bold text-red-700 disabled:opacity-60"
                            >
                              Delete
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
