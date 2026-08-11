import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the PakAIHub Privacy Policy to learn how we handle information, cookies, advertising, and third-party links.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#020617] text-white">
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
          <p className="mb-4 text-sm font-medium text-blue-400">
            PakAIHub
          </p>

          <h1 className="text-4xl font-bold md:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-4 text-slate-400">
            Last updated: August 2026
          </p>
        </div>

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-semibold">1. Introduction</h2>
            <p className="mt-3 leading-7 text-slate-400">
              PakAIHub respects your privacy. This Privacy Policy explains
              how information may be collected and used when you visit our
              website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
            <p className="mt-3 leading-7 text-slate-400">
              We may collect information that you voluntarily provide to us,
              such as information submitted through contact forms. We may
              also collect basic technical information such as browser type,
              device information, and general usage data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">3. Cookies</h2>
            <p className="mt-3 leading-7 text-slate-400">
              PakAIHub may use cookies and similar technologies to improve
              the website experience and understand how visitors use the
              site.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">4. Advertising</h2>
            <p className="mt-3 leading-7 text-slate-400">
              In the future, PakAIHub may display advertisements from
              third-party advertising services. These services may use
              cookies or similar technologies to provide relevant
              advertisements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">5. Third-Party Links</h2>
            <p className="mt-3 leading-7 text-slate-400">
              PakAIHub contains links to third-party AI tools and websites.
              We are not responsible for the privacy practices or content
              of those external websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold">6. Contact</h2>
            <p className="mt-3 leading-7 text-slate-400">
              If you have questions about this Privacy Policy, please
              contact us through the Contact page on PakAIHub.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}