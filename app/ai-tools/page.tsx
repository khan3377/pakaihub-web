import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Tools",
  description:
    "Explore useful AI tools for students, freelancers, businesses, developers, and creators on PakAIHub.",
};

const tools = [
  {
    name: "ChatGPT",
    description: "AI assistant for writing, learning, coding, and everyday tasks.",
    category: "Chatbot",
    link: "https://chatgpt.com",
  },
  {
    name: "Google Gemini",
    description: "AI assistant for research, writing, ideas, and productivity.",
    category: "Chatbot",
    link: "https://gemini.google.com",
  },
  {
    name: "Canva",
    description: "Create designs, presentations, social posts, and visual content.",
    category: "Design",
    link: "https://www.canva.com",
  },
  {
    name: "Claude",
    description: "AI assistant for writing, analysis, research, and coding.",
    category: "Chatbot",
    link: "https://claude.ai",
  },
  {
    name: "CapCut",
    description: "AI-powered video editing and creative content tools.",
    category: "Video",
    link: "https://www.capcut.com",
  },
  {
    name: "Leonardo AI",
    description: "Create AI-generated images and visual content.",
    category: "Design",
    link: "https://leonardo.ai",
  },
  {
    name: "Perplexity",
    description: "AI-powered search and research assistant.",
    category: "Research",
    link: "https://www.perplexity.ai",
  },
];

export default function AIToolsPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="border-b border-slate-800 px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/" className="text-2xl font-bold text-blue-400">
            PakAIHub
          </a>

          <div className="flex items-center gap-6 text-sm text-slate-300">
            <a href="/" className="hover:text-white">Home</a>
            <a href="/ai-tools" className="text-blue-400">AI Tools</a>
            <a href="/categories" className="hover:text-white">Categories</a>
            <a href="/blog" className="hover:text-white">Blog</a>
            <a href="/contact" className="hover:text-white">Contact</a>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center">
          <p className="mb-3 text-sm font-medium text-blue-400">
            PakAIHub
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            AI Tools Directory
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Discover useful AI tools for students, freelancers, businesses,
            developers, and creators.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <article
              key={tool.name}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500"
            >
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-bold text-white">
                  {tool.name}
                </h2>

                <span className="rounded-full bg-slate-800 px-3 py-1 text-xs text-blue-400">
                  {tool.category}
                </span>
              </div>

              <p className="min-h-20 leading-7 text-slate-400">
                {tool.description}
              </p>

              <a
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white transition hover:bg-blue-700"
              >
                Visit Tool →
              </a>
            </article>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
        © 2026 PakAIHub. All rights reserved.
      </footer>
    </main>
  );
}