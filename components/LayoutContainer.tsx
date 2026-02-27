import React from "react";

type LayoutContainerProps = {
  children: React.ReactNode;
  className?: string;
};

/**
 * Shared width-constrained layout container.
 *
 * - Centers content horizontally.
 * - Applies a consistent max-width across the site.
 * - Adds responsive horizontal padding.
 *
 * Use this for all sections that should NOT be full-bleed.
 */
const LayoutContainer: React.FC<LayoutContainerProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={
        "w-full max-w-[1920px] mx-auto px-[clamp(1rem,2.8vw,4rem)] " + className
      }
    >
      {children}
    </div>
  );
};

export default LayoutContainer;
