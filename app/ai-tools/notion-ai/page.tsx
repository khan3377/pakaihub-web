import type { Metadata } from "next";
import AIToolDetail from "../../components/AIToolDetail";

export const metadata: Metadata = {
  title: "Notion AI | PakAIHub",
  description:
    "Learn about Notion AI, AI workspace tools for writing, summarizing, organizing, and managing information.",
};

export default function NotionAIPage() {
  return (
    <AIToolDetail
      name="Notion AI"
      category="Productivity"
      description="Notion AI helps you write, summarize, organize information, and manage your work inside a connected workspace."
      officialUrl="https://www.notion.com/product/ai"
      features={[
        "Writing and editing",
        "Summarizing information",
        "Organizing notes and ideas",
        "Managing work and projects",
        "Brainstorming and productivity",
      ]}
      overview="Notion AI brings AI assistance into the Notion workspace to help users write, summarize, organize information, brainstorm ideas, and manage work. It can be useful for turning notes into clearer content, finding information, and supporting everyday productivity."
      bestFor={[
        "Students organizing notes, assignments, and study materials",
        "Freelancers managing projects, notes, and written work",
        "Teams organizing information and managing projects",
        "Content creators brainstorming and developing written content",
        "Professionals looking to improve organization and productivity",
      ]}
    />
  );
}