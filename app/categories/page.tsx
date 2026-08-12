import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Tool Categories",
  description:
    "Explore AI tool categories on PakAIHub, including chatbots, writing, design, coding, video, research, education, and productivity.",
};

const categories = [
  {
    name: "Chatbot",
    emoji: "🤖",
    description:
      "AI assistants for questions, conversations, research, and everyday tasks.",
  },
  {
    name: "Writing",
    emoji: "✍️",
    description:
      "AI tools for writing, rewriting, grammar, translation, and content creation.",
  },
  {
    name: "Design",
    emoji: "🎨",
    description:
      "AI tools for graphics, images, presentations, and creative design.",
  },
  {
    name: "Coding",
    emoji: "💻",
    description:
      "AI tools that help developers write, understand, and improve code.",
  },
  {
    name: "Video",
    emoji: "🎬",
    description:
      "AI tools for video creation, editing, subtitles, and creative content.",
  },
  {
    name: "Research",
    emoji: "🔎",
    description:
      "AI tools for research, information discovery, and knowledge work.",
  },
  {
    name: "Education",
    emoji: "📚",
    description:
      "AI tools for students, teachers, learning, and study assistance.",
  },
  {
    name: "Productivity",
    emoji: "📈",
    description:
      "AI tools that help save time, organize work, and improve productivity.",
  },
];

export default function CategoriesPage() {
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

            <a href="/ai-tools" className="hover:text-white">
              AI Tools
            </a>

            <a href="/categories" className="text-blue-400">
              Categories
            </a>

            <a href="/blog" className="hover:text-white">
              Blog
            </a>

            <a href="/contact" className="hover:text-white">
              Contact
            </a>
          </div>

          <a
            href="/"
            className="rounded-lg border border-slate-700 px-4 py-2 text-sm text-slate-300 hover:border-blue-500 hover:text-white md:hidden"
          >
            Home
          </a>
        </div>
      </nav>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center">
          <p className="mb-3 text-sm font-medium text-blue-400">
            Pakistan&apos;s AI Hub
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            AI Tool Categories
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Explore AI tools by category and find the right tools for your
            needs.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <a
              key={category.name}
              href={`/ai-tools?category=${encodeURIComponent(category.name)}`}
              className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500"
            >
              <div className="text-4xl">{category.emoji}</div>

              <h2 className="mt-5 text-xl font-bold group-hover:text-blue-400">
                {category.name}
              </h2>

              <p className="mt-3 leading-7 text-slate-400">
                {category.description}
              </p>

              <div className="mt-5 text-sm font-semibold text-blue-400">
                Explore Tools →
              </div>
            </a>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
        © 2026 PakAIHub. All rights reserved.
      </footer>
    </main>
  );
}