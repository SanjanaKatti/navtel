"use client";

import { usePathname } from "next/navigation";
import { ChatCircleDots, PaperPlaneRight, Trash, X } from "phosphor-react";
import {
  type FormEvent,
  type KeyboardEvent,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import { stripCitationMarkers } from "@/lib/strip-citations";
import "./chat-widget.css";

type ChatMessage = {
  id: string;
  role: "user" | "assistant";
  content: string;
  sources?: string[];
  error?: boolean;
};

type StreamEvent =
  | { type: "delta"; text: string }
  | { type: "sources"; sources: string[] }
  | { type: "error"; message: string };

const STORAGE_KEY = "navtel-chat-v1";
const MAX_HISTORY_SENT = 10;
const MAX_INPUT_CHARS = 1000;

const SUGGESTIONS = [
  "Which tracker is best for a small fleet?",
  "What is NTC Configurator?",
  "How do I check my warranty?",
];

const newId = () => Math.random().toString(36).slice(2, 10);

const cleanText = stripCitationMarkers;

/* ---------- tiny, safe markdown renderer (bold, bullets, numbered lists) ---------- */
function renderInline(text: string, keyPrefix: string): ReactNode[] {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith("**") && part.endsWith("**") && part.length > 4 ? (
      <strong key={`${keyPrefix}-${i}`}>{part.slice(2, -2)}</strong>
    ) : (
      <span key={`${keyPrefix}-${i}`}>{part}</span>
    ),
  );
}

function renderMarkdown(raw: string): ReactNode {
  const lines = cleanText(raw).split("\n");
  const blocks: ReactNode[] = [];
  let list: { ordered: boolean; items: string[] } | null = null;

  const flushList = () => {
    if (!list) return;
    const Tag = list.ordered ? "ol" : "ul";
    const key = `l-${blocks.length}`;
    blocks.push(
      <Tag key={key}>
        {list.items.map((item, i) => (
          <li key={i}>{renderInline(item, `${key}-${i}`)}</li>
        ))}
      </Tag>,
    );
    list = null;
  };

  lines.forEach((line) => {
    const bullet = line.match(/^\s*[-*•]\s+(.*)$/);
    const numbered = line.match(/^\s*\d+[.)]\s+(.*)$/);
    if (bullet || numbered) {
      const ordered = Boolean(numbered);
      if (list && list.ordered !== ordered) flushList();
      list ??= { ordered, items: [] };
      list.items.push((bullet ?? numbered)![1]);
      return;
    }
    flushList();
    if (line.trim()) {
      const key = `p-${blocks.length}`;
      blocks.push(<p key={key}>{renderInline(line, key)}</p>);
    }
  });
  flushList();
  return blocks;
}

