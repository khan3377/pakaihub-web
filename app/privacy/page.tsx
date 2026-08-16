import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the PakAIHub Privacy Policy to learn how we handle information, cookies, advertising, and third-party links.",
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-300">
      <nav className="border-b border-slate-800 px-6 py-4">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/" className="text-2xl font-bold text-blue-400">
            PakAIHub
          </a>

          <div className="flex items-center gap-6 text-sm">
            <a href="/" className="hover:text-white">
              Home
            </a>

            <a href="/ai-tools" className="hover:text-white">
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
        </div>
      </nav>

      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="text-center">
          <p className="mb-3 text-sm font-medium text-blue-400">
            PakAIHub
          </p>

          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-4 text-slate-500">
            Last updated: August 2026
          </p>
        </div>

        <div className="mt-12 space-y-10">

          <section>
            <h2 className="text-2xl font-semibold text-white">
              1. Introduction
            </h2>

            <p className="mt-3 leading-7">
              PakAIHub respects your privacy. This Privacy Policy explains
              how information may be collected and used when you visit and
              use our website.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              2. Information We Collect
            </h2>

            <p className="mt-3 leading-7">
              We may collect information that you voluntarily provide to us,
              such as information submitted through contact forms or email.
              We may also collect basic technical information such as browser
              type, device information, pages visited, and general usage data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              3. Cookies
            </h2>

            <p className="mt-3 leading-7">
              PakAIHub may use cookies and similar technologies to improve
              website functionality, understand how visitors use the site,
              and support advertising services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              4. Advertising
            </h2>

            <p className="mt-3 leading-7">
              PakAIHub may display advertisements from third-party
              advertising services, including Google AdSense. These services
              may use cookies and similar technologies to collect information
              about visitors in order to provide, personalize, and measure
              advertisements.
            </p>

            <p className="mt-3 leading-7">
              Google may use cookies to serve ads based on a user&apos;s
              previous visits to this website or other websites. Users may
              manage or opt out of personalized advertising by visiting
              Google&apos;s Ads Settings.
            </p>

            <p className="mt-3 leading-7">
              Advertising providers may have their own privacy policies and
              terms. Visitors should review the relevant third-party policies
              for more information about how advertising data is handled.
            </p>

            <a
              href="https://adssettings.google.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block text-blue-400 hover:text-blue-300"
            >
              Google Ads Settings →
            </a>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              5. Third-Party Links
            </h2>

            <p className="mt-3 leading-7">
              PakAIHub contains links to third-party AI tools and websites.
              These websites have their own privacy policies and terms.
              PakAIHub is not responsible for the privacy practices or
              content of external websites.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              6. Data Security
            </h2>

            <p className="mt-3 leading-7">
              We take reasonable steps to protect information associated with
              our website. However, no method of transmission or storage over
              the internet can be guaranteed to be completely secure.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              7. Changes to This Privacy Policy
            </h2>

            <p className="mt-3 leading-7">
              We may update this Privacy Policy from time to time. Any changes
              will be reflected on this page with an updated date.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-white">
              8. Contact
            </h2>

            <p className="mt-3 leading-7">
              If you have questions about this Privacy Policy, please contact
              us through the Contact page on PakAIHub.
            </p>
          </section>

        </div>
      </section>

      <footer className="border-t border-slate-800 py-8 text-center text-sm text-slate-500">
        © 2026 PakAIHub. All rights reserved.
      </footer>
    </main>
  );
}