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
    />
  );
}