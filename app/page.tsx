"use client";

import { useState } from "react";
import ToolCard from "./components/ToolCard";

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const tools = [
    {
      logo: "🤖",
      title: "ChatGPT",
      description: "AI assistant for writing, coding, learning, research and everyday tasks.",
      rating: "⭐⭐⭐⭐⭐",
      color: "text-green-400",
      link: "/ai-tools/chatgpt",
      category: "Chatbot",
    },
    {
      logo: "💎",
      title: "Google Gemini",
      description: "Google AI assistant for research, writing, ideas, learning and productivity.",
      rating: "⭐⭐⭐⭐⭐",
      color: "text-blue-400",
      link: "/ai-tools/gemini",
      category: "Chatbot",
    },
    {
      logo: "🎨",
      title: "Canva AI",
      description: "Create designs, presentations, images and creative content with AI.",
      rating: "⭐⭐⭐⭐⭐",
      color: "text-pink-400",
      link: "/ai-tools/canva",
      category: "Design",
    },
    {
      logo: "🧠",
      title: "Claude",
      description: "AI assistant for writing, analysis, coding, research and problem solving.",
      rating: "⭐⭐⭐⭐⭐",
      color: "text-orange-300",
      link: "/ai-tools/claude",
      category: "Chatbot",
    },
    {
      logo: "💼",
      title: "Microsoft Copilot",
      description: "AI assistant for productivity, writing, research and everyday work.",
      rating: "⭐⭐⭐⭐⭐",
      color: "text-cyan-400",
      link: "/ai-tools/copilot",
      category: "Productivity",
    },
    {
      logo: "✍️",
      title: "Grammarly",
      description: "AI writing assistant for grammar, clarity, rewriting and communication.",
      rating: "⭐⭐⭐⭐⭐",
      color: "text-green-400",
      link: "/ai-tools/grammarly",
      category: "Writing",
    },
    {
      logo: "📝",
      title: "QuillBot",
      description: "AI writing and paraphrasing assistant for rewriting and summarizing text.",
      rating: "⭐⭐⭐⭐⭐",
      color: "text-blue-400",
      link: "/ai-tools/quillbot",
      category: "Writing",
    },
    {
      logo: "🌍",
      title: "DeepL",
      description: "AI translation and writing assistant for multilingual communication.",
      rating: "⭐⭐⭐⭐⭐",
      color: "text-blue-300",
      link: "/ai-tools/deepl",
      category: "Writing",
    },
    {
      logo: "✍️",
      title: "Jasper AI",
      description: "AI writing platform for marketing content, blogs and business copy.",
      rating: "⭐⭐⭐⭐☆",
      color: "text-purple-400",
      link: "/ai-tools/jasper",
      category: "Writing",
    },
    {
      logo: "💻",
      title: "GitHub Copilot",
      description: "AI coding assistant that helps developers write, understand and improve code.",
      rating: "⭐⭐⭐⭐⭐",
      color: "text-purple-400",
      link: "/ai-tools/github-copilot",
      category: "Coding",
    },
    {
      logo: "⌨️",
      title: "Cursor",
      description: "AI-powered code editor designed to help developers build software faster.",
      rating: "⭐⭐⭐⭐⭐",
      color: "text-blue-400",
      link: "/ai-tools/cursor",
      category: "Coding",
    },
    {
      logo: "🚀",
      title: "Replit",
      description: "Online development platform with AI tools for building and coding applications.",
      rating: "⭐⭐⭐⭐⭐",
      color: "text-orange-400",
      link: "/ai-tools/replit",
      category: "Coding",
    },
    {
      logo: "🌊",
      title: "Windsurf AI",
      description: "AI-powered coding environment for writing, understanding and improving code.",
      rating: "⭐⭐⭐⭐☆",
      color: "text-cyan-400",
      link: "/ai-tools/windsurf",
      category: "Coding",
    },
    {
      logo: "💻",
      title: "Blackbox AI",
      description: "AI coding assistant for generating, explaining and debugging code.",
      rating: "⭐⭐⭐⭐☆",
      color: "text-purple-400",
      link: "/ai-tools/blackbox-ai",
      category: "Coding",
    },
    {
      logo: "🎬",
      title: "Runway",
      description: "AI-powered creative platform for generating and editing videos.",
      rating: "⭐⭐⭐⭐⭐",
      color: "text-red-400",
      link: "/ai-tools/runway",
      category: "Video",
    },
    {
      logo: "🎥",
      title: "CapCut",
      description: "AI-powered video editing and creative tools for content creators.",
      rating: "⭐⭐⭐⭐⭐",
      color: "text-white",
      link: "/ai-tools/capcut",
      category: "Video",
    },
    {
      logo: "🎬",
      title: "Pika AI",
      description: "AI video creation tool for generating and transforming creative videos.",
      rating: "⭐⭐⭐⭐☆",
      color: "text-pink-400",
      link: "/ai-tools/pika",
      category: "Video",
    },
    {
      logo: "🎞️",
      title: "Descript AI",
      description: "AI-powered tool for editing videos, audio, podcasts and transcripts.",
      rating: "⭐⭐⭐⭐☆",
      color: "text-purple-400",
      link: "/ai-tools/descript",
      category: "Video",
    },
    {
      logo: "🎵",
      title: "Suno AI",
      description: "AI music creation tool for generating songs and audio from text prompts.",
      rating: "⭐⭐⭐⭐⭐",
      color: "text-pink-400",
      link: "/ai-tools/suno",
      category: "Audio",
    },
    {
      logo: "🔊",
      title: "ElevenLabs",
      description: "AI voice and audio platform for realistic speech and voice generation.",
      rating: "⭐⭐⭐⭐⭐",
      color: "text-cyan-400",
      link: "/ai-tools/elevenlabs",
      category: "Audio",
    },
    {
      logo: "🎨",
      title: "Adobe Firefly",
      description: "Generative AI tool for creating and editing images and creative content.",
      rating: "⭐⭐⭐⭐⭐",
      color: "text-orange-400",
      link: "/ai-tools/firefly",
      category: "Design",
    },
    {
      logo: "📸",
      title: "Photoroom AI",
      description: "AI photo editing tool for backgrounds, product images and visual content.",
      rating: "⭐⭐⭐⭐⭐",
      color: "text-pink-300",
      link: "/ai-tools/photoroom",
      category: "Design",
    },
    {
      logo: "🖼️",
      title: "Leonardo AI",
      description: "AI platform for creating images, artwork and visual content.",
      rating: "⭐⭐⭐⭐⭐",
      color: "text-violet-400",
      link: "/ai-tools/leonardo",
      category: "Design",
    },
    {
      logo: "✨",
      title: "Midjourney",
      description: "AI image generation tool for creating detailed and imaginative visuals.",
      rating: "⭐⭐⭐⭐⭐",
      color: "text-purple-300",
      link: "/ai-tools/midjourney",
      category: "Design",
    },
    {
      logo: "🖌️",
      title: "Ideogram",
      description: "AI image generation tool for creative designs, graphics and text in images.",
      rating: "⭐⭐⭐⭐☆",
      color: "text-yellow-400",
      link: "/ai-tools/ideogram",
      category: "Design",
    },
    {
      logo: "🔎",
      title: "Perplexity AI",
      description: "AI-powered search and research assistant for finding useful information.",
      rating: "⭐⭐⭐⭐⭐",
      color: "text-indigo-400",
      link: "/ai-tools/perplexity",
      category: "Research",
    },
    {
      logo: "🤖",
      title: "DeepSeek AI",
      description: "AI assistant for research, reasoning, writing, coding and everyday questions.",
      rating: "⭐⭐⭐⭐⭐",
      color: "text-blue-400",
      link: "/ai-tools/deepseek",
      category: "Chatbot",
    },
    {
      logo: "🤖",
      title: "Mistral AI",
      description: "AI models and tools for writing, research, coding, analysis and productivity.",
      rating: "⭐⭐⭐⭐☆",
      color: "text-orange-400",
      link: "/ai-tools/mistral",
      category: "Chatbot",
    },
    {
      logo: "📋",
      title: "Notion AI",
      description: "AI productivity assistant for notes, writing, organization and knowledge work.",
      rating: "⭐⭐⭐⭐⭐",
      color: "text-white",
      link: "/ai-tools/notion-ai",
      category: "Productivity",
    },
    {
      logo: "📊",
      title: "Gamma",
      description: "AI-powered tool for creating presentations, documents and visual content.",
      rating: "⭐⭐⭐⭐⭐",
      color: "text-purple-400",
      link: "/ai-tools/gamma",
      category: "Productivity",
    },
    {
      logo: "🦦",
      title: "Otter.ai",
      description: "AI meeting assistant for transcription, notes, summaries and conversations.",
      rating: "⭐⭐⭐⭐⭐",
      color: "text-cyan-400",
      link: "/ai-tools/otter-ai",
      category: "Productivity",
    },
  ];

  const filteredTools = tools.filter((tool) => {
    const matchesSearch = `${tool.title} ${tool.category} ${tool.description}`
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || tool.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a
            href="/"
            className="text-2xl font-extrabold text-blue-400"
          >
            PakAIHub
          </a>

          <div className="hidden items-center gap-7 md:flex">
            <a href="/" className="text-gray-300 transition hover:text-blue-400">
              Home
            </a>

            <a href="#tools" className="text-gray-300 transition hover:text-blue-400">
              AI Tools
            </a>

            <a
              href="/categories"
              className="text-gray-300 transition hover:text-blue-400"
            >
              Categories
            </a>

            <a
              href="#blog"
              className="text-gray-300 transition hover:text-blue-400"
            >
              Blog
            </a>

            <a
              href="#contact"
              className="text-gray-300 transition hover:text-blue-400"
            >
              Contact
            </a>
          </div>

          <a
            href="#tools"
            className="rounded-lg bg-blue-600 px-4 py-2 font-semibold transition hover:bg-blue-700"
          >
            Explore
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-6xl px-6 py-20 text-center">
        <div className="mb-6 inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
          Pakistan&apos;s AI Hub
        </div>

        <h1 className="text-5xl font-extrabold sm:text-6xl lg:text-7xl">
          Pakistan&apos;s <span className="text-blue-400">AI Hub</span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
          Discover the best AI tools for students, freelancers,
          businesses and creators — all in one place.
        </p>

        <button
          onClick={() =>
            document
              .getElementById("tools")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="mt-8 rounded-lg bg-blue-600 px-7 py-3 font-semibold hover:bg-blue-700"
        >
          Explore AI Tools →
        </button>

        {/* Search */}
        <div className="mx-auto mt-10 max-w-2xl">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="🔍 Search AI Tools..."
            className="w-full rounded-xl border border-slate-700 bg-slate-900 px-5 py-4 text-lg outline-none focus:border-blue-500"
          />
        </div>

        {/* Stats */}
        <div className="mx-auto mt-12 grid max-w-2xl grid-cols-3 gap-4">
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <div className="text-2xl font-bold text-blue-400">31+</div>
            <div className="text-sm text-gray-400">AI Tools</div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <div className="text-2xl font-bold text-blue-400">8</div>
            <div className="text-sm text-gray-400">Categories</div>
          </div>

          <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <div className="text-2xl font-bold text-blue-400">🇵🇰</div>
            <div className="text-sm text-gray-400">Made for Pakistan</div>
          </div>
        </div>

        {/* Categories */}
        <div
          id="categories"
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          <button
            onClick={() => setCategory("All")}
            className="rounded-full bg-slate-800 px-4 py-2 hover:bg-blue-600"
          >
            🌟 All
          </button>

          <button
            onClick={() => setCategory("Chatbot")}
            className="rounded-full bg-slate-800 px-4 py-2 hover:bg-blue-600"
          >
            🤖 Chatbots
          </button>

          <button
            onClick={() => setCategory("Writing")}
            className="rounded-full bg-slate-800 px-4 py-2 hover:bg-blue-600"
          >
            ✍️ Writing
          </button>

          <button
            onClick={() => setCategory("Design")}
            className="rounded-full bg-slate-800 px-4 py-2 hover:bg-blue-600"
          >
            🎨 Design
          </button>

          <button
            onClick={() => setCategory("Coding")}
            className="rounded-full bg-slate-800 px-4 py-2 hover:bg-blue-600"
          >
            💻 Coding
          </button>

          <button
            onClick={() => setCategory("Video")}
            className="rounded-full bg-slate-800 px-4 py-2 hover:bg-blue-600"
          >
            🎬 Video
          </button>

          <button
            onClick={() => setCategory("Audio")}
            className="rounded-full bg-slate-800 px-4 py-2 hover:bg-blue-600"
          >
            🎵 Audio
          </button>

          <button
            onClick={() => setCategory("Research")}
            className="rounded-full bg-slate-800 px-4 py-2 hover:bg-blue-600"
          >
            🔎 Research
          </button>

          <button
            onClick={() => setCategory("Productivity")}
            className="rounded-full bg-slate-800 px-4 py-2 hover:bg-blue-600"
          >
            📈 Productivity
          </button>
        </div>
      </section>

      {/* Featured AI Tools */}
      <section
        id="tools"
        className="mx-auto max-w-6xl px-6 pb-20"
      >
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-bold">
            🔥 AI Tools
          </h2>

          <p className="mt-3 text-gray-400">
            Explore our collection of useful AI tools.
          </p>
        </div>

        {filteredTools.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredTools.map((tool) => (
              <ToolCard
                key={tool.title}
                logo={tool.logo}
                title={tool.title}
                description={tool.description}
                rating={tool.rating}
                color={tool.color}
                link={tool.link}
                category={tool.category}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-slate-800 bg-slate-900 p-10 text-center">
            <p className="text-xl font-semibold">
              No AI tool found 😔
            </p>

            <p className="mt-2 text-gray-400">
              Try searching for ChatGPT, Gemini or Canva.
            </p>
          </div>
        )}
      </section>

      {/* Blog */}
      <section
        id="blog"
        className="mx-auto max-w-6xl px-6 py-20"
      >
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            AI <span className="text-blue-400">Blog</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Learn about AI tools, productivity, freelancing and the future of AI.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500">
            <div className="text-4xl">🤖</div>

            <h3 className="mt-5 text-xl font-bold">
              Best AI Tools for Students
            </h3>

            <p className="mt-3 text-gray-400">
              Discover AI tools that can help students learn faster,
              write better and save time.
            </p>

            <a
              href="/blog/best-ai-tools-for-students"
              className="mt-5 inline-block font-semibold text-blue-400 hover:text-blue-300"
            >
              Read More →
            </a>
          </article>

          <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500">
            <div className="text-4xl">💼</div>

            <h3 className="mt-5 text-xl font-bold">
              AI Tools for Freelancers
            </h3>

            <p className="mt-3 text-gray-400">
              Explore AI tools that can help freelancers increase
              productivity and grow their online work.
            </p>

            <a
              href="/blog/best-ai-tools-for-freelancers"
              className="mt-5 inline-block font-semibold text-blue-400 hover:text-blue-300"
            >
              Read More →
            </a>
          </article>

          <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500">
            <div className="text-4xl">🚀</div>

            <h3 className="mt-5 text-xl font-bold">
              Best AI Tools for Content Creators
            </h3>

            <p className="mt-3 text-gray-400">
              Find AI tools for writing, image creation, video editing,
              and other content creation tasks.
            </p>

            <a
              href="/blog/best-ai-tools-for-content-creators"
              className="mt-5 inline-block font-semibold text-blue-400 hover:text-blue-300"
            >
              Read More →
            </a>
          </article>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="mx-auto max-w-6xl px-6 py-20"
      >
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold">
            Contact <span className="text-blue-400">Us</span>
          </h2>

          <p className="mt-4 text-gray-400">
            Have a suggestion, want to add an AI tool, or just want to say hello?
            Send us a message.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-slate-800 bg-slate-900 p-6">
          <div className="grid gap-5">
            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Your Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Email
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                className="w-full rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-400">
                Message
              </label>

              <textarea
                rows={5}
                placeholder="Write your message..."
                className="w-full resize-none rounded-lg border border-slate-700 bg-slate-950 px-4 py-3 outline-none focus:border-blue-500"
              />
            </div>

            <button
              type="button"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold transition hover:bg-blue-700"
            >
              Send Message →
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 bg-slate-950">
        <div className="mx-auto max-w-6xl px-6 py-12">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            <div>
              <h3 className="text-2xl font-extrabold text-blue-400">
                PakAIHub
              </h3>

              <p className="mt-3 max-w-sm text-gray-400">
                Pakistan&apos;s AI Hub. Discover useful AI tools
                for students, freelancers, businesses and creators.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-white">
                Quick Links
              </h4>

              <div className="mt-4 flex flex-col gap-3">
                <a href="/" className="text-gray-400 hover:text-blue-400">
                  Home
                </a>

                <a href="#tools" className="text-gray-400 hover:text-blue-400">
                  AI Tools
                </a>

                <a
                  href="/categories"
                  className="text-gray-400 hover:text-blue-400"
                >
                  Categories
                </a>

                <a href="#blog" className="text-gray-400 hover:text-blue-400">
                  Blog
                </a>

                <a
                  href="#contact"
                  className="text-gray-400 hover:text-blue-400"
                >
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-white">
                About PakAIHub
              </h4>

              <p className="mt-4 text-gray-400">
                Helping Pakistan discover useful AI tools
                in one simple place.
              </p>

              <a
                href="/about"
                className="mt-5 inline-block text-gray-400 hover:text-blue-400"
              >
                Learn More →
              </a>
            </div>
          </div>

          <div className="mt-10 border-t border-slate-800 pt-6 text-center text-sm text-gray-500">
            <p>© 2026 PakAIHub. All rights reserved.</p>

            <div className="mt-3 flex justify-center gap-5">
              <a
                href="/privacy"
                className="text-gray-400 hover:text-blue-400"
              >
                Privacy Policy
              </a>

              <a
                href="/terms"
                className="text-gray-400 hover:text-blue-400"
              >
                Terms &amp; Conditions
              </a>

              <a
                href="/contact"
                className="text-gray-400 hover:text-blue-400"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}