export function ChatWidget() {
  const pathname = usePathname();
  const hidden = pathname.startsWith("/contact/");

  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const hydrated = useRef(false);
  const abortRef = useRef<AbortController | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  /* Persist history for the browser session. */
  useEffect(() => {
    if (!hydrated.current) return;
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-40)));
    } catch {
      /* storage unavailable */
    }
  }, [messages]);

  /* Keep the newest message in view. */
  useEffect(() => {
    const el = scrollRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, open]);

  /* Abort any in-flight request on unmount. */
  useEffect(() => () => abortRef.current?.abort(), []);

  const openPanel = () => {
    if (!hydrated.current) {
      hydrated.current = true;
      try {
        const saved = sessionStorage.getItem(STORAGE_KEY);
        if (saved) setMessages(JSON.parse(saved) as ChatMessage[]);
      } catch {
        /* ignore corrupt storage */
      }
    }
    setOpen(true);
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const clearChat = () => {
    abortRef.current?.abort();
    setMessages([]);
    setLoading(false);
  };

  const updateLast = (fn: (m: ChatMessage) => ChatMessage) =>
    setMessages((prev) =>
      prev.length ? [...prev.slice(0, -1), fn(prev[prev.length - 1])] : prev,
    );

  const send = async (text: string) => {
    const content = text.trim();
    if (!content || loading) return;

    const history = [...messages, { id: newId(), role: "user" as const, content }];
    setMessages([...history, { id: newId(), role: "assistant", content: "" }]);
    setInput("");
    setLoading(true);

    const controller = new AbortController();
    abortRef.current = controller;

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        signal: controller.signal,
        body: JSON.stringify({
          messages: history
            .filter((m) => !m.error && m.content)
            .slice(-MAX_HISTORY_SENT)
            .map(({ role, content: c }) => ({ role, content: c })),
        }),
      });

      if (!res.ok || !res.body) {
        const data = (await res.json().catch(() => null)) as {
          error?: string;
        } | null;
        throw new Error(data?.error ?? "Request failed.");
      }

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";

      const handle = (line: string) => {
        if (!line.trim()) return;
        const event = JSON.parse(line) as StreamEvent;
        if (event.type === "delta") {
          updateLast((m) => ({
            ...m,
            content: stripCitationMarkers(m.content + event.text),
          }));
        } else if (event.type === "sources") {
          updateLast((m) => ({ ...m, sources: event.sources }));
        } else if (event.type === "error") {
          updateLast((m) => ({
            ...m,
            content: m.content || event.message,
            error: !m.content,
          }));
        }
      };

      for (;;) {
        const { done, value } = await reader.read();
        if (done) break;
        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split("\n");
        buffer = lines.pop() ?? "";
        lines.forEach(handle);
      }
      handle(buffer);
    } catch (err) {
      if ((err as Error).name === "AbortError") return;
      updateLast((m) => ({
        ...m,
        content:
          m.content ||
          (err instanceof Error && err.message
            ? err.message
            : "Sorry, something went wrong. Please try again."),
        error: !m.content,
      }));
    } finally {
      if (abortRef.current === controller) {
        abortRef.current = null;
        setLoading(false);
      }
    }
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    void send(input);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      void send(input);
    }
  };

  if (hidden) return null;

  return (
    <>
      {!open && (
        <button
          type="button"
          className="cw-launcher"
          onClick={openPanel}
          aria-label="Open chat assistant"
        >
          <ChatCircleDots size={26} weight="fill" aria-hidden />
        </button>
      )}

      {open && (
        <section
          className="cw-panel"
          role="dialog"
          aria-modal="false"
          aria-label="Navtelecom assistant"
        >
          <header className="cw-header">
            <div className="cw-header-icon">
              <ChatCircleDots size={20} weight="fill" aria-hidden />
            </div>
            <div className="cw-header-text">
              <strong>Navtelecom Assistant</strong>
              <span>Ask about products, software and support</span>
            </div>
            <button
              type="button"
              className="cw-icon-btn"
              onClick={clearChat}
              disabled={messages.length === 0}
              aria-label="Clear chat"
              title="Clear chat"
            >
              <Trash size={18} aria-hidden />
            </button>
            <button
              type="button"
              className="cw-icon-btn"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
            >
              <X size={18} weight="bold" aria-hidden />
            </button>
          </header>

          <div className="cw-messages" ref={scrollRef} aria-live="polite">
            {messages.length === 0 ? (
              <div className="cw-welcome">
                <p>Hi! I can answer questions using Navtelecom documentation.</p>
                <div className="cw-suggestions">
                  {SUGGESTIONS.map((s) => (
                    <button key={s} type="button" onClick={() => void send(s)}>
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              messages.map((m, i) => {
                const isStreamingPlaceholder =
                  loading && i === messages.length - 1 && !m.content;
                return (
                  <div
                    key={m.id}
                    className={`cw-msg cw-msg-${m.role}${m.error ? " cw-msg-error" : ""}`}
                  >
                    {isStreamingPlaceholder ? (
                      <span className="cw-typing" aria-label="Assistant is typing">
                        <i />
                        <i />
                        <i />
                      </span>
                    ) : m.role === "assistant" ? (
                      renderMarkdown(m.content)
                    ) : (
                      <p>{m.content}</p>
                    )}
                    {m.sources && m.sources.length > 0 && (
                      <div className="cw-sources">
                        <span>Sources:</span>
                        {m.sources.map((s) => (
                          <em key={s} title={s}>
                            {s.replace(/\.[^.]+$/, "")}
                          </em>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })
            )}
          </div>

          <form className="cw-form" onSubmit={onSubmit}>
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value.slice(0, MAX_INPUT_CHARS))}
              onKeyDown={onKeyDown}
              placeholder="Type your question..."
              rows={1}
              aria-label="Your message"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              aria-label="Send message"
            >
              <PaperPlaneRight size={18} weight="fill" aria-hidden />
            </button>
          </form>
          <p className="cw-disclaimer">
            AI-generated answers may be inaccurate. For critical details, contact
            Navtelecom.
          </p>
        </section>
      )}
    </>
  );
}
