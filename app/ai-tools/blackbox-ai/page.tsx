import type { Metadata } from "next";
import AIToolDetail from "../../components/AIToolDetail";

export const metadata: Metadata = {
  title: "Blackbox AI | PakAIHub",
  description:
    "Learn about Blackbox AI, an AI coding assistant for generating, explaining, debugging, and working with code.",
};

export default function BlackboxAIPage() {
  return (
    <AIToolDetail
      name="Blackbox AI"
      category="Coding"
      description="Blackbox AI is an AI coding assistant for generating, explaining, debugging, and working with code."
      officialUrl="https://www.blackbox.ai/"
      features={[
        "Generating code",
        "Explaining code",
        "Debugging code",
        "Improving existing code",
        "AI-assisted development",
      ]}
      overview="Blackbox AI is an AI coding assistant that can help developers generate, understand, explain, debug, and improve code with AI-powered coding features."
      bestFor={[
        "Developers generating and writing code",
        "Programmers debugging applications",
        "Students learning programming",
        "Developers understanding existing code",
        "Software teams working on coding projects",
      ]}
    />
  );
}