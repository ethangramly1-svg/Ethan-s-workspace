import type { Metadata } from "next";
import "./globals.css";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";

export const metadata: Metadata = {
  title: "Fit Club Vegas-NW — Burn It Down",
  description:
    "Northwest Las Vegas's fire-fueled training studio. Tap any body part on our 3D model to find the workout that torches the fat.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        <ThemeSwitcher />
        {children}
      </body>
    </html>
  );
}
