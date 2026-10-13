"use client";
import React from "react";
import {
  ArrowUpRight,
  BookOpen,
  Download,
  FileText,
  Monitor,
  Smartphone,
} from "lucide-react";

interface ProductCard {
  name: string;
  series: string;
  connectivity: "2g" | "4g" | "LTE";
  specs: string[];
  buttonText: string;
  onButtonClick?: () => void;
  href?: string;
  /** When set, adds download attribute for direct file download (works best with same-origin URLs) */
  downloadFileName?: string;
}

interface ProductCenterProps {
  heading: string;
  products: ProductCard[];
  description?: string;
}

const resourceIcon = (name: string) => {
  const key = name.toLowerCase();
  if (key.includes("brochure")) return FileText;
  if (key.includes("knowledge")) return BookOpen;
  if (key.includes("android")) return Smartphone;
  if (key.includes("pc")) return Monitor;
  return Download;
};

const ProductCenter: React.FC<ProductCenterProps> = ({
  heading,
  products,
  description = "Resources and tools for implementation",
}) => {
  return (
    <section className="sp-section sp-strengths dp-resources" data-reveal>
      <div className="sp-shell">
        <div className="sp-heading sp-heading-split">
          <div>
            <p className="sp-eyebrow">RESOURCES</p>
            <h2>{heading}</h2>
          </div>
          {description ? <p>{description}</p> : null}
        </div>

        <div className="dp-resource-grid">
          {products.map((product, idx) => {
            const Icon = resourceIcon(product.name);
            const isExternal = !!product.href && /^https?:\/\//i.test(product.href);
            const content = (
              <>
                {product.buttonText}
                <ArrowUpRight aria-hidden="true" />
              </>
            );
            return (
              <article className="dp-resource" key={product.name}>
                <div className="dp-resource-top">
                  <span>{String(idx + 1).padStart(2, "0")}</span>
                  <Icon aria-hidden="true" />
                </div>
                <h3>{product.name}</h3>
                <p>{product.series}</p>
                {product.href ? (
                  <a
                    href={product.href}
                    className="sp-button sp-button-primary"
                    {...(isExternal
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    {...(product.downloadFileName
                      ? { download: product.downloadFileName }
                      : {})}
                  >
                    {content}
                  </a>
                ) : (
                  <button
                    type="button"
                    onClick={product.onButtonClick}
                    className="sp-button sp-button-primary"
                  >
                    {content}
                  </button>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCenter;
