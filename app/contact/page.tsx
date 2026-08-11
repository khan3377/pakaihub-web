export default function Contact() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-300">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <h1 className="mb-4 text-4xl font-bold text-white">
          Contact Us
        </h1>

        <p className="mb-10 text-slate-400">
          Have a question, suggestion, or feedback? We would love to hear
          from you.
        </p>

        <div className="rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            Get in Touch
          </h2>

          <p className="mb-6 leading-7">
            If you have questions about PakAIHub, want to suggest an AI tool,
            or have feedback about the website, you can contact us by email.
          </p>

          <a
           href="mailto:mahtaballi789@gmail.com"
            className="inline-block rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
          >
            Email Us
          </a>
        </div>

        <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900 p-8">
          <h2 className="mb-4 text-2xl font-semibold text-white">
            AI Tool Suggestions
          </h2>

          <p className="leading-7">
            Know an AI tool that should be listed on PakAIHub? Send us the
            tool name and website link, and we may add it to our directory.
          </p>
        </div>
      </section>
    </main>
  );
}