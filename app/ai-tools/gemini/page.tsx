import type { Metadata } from "next";
import AIToolDetail from "../../components/AIToolDetail";

export const metadata: Metadata = {
  title: "Google Gemini | PakAIHub",
  description:
    "Learn about Google Gemini, an AI assistant for research, writing, ideas, learning, and everyday productivity.",
};

export default function GeminiPage() {
  return (
    <AIToolDetail
      name="Google Gemini"
      category="Chatbot"
      description="Google Gemini is an AI assistant that can help with research, writing, ideas, learning, and everyday productivity."
      officialUrl="https://gemini.google.com/app"
      features={[
        "Research and information discovery",
        "Writing and brainstorming",
        "Learning and explanations",
        "Ideas and creative tasks",
        "Everyday productivity",
      ]}
      overview="Google Gemini is an AI assistant designed to help users with research, writing, learning, brainstorming, and everyday tasks. It can help people explore information, understand topics, develop ideas, improve written content, and work through different types of tasks."
      bestFor={[
        "Students who want help with learning, research, and explanations",
        "Freelancers who need help with writing, ideas, and productivity",
        "Content creators developing ideas, drafts, and creative projects",
        "Professionals who need assistance with research and everyday tasks",
        "Anyone looking for an AI assistant for learning and productivity",
      ]}
    />
  );
}