"use client";
import React from "react";
import { Check, ChevronDown } from "lucide-react";

interface SpecItem {
  label: string;
  value: string | boolean;
}

interface SpecGroup {
  groupName: string;
  items: SpecItem[];
}

interface TechnicalSpecsProps {
  groups: SpecGroup[];
}

const TechnicalSpecs: React.FC<TechnicalSpecsProps> = ({ groups }) => {
  return (
    <section className="sp-section dp-specs" data-reveal>
      <div className="sp-shell">
        <div className="sp-heading sp-heading-split">
          <div>
            <p className="sp-eyebrow">TECHNICAL SPECIFICATIONS</p>
            <h2>Detailed hardware and software capabilities</h2>
          </div>
          <p>Expand any group to see the full specification for this model.</p>
        </div>

        <div className="dp-spec-list">
          {groups.map((group, gIdx) => (
            <details className="dp-spec" key={group.groupName} open={gIdx === 0}>
              <summary>
                <h3>
                  <i>{String(gIdx + 1).padStart(2, "0")}</i>
                  {group.groupName}
                </h3>
                <ChevronDown aria-hidden="true" />
              </summary>
              <dl className="dp-spec-grid">
                {group.items.map((item) => (
                  <div className="dp-spec-item" key={item.label}>
                    <dt>{item.label}</dt>
                    <dd>
                      {typeof item.value === "boolean" ? (
                        item.value ? (
                          <span className="dp-spec-yes">
                            <Check aria-hidden="true" />
                            Supported
                          </span>
                        ) : (
                          "Not available"
                        )
                      ) : (
                        item.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;
