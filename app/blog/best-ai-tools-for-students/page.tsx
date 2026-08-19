import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best AI Tools for Students",
  description:
    "Discover useful AI tools for students to help with learning, research, writing, studying, and productivity.",
};

export default function StudentsAIPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="border-b border-slate-800 px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/" className="text-2xl font-bold text-blue-400">
            PakAIHub
          </a>

          <div className="flex items-center gap-6 text-sm text-slate-300">
            <a href="/" className="hover:text-white">
              Home
            </a>

            <a href="/ai-tools" className="hover:text-white">
              AI Tools
            </a>

            <a href="/categories" className="hover:text-white">
              Categories
            </a>

            <a href="/blog" className="text-blue-400">
              Blog
            </a>

            <a href="/contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </div>
      </nav>

      <article className="mx-auto max-w-4xl px-6 py-16">
        <p className="text-sm font-medium text-blue-400">
          Education
        </p>

        <h1 className="mt-4 text-4xl font-bold md:text-5xl">
          Best AI Tools for Students
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-400">
          AI tools can help students understand difficult topics, organize
          research, improve writing, and manage everyday study tasks. The
          right tool depends on what you are trying to accomplish.
        </p>

        <div className="mt-12 space-y-10">
          <section>
            <h2 className="text-2xl font-bold">
              1. ChatGPT
            </h2>

            <p className="mt-3 leading-8 text-slate-400">
              ChatGPT can help students understand concepts, brainstorm ideas,
              practice questions, summarize information, and improve drafts.
              It is especially useful when you ask for an explanation at a
              level that matches your current understanding.
            </p>

            <a
              href="/ai-tools/chatgpt"
              className="mt-4 inline-block text-blue-400 hover:text-blue-300"
            >
              Learn more about ChatGPT →
            </a>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              2. Gemini
            </h2>

            <p className="mt-3 leading-8 text-slate-400">
              Gemini can be useful for learning, brainstorming, writing, and
              working through questions. Students can use it as a study
              assistant while checking important information against trusted
              sources.
            </p>

            <a
              href="/ai-tools/gemini"
              className="mt-4 inline-block text-blue-400 hover:text-blue-300"
            >
              Learn more about Gemini →
            </a>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              3. Grammarly
            </h2>

            <p className="mt-3 leading-8 text-slate-400">
              Grammarly can help students improve grammar, spelling, clarity,
              and the overall readability of their writing. It can be useful
              when reviewing assignments, emails, and other written work.
            </p>

            <a
              href="/ai-tools/grammarly"
              className="mt-4 inline-block text-blue-400 hover:text-blue-300"
            >
              Learn more about Grammarly →
            </a>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              4. QuillBot
            </h2>

            <p className="mt-3 leading-8 text-slate-400">
              QuillBot can help students rephrase text, improve wording, and
              work with written material. Students should still review the
              final result and make sure their work follows their school or
              university rules.
            </p>

            <a
              href="/ai-tools/quillbot"
              className="mt-4 inline-block text-blue-400 hover:text-blue-300"
            >
              Learn more about QuillBot →
            </a>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              5. Perplexity
            </h2>

            <p className="mt-3 leading-8 text-slate-400">
              Perplexity can be useful for research and exploring questions.
              When using AI for academic work, students should verify important
              claims and consult reliable primary or educational sources.
            </p>

            <a
              href="/ai-tools/perplexity"
              className="mt-4 inline-block text-blue-400 hover:text-blue-300"
            >
              Learn more about Perplexity →
            </a>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              6. Canva AI
            </h2>

            <p className="mt-3 leading-8 text-slate-400">
              Canva AI can help students create presentations, visual
              materials, posters, and other designs. It can be useful for
              projects where clear visual communication is important.
            </p>

            <a
              href="/ai-tools/canva"
              className="mt-4 inline-block text-blue-400 hover:text-blue-300"
            >
              Learn more about Canva AI →
            </a>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              How students should use AI
            </h2>

            <p className="mt-3 leading-8 text-slate-400">
              AI works best as a learning assistant rather than a replacement
              for learning. Use it to understand difficult topics, practice
              skills, generate ideas, and review your work. Always check
              important information and follow your school or university's
              academic policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold">
              Final thoughts
            </h2>

            <p className="mt-3 leading-8 text-slate-400">
              The best AI tool depends on your specific study task. ChatGPT
              and Gemini can help with explanations and brainstorming, writing
              tools can help improve drafts, research tools can help explore
              topics, and design tools can help with presentations and visual
              projects.
            </p>
          </section>
        </div>
      </article>

      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
        © 2026 PakAIHub. All rights reserved.
      </footer>
    </main>
  );
}