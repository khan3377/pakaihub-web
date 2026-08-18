import type { Metadata } from "next";
import AIToolDetail from "../../components/AIToolDetail";

export const metadata: Metadata = {
  title: "Suno AI | PakAIHub",
  description:
    "Learn about Suno, an AI music creation tool for generating songs and audio from text prompts.",
};

export default function SunoPage() {
  return (
    <AIToolDetail
      name="Suno AI"
      category="Audio"
      description="Suno is an AI music creation tool for generating songs and audio from text prompts."
      officialUrl="https://suno.com/"
      features={[
        "AI music generation",
        "Song creation",
        "Audio generation",
        "Text-to-music creation",
        "Creative audio projects",
      ]}
      overview="Suno is an AI music creation tool that helps users create original music and audio content using AI and text-based prompts. It can be useful for exploring musical ideas and creating creative audio projects."
      bestFor={[
        "Musicians exploring AI-assisted music creation",
        "Content creators creating original audio",
        "Artists experimenting with musical ideas",
        "Creators developing audio projects",
        "Anyone interested in AI music generation",
      ]}
    />
  );
}