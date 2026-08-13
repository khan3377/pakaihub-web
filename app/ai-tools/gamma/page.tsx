import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gamma",
  description:
    "Learn about Gamma, an AI tool for creating presentations, documents, and visual content.",
};

export default function GammaPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="border-b border-slate-800 px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/" className="text-2xl font-bold text-blue-400">
            PakAIHub
          </a>

          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="/" className="hover:text-white">
              Home
            </a>

            <a href="/ai-tools" className="text-blue-400">
              AI Tools
            </a>

            <a href="/categories" className="hover:text-white">
              Categories
            </a>

            <a href="/blog" className="hover:text-white">
              Blog
            </a>

            <a href="/contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8 md:p-12">
          <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-blue-400">
            Productivity
          </span>

          <h1 className="mt-6 text-4xl font-bold md:text-5xl">
            Gamma
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            Gamma is an AI tool for creating presentations, documents, and
            visual content quickly and easily.
          </p>

          <a
            href="https://gamma.app"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Visit Gamma →
          </a>

          <div className="mt-12 border-t border-slate-800 pt-8">
            <h2 className="text-2xl font-bold">
              What can Gamma help with?
            </h2>

            <ul className="mt-5 space-y-3 text-slate-400">
              <li>• AI presentations</li>
              <li>• Documents and reports</li>
              <li>• Visual content</li>
              <li>• Ideas and storytelling</li>
              <li>• Quick content creation</li>
            </ul>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
        © 2026 PakAIHub. All rights reserved.
      </footer>
    </main>
  );
}