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
    description: "AI assistant for writing, coding and learning.",
    rating: "⭐⭐⭐⭐⭐",
    color: "text-green-400",
    link: "https://chatgpt.com",
    category: "Chatbot",
  },
  {
    logo: "💎",
    title: "Gemini",
    description: "Google AI assistant for search and productivity.",
    rating: "⭐⭐⭐⭐☆",
    color: "text-blue-400",
    link: "https://gemini.google.com",
    category: "Search",
  },
  {
    logo: "🎨",
    title: "Canva AI",
    description: "Create beautiful designs and graphics with AI.",
    rating: "⭐⭐⭐⭐☆",
    color: "text-pink-400",
    link: "https://www.canva.com/ai-image-generator/",
    category: "Design",
  },
  {
    logo: "✍️",
    title: "Grammarly",
    description: "AI writing assistant for grammar, spelling and clarity.",
    rating: "⭐⭐⭐⭐⭐",
    color: "text-green-400",
    link: "https://www.grammarly.com",
    category: "Writing",
  },
  {
    logo: "📝",
    title: "QuillBot",
    description: "AI writing and paraphrasing assistant.",
    rating: "⭐⭐⭐⭐☆",
    color: "text-blue-400",
    link: "https://quillbot.com",
    category: "Writing",
  },
  {
    logo: "💻",
    title: "GitHub Copilot",
    description: "AI coding assistant that helps developers write code.",
    rating: "⭐⭐⭐⭐⭐",
    color: "text-purple-400",
    link: "https://github.com/features/copilot",
    category: "Coding",
  },
  {
    logo: "🎬",
    title: "Runway",
    description: "Create and edit videos with generative AI.",
    rating: "⭐⭐⭐⭐☆",
    color: "text-red-400",
    link: "https://runwayml.com",
    category: "Video",
  },
  {
    logo: "🎵",
    title: "Suno",
    description: "Create songs and music using AI.",
    rating: "⭐⭐⭐⭐⭐",
    color: "text-yellow-400",
    link: "https://suno.com",
    category: "Audio",
  },
  {
    logo: "🖼️",
    title: "Adobe Firefly",
    description: "Generate creative images and designs with AI.",
    rating: "⭐⭐⭐⭐☆",
    color: "text-orange-400",
    link: "https://firefly.adobe.com",
    category: "Design",
  },
  {
    logo: "🔊",
    title: "ElevenLabs",
    description: "Create realistic AI voices and audio.",
    rating: "⭐⭐⭐⭐⭐",
    color: "text-cyan-400",
    link: "https://elevenlabs.io",
    category: "Audio",
  },
  {
    logo: "📚",
    title: "Perplexity",
    description: "AI-powered search and research assistant.",
    rating: "⭐⭐⭐⭐⭐",
    color: "text-indigo-400",
    link: "https://www.perplexity.ai",
    category: "Search",
  },
  {
    logo: "🧠",
    title: "Claude",
    description: "AI assistant for writing, analysis and coding.",
    rating: "⭐⭐⭐⭐⭐",
    color: "text-orange-300",
    link: "https://claude.ai",
    category: "Chatbot",
  },
  {
    logo: "🎥",
    title: "CapCut",
    description: "AI-powered video editing and creative tools.",
    rating: "⭐⭐⭐⭐☆",
    color: "text-white",
    link: "https://www.capcut.com",
    category: "Video",
  },
  {
    logo: "🎨",
    title: "Leonardo AI",
    description: "Create AI-generated images and visual content.",
    rating: "⭐⭐⭐⭐⭐",
    color: "text-violet-400",
    link: "https://leonardo.ai",
    category: "Design",
  },
];

 const filteredTools = tools.filter((tool) => {
  const matchesSearch =
    `${tool.title} ${tool.category} ${tool.description}`
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
  href="#contact"
      className="text-2xl font-extrabold text-blue-400"
    >
      PakAIHub
    </a>

    <div className="hidden items-center gap-7 md:flex">

      <a
        href="#"
        className="text-gray-300 transition hover:text-blue-400"
      >
        Home
      </a>

      <a
        href="#tools"
        className="text-gray-300 transition hover:text-blue-400"
      >
        AI Tools
      </a>

      <a
        href="#categories"
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
        href="#"
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
   Pakistan's AI Hub
  </div>

  <h1 className="text-5xl font-extrabold sm:text-6xl lg:text-7xl">
    Pakistan's <span className="text-blue-400">AI Hub</span>
  </h1>

  <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
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
      <div className="text-2xl font-bold text-blue-400">14+</div>
      <div className="text-sm text-gray-400">AI Tools</div>
    </div>

    <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
      <div className="text-2xl font-bold text-blue-400">7</div>
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
      onClick={() => setCategory("Search")}
      className="rounded-full bg-slate-800 px-4 py-2 hover:bg-blue-600"
    >
      🔎 Search
    </button>

  </div>

</section>
      {/* Featured AI Tools */}
      <section
        id="tools"
        className="mx-auto max-w-6xl px-6 pb-20"
      >
        <h2 className="mb-8 text-center text-4xl font-bold">
          🔥 Featured AI Tools
        </h2>

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

      <button className="mt-5 font-semibold text-blue-400 hover:text-blue-300">
        Read More →
      </button>

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

      <button className="mt-5 font-semibold text-blue-400 hover:text-blue-300">
        Read More →
      </button>

    </article>

    <article className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:-translate-y-1 hover:border-blue-500">

      <div className="text-4xl">🚀</div>

      <h3 className="mt-5 text-xl font-bold">
        The Future of AI
      </h3>

      <p className="mt-3 text-gray-400">
        Learn how artificial intelligence is changing
        business, education and everyday life.
      </p>

      <button className="mt-5 font-semibold text-blue-400 hover:text-blue-300">
        Read More →
      </button>

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

      {/* Brand */}
      <div>
        <h3 className="text-2xl font-extrabold text-blue-400">
          PakAIHub
        </h3>

        <p className="mt-3 max-w-sm text-gray-400">
         
         Pakistan's AI Hub. Discover useful AI tools
          for students, freelancers, businesses and creators.
        </p>
      </div>

      {/* Quick Links */}
      <div>
        <h4 className="font-bold text-white">
          Quick Links
        </h4>

        <div className="mt-4 flex flex-col gap-3">

          <a
            href="#"
            className="text-gray-400 hover:text-blue-400"
          >
            Home
          </a>

          <a
            href="#tools"
            className="text-gray-400 hover:text-blue-400"
          >
            AI Tools
          </a>

          <a
            href="#categories"
            className="text-gray-400 hover:text-blue-400"
          >
            Categories
          </a>

          <a
            href="#blog"
            className="text-gray-400 hover:text-blue-400"
          >
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

      {/* About */}
      <div>
        <h4 className="font-bold text-white">
          About PakAIHub
        </h4>

        <p className="mt-4 text-gray-400">
          Helping Pakistan discover the best AI tools
          in one simple place.
        </p>

        <div className="mt-5 flex gap-3">
          <span className="rounded-full bg-slate-800 px-3 py-2">
           Pakistan's AI Hub
          </span>

          <span className="rounded-full bg-slate-800 px-3 py-2">
            🤖 AI
          </span>
        </div>
      </div>

    </div>

    {/* Bottom */}
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
      Terms & Conditions
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