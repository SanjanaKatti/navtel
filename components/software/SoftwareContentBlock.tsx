"use client";
import React from "react";

export interface ContentBlockItem {
  paragraphs?: string[];
  items?: string[];
  highlight?: { line1: string; line2?: string };
}

interface SoftwareContentBlockProps {
  title: string;
  content: ContentBlockItem;
  /** When true, title card is on the left (desktop); when false, content is on the left */
  titleFirst?: boolean;
}

const SoftwareContentBlock: React.FC<SoftwareContentBlockProps> = ({
  title,
  content,
  titleFirst = false,
}) => {
  const orderCls = titleFirst
    ? "lg:[&>*:first-child]:order-1 lg:[&>*:last-child]:order-2"
    : "lg:[&>*:first-child]:order-2 lg:[&>*:last-child]:order-1";

  return (
    <div className={`grid lg:grid-cols-2 gap-4 ${orderCls}`}>
      <div className="rounded-3xl border border-gray-200 bg-brand-light-3 p-8 md:p-10 flex items-center justify-center text-center">
        <h3 className="text-h2">{title}</h3>
      </div>
      <div className="rounded-3xl border border-gray-200 bg-[#1E293B] p-8 md:p-10 text-white">
        {content.paragraphs && content.paragraphs.length > 0 && (
          <div className="space-y-4 text-base md:text-lg text-white/90 mb-4">
            {content.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        )}
        {content.items && content.items.length > 0 && (
          <ul className="space-y-2 text-base md:text-lg text-white/90">
            {content.items.map((item, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-white/80 shrink-0" />
                <span>{item.trim()}</span>
              </li>
            ))}
          </ul>
        )}
        {content.highlight && (
          <div className="mt-6 rounded-2xl bg-white/10 border border-white/20 p-4">
            <p className="text-sm md:text-base text-white/90">
              {content.highlight.line1}
            </p>
            {content.highlight.line2 && (
              <p className="text-sm md:text-base text-white/90 mt-1">
                {content.highlight.line2}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default SoftwareContentBlock;
