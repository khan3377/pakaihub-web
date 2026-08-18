import type { Metadata } from "next";
import AIToolDetail from "../../components/AIToolDetail";

export const metadata: Metadata = {
  title: "Cursor | PakAIHub",
  description:
    "Learn about Cursor, an AI-powered code editor designed to help developers write and understand code faster.",
};

export default function CursorPage() {
  return (
    <AIToolDetail
      name="Cursor"
      category="Coding"
      description="Cursor is an AI-powered code editor designed to help developers write, understand, and improve code faster."
      officialUrl="https://cursor.com"
      features={[
        "Writing code",
        "Understanding code",
        "Refactoring and improving code",
        "Debugging and problem solving",
        "AI-assisted development",
      ]}
      overview="Cursor is an AI-powered code editor designed to help developers write, understand, and improve code faster. It can be useful for coding, debugging, refactoring, and AI-assisted software development."
      bestFor={[
        "Developers writing and improving code",
        "Students learning programming",
        "Freelancers building software projects",
        "Teams working on development projects",
        "Anyone interested in AI-assisted coding",
      ]}
    />
  );
}