"use client";

import { useMemo, useState } from "react";
import type { Metadata } from "next";

const tools = [
  {
    name: "ChatGPT",
    description:
      "AI assistant for writing, learning, coding, brainstorming, and everyday tasks.",
    category: "Chatbot",
    link: "https://chatgpt.com",
  },
  {
    name: "Google Gemini",
    description:
      "AI assistant for research, writing, ideas, productivity, and everyday questions.",
    category: "Chatbot",
    link: "https://gemini.google.com",
  },
  {
    name: "Claude",
    description:
      "AI assistant for writing, analysis, research, coding, and problem solving.",
    category: "Chatbot",
    link: "https://claude.ai",
  },
  {
    name: "Microsoft Copilot",
    description:
      "AI assistant for answers, writing, productivity, research, and creative tasks.",
    category: "Chatbot",
    link: "https://copilot.microsoft.com",
  },
  {
    name: "Perplexity",
    description:
      "AI-powered search and research assistant for finding and understanding information.",
    category: "Research",
    link: "https://www.perplexity.ai",
  },
  {
    name: "Canva",
    description:
      "Create presentations, social posts, graphics, documents, and visual content with AI.",
    category: "Design",
    link: "https://www.canva.com",
  },
  {
    name: "Leonardo AI",
    description:
      "Create AI-generated images, artwork, designs, and visual content.",
    category: "Design",
    link: "https://leonardo.ai",
  },
  {
    name: "Adobe Firefly",
    description:
      "Generate and edit creative images and designs with Adobe generative AI.",
    category: "Design",
    link: "https://firefly.adobe.com",
  },
  {
    name: "CapCut",
    description:
      "AI-powered video editing tools for creators, social media, and short-form videos.",
    category: "Video",
    link: "https://www.capcut.com",
  },
  {
    name: "Runway",
    description:
      "AI-powered tools for generating and editing videos and creative media.",
    category: "Video",
    link: "https://runwayml.com",
  },
  {
    name: "ElevenLabs",
    description:
      "Create realistic AI voices, voiceovers, and audio content.",
    category: "Audio",
    link: "https://elevenlabs.io",
  },
  {
    name: "Grammarly",
    description:
      "AI writing assistant for grammar, clarity, rewriting, and professional communication.",
    category: "Writing",
    link: "https://www.grammarly.com",
  },
  {
    name: "QuillBot",
    description:
      "AI writing and paraphrasing tools for rewriting, summarizing, and improving text.",
    category: "Writing",
    link: "https://quillbot.com",
  },
  {
    name: "DeepL",
    description:
      "AI-powered translation and writing assistance for natural multilingual communication.",
    category: "Writing",
    link: "https://www.deepl.com",
  },
  {
    name: "GitHub Copilot",
    description:
      "AI coding assistant that helps developers write, understand, and improve code.",
    category: "Coding",
    link: "https://github.com/features/copilot",
  },
  {
    name: "Cursor",
    description:
      "AI-powered code editor designed to help developers write and understand code faster.",
    category: "Coding",
    link: "https://cursor.com",
  },
  {
    name: "Replit",
    description:
      "Online development platform with AI tools for building and coding applications.",
    category: "Coding",
    link: "https://replit.com",
  },
  {
    name: "Notion AI",
    description:
      "AI workspace tools for writing, summarizing, organizing, and managing information.",
    category: "Productivity",
    link: "https://www.notion.com/product/ai",
  },
  {
    name: "Otter.ai",
    description:
      "AI meeting assistant for transcription, notes, summaries, and conversations.",
    category: "Productivity",
    link: "https://otter.ai",
  },
  {
    name: "Gamma",
    description:
      "Create presentations, documents, and visual content with AI.",
    category: "Productivity",
    link: "https://gamma.app",
  },
];

const categories = [
  "All",
  "Chatbot",
  "Research",
  "Design",
  "Video",
  "Audio",
  "Writing",
  "Coding",
  "Productivity",
];

export default function AIToolsPage() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredTools = useMemo(() => {
    const searchText = search.trim().toLowerCase();

    return tools.filter((tool) => {
      const matchesSearch =
        searchText === "" ||
        tool.name.toLowerCase().includes(searchText) ||
        tool.description.toLowerCase().includes(searchText) ||
        tool.category.toLowerCase().includes(searchText);

      const matchesCategory =
        selectedCategory === "All" || tool.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [search, selectedCategory]);

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
            AI Tools Directory
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-400">
            Discover useful AI tools for students, freelancers, businesses,
            developers, and creators.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl">
          <input
            type="search"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="🔍 Search AI tools..."
            aria-label="Search AI tools"
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-white outline-none placeholder:text-slate-500 focus:border-blue-500"
          />
        </div>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const isActive = selectedCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full border px-4 py-2 text-sm transition ${
                  isActive
                    ? "border-blue-500 bg-blue-600 text-white"
                    : "border-slate-700 bg-slate-900 text-slate-300 hover:border-blue-500 hover:text-blue-400"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        <div className="mt-10 text-center text-sm text-slate-500">
          Showing {filteredTools.length} of {tools.length} AI tools
        </div>

        {filteredTools.length > 0 ? (
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredTools.map((tool) => (
              <article
                key={tool.name}
                className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <h2 className="text-xl font-bold text-white">
                    {tool.name}
                  </h2>

                  <span className="shrink-0 rounded-full bg-slate-800 px-3 py-1 text-xs text-blue-400">
                    {tool.category}
                  </span>
                </div>

                <p className="min-h-20 flex-1 leading-7 text-slate-400">
                  {tool.description}
                </p>

                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-block rounded-lg bg-blue-600 px-5 py-2.5 text-center font-semibold text-white transition hover:bg-blue-700"
                >
                  Visit Tool →
                </a>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900 p-10 text-center">
            <h2 className="text-xl font-bold text-white">
              No AI tools found
            </h2>

            <p className="mt-3 text-slate-400">
              Try another search or select a different category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSelectedCategory("All");
              }}
              className="mt-6 rounded-lg bg-blue-600 px-5 py-2.5 font-semibold text-white hover:bg-blue-700"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>

      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
        © 2026 PakAIHub. All rights reserved.
      </footer>
    </main>
  );
}