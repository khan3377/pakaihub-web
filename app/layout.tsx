import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://pakaihub-web.vercel.app"),

  title: {
    default: "PakAIHub - Pakistan's AI Tools Directory",
    template: "%s | PakAIHub",
  },

  description:
    "Discover the best AI tools for students, freelancers, businesses, developers, and creators with PakAIHub.",

  keywords: [
    "AI tools",
    "AI tools directory",
    "Pakistan AI tools",
    "artificial intelligence tools",
    "AI tools for students",
    "AI tools for freelancers",
    "AI tools for businesses",
    "PakAIHub",
  ],

  authors: [{ name: "PakAIHub" }],
  creator: "PakAIHub",

  verification: {
    google: "7YZcZcfgPjn760a6AWGlF-8vksOapVcq4dFs0P5lsmg",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "PakAIHub - Pakistan's AI Tools Directory",
    description:
      "Discover useful AI tools for students, freelancers, businesses, developers, and creators.",
    url: "https://pakaihub-web.vercel.app",
    siteName: "PakAIHub",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
  <Script
  async
  src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4641340441422594"
  crossOrigin="anonymous"
  strategy="beforeInteractive"
/>
  {children}
</body>
    </html>
  );
}