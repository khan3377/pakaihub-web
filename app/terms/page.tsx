import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Read the PakAIHub Terms & Conditions for using our AI tools directory and accessing information about third-party AI tools.",
};

export default function Terms() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-300">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="mb-4 text-4xl font-bold text-white">
          Terms & Conditions
        </h1>

        <p className="mb-10 text-slate-400">
          Last updated: August 2026
        </p>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-white">
            1. Acceptance of Terms
          </h2>
          <p className="leading-7">
            By accessing and using PakAIHub, you agree to these Terms &
            Conditions. If you do not agree with these terms, please do not
            use the website.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-white">
            2. About PakAIHub
          </h2>
          <p className="leading-7">
            PakAIHub is an AI tools directory that helps users discover
            artificial intelligence tools and services from different
            providers.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-white">
            3. Third-Party Websites
          </h2>
          <p className="leading-7">
            PakAIHub may contain links to third-party websites and AI tools.
            We do not control these websites and are not responsible for their
            content, services, availability, or policies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-white">
            4. Accuracy of Information
          </h2>
          <p className="leading-7">
            We try to keep the information on PakAIHub accurate and useful.
            However, information about third-party tools may change over time,
            and we cannot guarantee that all information is always complete or
            up to date.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-white">
            5. Advertising
          </h2>
          <p className="leading-7">
            PakAIHub may display advertisements from third-party advertising
            services in the future. These services may use cookies or similar
            technologies according to their own policies.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="mb-3 text-2xl font-semibold text-white">
            6. Limitation of Liability
          </h2>
          <p className="leading-7">
            PakAIHub is provided for informational and discovery purposes. We
            are not responsible for any loss, damage, or issue resulting from
            the use of third-party tools or websites listed on PakAIHub.
          </p>
        </section>

        <section>
          <h2 className="mb-3 text-2xl font-semibold text-white">
            7. Contact
          </h2>
          <p className="leading-7">
            If you have questions about these Terms & Conditions, please
            contact us through the Contact page on PakAIHub.
          </p>
        </section>
      </section>
    </main>
  );
}