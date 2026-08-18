import type { Metadata } from "next";
import AIToolDetail from "../../components/AIToolDetail";

export const metadata: Metadata = {
  title: "DeepL | PakAIHub",
  description:
    "Learn about DeepL, an AI-powered translation and writing assistant for natural multilingual communication.",
};

export default function DeepLPage() {
  return (
    <AIToolDetail
      name="DeepL"
      category="Writing"
      description="DeepL is an AI-powered translation and writing assistant that helps people communicate naturally across multiple languages."
      officialUrl="https://www.deepl.com"
      features={[
        "AI translation",
        "Multilingual communication",
        "Writing assistance",
        "Text improvement",
        "Professional translation",
      ]}
      overview="DeepL is an AI-powered translation and writing assistant that helps users communicate naturally across multiple languages. It can be useful for translating content, improving written text, and supporting multilingual communication."
      bestFor={[
        "Students translating and improving written content",
        "Writers working with multiple languages",
        "Professionals communicating internationally",
        "Freelancers working with multilingual clients",
        "Anyone needing AI-powered translation assistance",
      ]}
    />
  );
}