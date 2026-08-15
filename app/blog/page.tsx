import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Tools Blog",
  description:
    "Read useful guides, tips, and updates about AI tools for students, freelancers, businesses, developers, and creators.",
};

const posts = [
  {
    title: "Best AI Tools for Students",
    description:
      "Discover useful AI tools that can help students with learning, research, writing, and productivity.",
    category: "Education",
    link: "/blog/best-ai-tools-for-students",
  },
  {
    title: "Best AI Tools for Freelancers",
    description:
      "Explore AI tools that can help freelancers save time, create content, communicate with clients, and grow their work.",
    category: "Freelancing",
    link: "/blog/best-ai-tools-for-freelancers",
  },
  {
    title: "Best AI Tools for Content Creators",
    description:
      "Find AI tools for writing, image creation, video editing, and other content creation tasks.",
    category: "Content Creation",
    link: "/blog/best-ai-tools-for-content-creators",
  },
];

export default function BlogPage() {
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

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="text-center">
          <p className="mb-3 text-sm font-medium text-blue-400">
            PakAIHub
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            AI Tools Blog
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Helpful guides, tips, and ideas to help you discover and use AI
            tools.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500"
            >
              <span className="text-sm font-medium text-blue-400">
                {post.category}
              </span>

              <h2 className="mt-4 text-2xl font-bold">
                {post.title}
              </h2>

              <p className="mt-4 leading-7 text-slate-400">
                {post.description}
              </p>

              <a
                href={post.link}
                className="mt-6 inline-block rounded-lg border border-slate-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:border-blue-500 hover:text-blue-400"
              >
                Read Article →
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