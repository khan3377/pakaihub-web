import type { Metadata } from "next";
import AIToolDetail from "../../components/AIToolDetail";

export const metadata: Metadata = {
  title: "Perplexity AI | PakAIHub",
  description:
    "Learn about Perplexity AI, an AI-powered search and research assistant for finding and understanding information.",
};

export default function PerplexityPage() {
  return (
    <AIToolDetail
      name="Perplexity AI"
      category="Research"
      description="Perplexity AI is an AI-powered search and research assistant that helps you find, understand, and explore information."
      officialUrl="https://www.perplexity.ai"
      features={[
        "Research and information discovery",
        "Answering questions",
        "Summarizing information",
        "Exploring topics",
        "Learning and fact-finding",
      ]}
      overview="Perplexity AI is an AI-powered search and research assistant designed to help users find, understand, and explore information. It can help with research, questions, summaries, topic exploration, and learning by making information easier to discover and understand."
      bestFor={[
        "Students who need help with research and learning",
        "Freelancers researching topics and gathering information",
        "Content creators exploring topics and developing ideas",
        "Professionals who need quick research and information discovery",
        "Anyone who wants an AI-powered way to explore information",
      ]}
    />
  );
}