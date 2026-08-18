import type { Metadata } from "next";
import AIToolDetail from "../../components/AIToolDetail";
export const metadata: Metadata = {
  title: "ChatGPT | PakAIHub",
  description:
    "Learn about ChatGPT, an AI assistant for writing, learning, coding, research, and everyday tasks.",
};

export default function ChatGPTPage() {
  return (
    <AIToolDetail
      name="ChatGPT"
      category="Chatbot"
      description="ChatGPT is an AI assistant that can help with writing, learning, coding, research, brainstorming, and everyday tasks."
      officialUrl="https://chatgpt.com"
      features={[
        "Writing and rewriting",
        "Learning and explanations",
        "Coding and programming",
        "Research and brainstorming",
        "Everyday questions and tasks",
      ]}
            overview="ChatGPT is a general-purpose AI assistant that can help with writing, learning, coding, research, brainstorming, and many everyday tasks. It can explain complex topics, help organize ideas, improve written content, and assist users with different types of creative and technical work."
      bestFor={[
        "Students who want help understanding topics and organizing ideas",
        "Freelancers who need help with writing, planning, and research",
        "Developers working through coding questions and technical problems",
        "Content creators developing ideas, drafts, and outlines",
        "Professionals who want help with everyday writing and productivity",
      ]}
    />
  );
}