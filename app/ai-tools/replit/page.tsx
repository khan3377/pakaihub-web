import type { Metadata } from "next";
import AIToolDetail from "../../components/AIToolDetail";

export const metadata: Metadata = {
  title: "Replit | PakAIHub",
  description:
    "Learn about Replit, an online development platform with AI tools for building and coding applications.",
};

export default function ReplitPage() {
  return (
    <AIToolDetail
      name="Replit"
      category="Coding"
      description="Replit is an online development platform with AI tools that help you build, code, and work on applications."
      officialUrl="https://replit.com"
      features={[
        "Building applications",
        "Writing and running code",
        "AI-assisted development",
        "Learning programming",
        "Collaborating on projects",
      ]}
      overview="Replit is an online development platform with AI tools that helps users build, code, and work on applications. It can be useful for developing projects, learning programming, running code, and collaborating with others."
      bestFor={[
        "Developers building applications",
        "Students learning programming",
        "Freelancers developing software projects",
        "Teams collaborating on coding projects",
        "Anyone interested in AI-assisted development",
      ]}
    />
  );
}