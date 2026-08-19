import type { Metadata } from "next";
import AIToolDetail from "../../components/AIToolDetail";

export const metadata: Metadata = {
  title: "DeepSeek AI | PakAIHub",
  description:
    "Learn about DeepSeek, an AI tool for research, reasoning, writing, coding, and everyday questions.",
};

export default function DeepSeekPage() {
  return (
    <AIToolDetail
      name="DeepSeek AI"
      category="Chatbot"
      description="DeepSeek is an AI assistant for research, reasoning, writing, coding, and everyday questions."
      officialUrl="https://www.deepseek.com/"
      features={[
        "Research and information",
        "Reasoning and problem solving",
        "Writing assistance",
        "Coding and programming",
        "Everyday questions",
      ]}
      overview="DeepSeek is an AI assistant that can be useful for asking questions, exploring ideas, working with code, writing, research, reasoning, and problem solving."
      bestFor={[
        "Students researching and learning",
        "Developers working with code",
        "Writers creating and improving content",
        "Researchers exploring information and ideas",
        "Anyone looking for an AI assistant",
      ]}
    />
  );
}