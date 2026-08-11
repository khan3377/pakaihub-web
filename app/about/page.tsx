import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About PakAIHub",
  description:
    "Learn about PakAIHub, Pakistan's AI tools directory helping students, freelancers, businesses, developers, and creators discover useful AI tools.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
      <nav className="border-b border-slate-800 px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a
            href="/"
            className="text-2xl font-bold text-blue-400"
          >
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
          <p className="mb-4 text-sm font-medium text-blue-400">
            About PakAIHub
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            Pakistan&apos;s AI Tools Directory
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
            PakAIHub is a simple directory that helps students,
            freelancers, businesses, developers, and creators discover
            useful AI tools in one place.
          </p>
        </div>

        <div className="mt-14 space-y-8">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-7">
            <h2 className="text-2xl font-semibold">Our Mission</h2>
            <p className="mt-3 leading-7 text-slate-400">
              Our mission is to make discovering AI tools easier for
              people in Pakistan and around the world. We organize tools
              into useful categories so visitors can quickly find tools
              for writing, design, coding, education, video, research,
              and productivity.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-7">
            <h2 className="text-2xl font-semibold">What You&apos;ll Find</h2>
            <p className="mt-3 leading-7 text-slate-400">
              PakAIHub features AI tools with helpful descriptions,
              categories, and links to their official websites. Our goal
              is to keep the directory useful, simple, and easy to explore.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-7">
            <h2 className="text-2xl font-semibold">Why PakAIHub?</h2>
            <p className="mt-3 leading-7 text-slate-400">
              The AI ecosystem is growing quickly. PakAIHub brings useful
              tools together so visitors do not have to search through
              many different websites to discover what they need.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}