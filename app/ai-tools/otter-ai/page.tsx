import type { Metadata } from "next";
import AIToolDetail from "../../components/AIToolDetail";

export const metadata: Metadata = {
  title: "Otter.ai | PakAIHub",
  description:
    "Learn about Otter.ai, an AI meeting assistant for transcription, notes, summaries, and conversations.",
};

export default function OtterAIPage() {
  return (
    <AIToolDetail
      name="Otter.ai"
      category="Productivity"
      description="Otter.ai is an AI meeting assistant that helps with transcription, notes, summaries, and conversations."
      officialUrl="https://otter.ai"
      features={[
        "Meeting transcription",
        "Meeting notes",
        "AI summaries",
        "Conversation records",
        "Productivity and collaboration",
      ]}
      overview="Otter.ai is an AI meeting assistant that helps users capture conversations, create transcripts, take notes, and generate summaries. It can be useful for meetings, interviews, discussions, and collaborative work."
      bestFor={[
        "Professionals managing meetings and discussions",
        "Students recording lectures and study sessions",
        "Teams creating meeting notes and summaries",
        "Content creators working with recorded conversations",
        "Anyone who needs AI-powered transcription and notes",
      ]}
    />
  );
}