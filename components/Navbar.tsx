"use client";

import { usePathname } from "next/navigation";
import UnifiedHeader from "./UnifiedHeader";

type NavbarProps = {
  /** Kept so existing pages can pass it. The unified header uses one treatment. */
  variant?: "default" | "soft";
};

function sectionFromPath(pathname: string) {
  if (pathname === "/") return "home";
  if (pathname.startsWith("/products")) return "products";
  if (pathname.startsWith("/use-cases")) return "use-cases";
  if (pathname.startsWith("/support")) return "support";
  if (pathname.startsWith("/about")) return "about";
  if (pathname.startsWith("/contact")) return "contact";
  return "";
}

export default function Navbar(_props: NavbarProps) {
  const pathname = usePathname() || "/";
  return <UnifiedHeader active={sectionFromPath(pathname)} />;
}
