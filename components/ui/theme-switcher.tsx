"use client";

import { ThemeToggle } from "@/components/ui/curtain-theme-toggle";

export function ThemeSwitcher() {
  return (
    <div className="fixed top-4 right-4 z-[9999]">
      <ThemeToggle variant="icon" defaultTheme="dark" duration={550} />
    </div>
  );
}
