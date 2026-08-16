import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Suno AI | PakAIHub",
  description:
    "Learn about Suno, an AI music creation tool for generating songs and audio from text prompts.",
};

export default function SunoPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="border-b border-slate-800 px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/" className="text-2xl font-bold text-blue-400">
            PakAIHub
          </a>

          <div className="flex items-center gap-6 text-sm text-slate-300">
            <a href="/" className="hover:text-white">Home</a>
            <a href="/ai-tools" className="hover:text-white">AI Tools</a>
            <a href="/categories" className="hover:text-white">Categories</a>
            <a href="/blog" className="hover:text-white">Blog</a>
            <a href="/contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-4xl px-6 py-20">
        <div className="text-center">
          <div className="text-6xl">🎵</div>

          <p className="mt-6 text-sm font-medium text-blue-400">
            Audio
          </p>

          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Suno AI
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Suno is an AI music creation tool for generating songs and
            audio from text prompts.
          </p>

          <a
            href="https://suno.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
          >
            Visit Suno →
          </a>
        </div>

        <div className="mt-14 rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="text-2xl font-bold">
            About Suno
          </h2>

          <p className="mt-4 leading-8 text-slate-400">
            Suno can help users create original music and audio content
            using AI and text-based prompts.
          </p>
        </div>
      </section>

      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
        © 2026 PakAIHub. All rights reserved.
      </footer>
    </main>
  );
}