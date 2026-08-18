import type { Metadata } from "next";
import AIToolDetail from "../../components/AIToolDetail";

export const metadata: Metadata = {
  title: "GitHub Copilot | PakAIHub",
  description:
    "Learn about GitHub Copilot, an AI coding assistant that helps developers write, understand, and improve code.",
};

export default function GitHubCopilotPage() {
  return (
    <AIToolDetail
      name="GitHub Copilot"
      category="Coding"
      description="GitHub Copilot is an AI coding assistant that helps developers write, understand, and improve code."
      officialUrl="https://github.com/features/copilot"
      features={[
        "Writing code",
        "Understanding code",
        "Debugging and improving code",
        "Generating coding suggestions",
        "Learning programming concepts",
      ]}
      overview="GitHub Copilot is an AI coding assistant that helps developers write, understand, and improve code. It can be useful for coding tasks, debugging, learning programming concepts, and exploring coding solutions."
      bestFor={[
        "Developers writing and improving code",
        "Students learning programming",
        "Freelancers building software projects",
        "Teams working on coding projects",
        "Anyone learning or exploring software development",
      ]}
    />
  );
}