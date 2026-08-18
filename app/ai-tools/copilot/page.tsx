import type { Metadata } from "next";
import AIToolDetail from "../../components/AIToolDetail";

export const metadata: Metadata = {
  title: "Microsoft Copilot | PakAIHub",
  description:
    "Learn about Microsoft Copilot, an AI assistant for writing, research, ideas, and productivity.",
};

export default function CopilotPage() {
  return (
    <AIToolDetail
      name="Microsoft Copilot"
      category="Assistant"
      description="Microsoft Copilot is an AI assistant that can help with writing, research, ideas, learning, and everyday productivity."
      officialUrl="https://copilot.microsoft.com"
      features={[
        "Writing and editing",
        "Research and information",
        "Brainstorming and ideas",
        "Learning and explanations",
        "Everyday productivity",
      ]}
      overview="Microsoft Copilot is an AI assistant designed to help users with writing, research, brainstorming, learning, and everyday tasks. It can help users explore information, improve written content, develop ideas, understand topics, and support everyday productivity."
      bestFor={[
        "Students who want help with learning, research, and writing",
        "Freelancers who need help with writing, ideas, and productivity",
        "Content creators developing ideas and written content",
        "Professionals looking for AI assistance with everyday tasks",
        "Anyone interested in an AI assistant for productivity",
      ]}
    />
  );
}