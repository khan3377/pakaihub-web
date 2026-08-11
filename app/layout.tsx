import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PakAIHub",
  description: "AI Tools Directory",
  verification: {
    google: "7YZcZcfgPjn760a6AWGlF-8vksOapVcq4dFs0P5lsmg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}