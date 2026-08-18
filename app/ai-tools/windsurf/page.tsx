import type { Metadata } from "next";
import AIToolDetail from "../../components/AIToolDetail";

export const metadata: Metadata = {
  title: "Windsurf AI | PakAIHub",
  description:
    "Learn about Windsurf, an AI-powered coding environment that helps developers write, understand, and improve code.",
};

export default function WindsurfPage() {
  return (
    <AIToolDetail
      name="Windsurf AI"
      category="Coding"
      description="Windsurf is an AI-powered coding environment that helps developers write, understand, and improve code."
      officialUrl="https://windsurf.com/"
      features={[
        "AI-assisted coding",
        "Writing code",
        "Understanding code",
        "Editing and refactoring code",
        "Debugging and problem solving",
      ]}
      overview="Windsurf is an AI-powered coding environment that helps developers write, understand, edit, and improve code with AI-powered development features."
      bestFor={[
        "Developers writing and editing code",
        "Programmers debugging applications",
        "Students learning programming",
        "Software teams working on projects",
        "Developers looking for AI-assisted development",
      ]}
    />
  );
}