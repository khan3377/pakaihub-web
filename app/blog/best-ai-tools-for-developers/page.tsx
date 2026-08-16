import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Tools for Developers | PakAIHub",
  description:
    "Explore AI tools that can help developers write code, debug problems, understand projects, and work faster.",
};

export default function DevelopersAIPage() {
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
          <div className="text-6xl">💻</div>

          <p className="mt-6 text-sm font-medium text-blue-400">
            Development
          </p>

          <h1 className="mt-3 text-4xl font-bold md:text-5xl">
            Best AI Tools for Developers
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            Explore AI tools that can help developers write code, debug
            problems, understand projects, and work faster.
          </p>
        </div>

        <div className="mt-14 space-y-6">
          <article className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-2xl font-bold">
              How AI Helps Developers
            </h2>

            <p className="mt-4 leading-8 text-slate-400">
              AI coding tools can help developers generate code, explain
              unfamiliar code, find errors, and speed up everyday
              development tasks.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-2xl font-bold">
              AI for Coding
            </h2>

            <p className="mt-4 leading-8 text-slate-400">
              Developers can use AI assistants to generate code, complete
              repetitive tasks, create functions, and explore different
              solutions to programming problems.
            </p>
          </article>

          <article className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
            <h2 className="text-2xl font-bold">
              AI for Debugging
            </h2>

            <p className="mt-4 leading-8 text-slate-400">
              AI can help developers understand error messages, find
              possible bugs, explain problems, and suggest ways to improve
              their code.
            </p>
          </article>
        </div>

        <div className="mt-10 text-center">
          <a
            href="/ai-tools"
            className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
          >
            Explore AI Tools →
          </a>
        </div>
      </section>

      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
        © 2026 PakAIHub. All rights reserved.
      </footer>
    </main>
  );
}