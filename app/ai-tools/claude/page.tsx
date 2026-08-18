import type { Metadata } from "next";
import AIToolDetail from "../../components/AIToolDetail";

export const metadata: Metadata = {
  title: "Claude | PakAIHub",
  description:
    "Learn about Claude, an AI assistant for writing, analysis, research, coding, brainstorming, and everyday tasks.",
};

export default function ClaudePage() {
  return (
    <AIToolDetail
      name="Claude"
      category="Chatbot"
      description="Claude is an AI assistant for writing, analysis, research, coding, brainstorming, and everyday tasks."
      officialUrl="https://claude.ai/"
      features={[
        "Writing and editing",
        "Research and analysis",
        "Coding and programming",
        "Brainstorming and ideas",
        "Everyday questions and tasks",
      ]}
      overview="Claude is an AI assistant designed to help users with writing, analysis, research, coding, brainstorming, and everyday tasks. It can help users work with information, improve written content, explore ideas, understand technical topics, and solve different types of problems."
      bestFor={[
        "Students who want help with learning, research, and writing",
        "Freelancers who need help with writing, analysis, and planning",
        "Developers working through coding and technical problems",
        "Content creators developing ideas and written content",
        "Professionals who need help with analysis and everyday tasks",
      ]}
    />
  );
}