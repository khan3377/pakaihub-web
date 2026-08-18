import type { Metadata } from "next";
import AIToolDetail from "../../components/AIToolDetail";

export const metadata: Metadata = {
  title: "Mistral AI | PakAIHub",
  description:
    "Learn about Mistral AI, a useful AI tool for writing, research, coding, analysis, and productivity.",
};

export default function MistralPage() {
  return (
    <AIToolDetail
      name="Mistral AI"
      category="Chatbot"
      description="Mistral AI is useful for writing, research, coding, analysis, and productivity."
      officialUrl="https://mistral.ai/"
      features={[
        "Writing assistance",
        "Research and information",
        "Coding and programming",
        "Analysis and problem solving",
        "Everyday productivity",
      ]}
      overview="Mistral AI provides AI models and tools that can help with questions, writing, coding, research, analysis, and other everyday tasks."
      bestFor={[
        "Students learning and researching",
        "Developers working with code",
        "Writers creating and improving content",
        "Professionals working with information and analysis",
        "Anyone looking for AI-powered productivity tools",
      ]}
    />
  );
}