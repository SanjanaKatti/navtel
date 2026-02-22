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
        "w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 " + className
      }
    >
      {children}
    </div>
  );
};

export default LayoutContainer;
