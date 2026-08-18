import Link from "next/link";

type AIToolDetailProps = {
  name: string;
  category: string;
  description: string;
  officialUrl: string;
  features: string[];
  bestFor?: string[];
  overview?: string;
};

export default function AIToolDetail({
  name,
  category,
  description,
  officialUrl,
  features,
  bestFor,
  overview,
}: AIToolDetailProps) {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="border-b border-slate-800 px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-blue-400">
            PakAIHub
          </Link>

          <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <Link href="/" className="hover:text-white">
              Home
            </Link>
            <Link href="/ai-tools" className="text-blue-400">
              AI Tools
            </Link>
            <Link href="/categories" className="hover:text-white">
              Categories
            </Link>
            <Link href="/blog" className="hover:text-white">
              Blog
            </Link>
            <Link href="/contact" className="hover:text-white">
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <section className="mx-auto max-w-4xl px-6 py-12">
        <Link
          href="/ai-tools"
          className="inline-flex text-sm font-semibold text-blue-400 hover:text-blue-300"
        >
          ← Back to AI Tools
        </Link>

        <article className="mt-6 rounded-2xl border border-slate-800 bg-slate-900 p-8 md:p-12">
          <span className="rounded-full bg-slate-800 px-3 py-1 text-sm text-blue-400">
            {category}
          </span>

          <h1 className="mt-6 text-4xl font-bold md:text-5xl">
            {name}
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-400">
            {description}
          </p>

          <a
            href={officialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
          >
            Visit Official Website →
          </a>

          <div className="mt-12 border-t border-slate-800 pt-8">
            <h2 className="text-2xl font-bold">
              What can {name} help with?
            </h2>

            <ul className="mt-5 space-y-3 text-slate-400">
              {features.map((feature) => (
                <li key={feature}>• {feature}</li>
              ))}
            </ul>
          </div>
<div className="mt-12 border-t border-slate-800 pt-8">
  <h2 className="text-2xl font-bold">
    About {name}
  </h2>

  <p className="mt-4 leading-7 text-slate-400">
    {overview}
  </p>
</div>

<div className="mt-12 border-t border-slate-800 pt-8">
  <h2 className="text-2xl font-bold">
    Best for
  </h2>

  <ul className="mt-5 space-y-3 text-slate-400">
    {bestFor?.map((item) => (
      <li key={item}>• {item}</li>
    ))}
  </ul>
</div>

<div className="mt-12 border-t border-slate-800 pt-8">
  <h2 className="text-2xl font-bold">
    Who can use {name}?
  </h2>

  <p className="mt-4 leading-7 text-slate-400">
    {name} can be useful for students, freelancers, creators,
    professionals, and anyone looking for practical AI-powered
    assistance. The best use depends on your goals, workflow, and
    the type of tasks you want to complete.
  </p>
</div>
          <div className="mt-10 border-t border-slate-800 pt-8">
            <h2 className="text-2xl font-bold">
              Why explore {name} on PakAIHub?
            </h2>

            <p className="mt-4 leading-7 text-slate-400">
              PakAIHub helps visitors discover AI tools in one place. This
              page provides a simple overview of {name}, its category, common
              uses, and a direct link to its official website so visitors can
              explore the tool themselves.
            </p>
          </div>
        </article>
      </section>

      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
        © 2026 PakAIHub. All rights reserved.
      </footer>
    </main>
  );
}