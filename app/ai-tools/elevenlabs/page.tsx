import type { Metadata } from "next";
import AIToolDetail from "../../components/AIToolDetail";

export const metadata: Metadata = {
  title: "ElevenLabs | PakAIHub",
  description:
    "Learn about ElevenLabs, an AI platform for realistic voice generation, voiceovers, and audio content.",
};

export default function ElevenLabsPage() {
  return (
    <AIToolDetail
      name="ElevenLabs"
      category="Audio"
      description="ElevenLabs is an AI platform for creating realistic voices, voiceovers, narration, and other audio content."
      officialUrl="https://elevenlabs.io"
      features={[
        "AI voice generation",
        "Voiceovers and narration",
        "Audio content creation",
        "Text-to-speech",
        "Creative audio projects",
      ]}
      overview="ElevenLabs is an AI audio platform that helps users create realistic voices, voiceovers, narration, and other audio content. It can be useful for producing spoken content, experimenting with AI voices, and creating audio for different creative projects."
      bestFor={[
        "Content creators producing voiceovers and narrated content",
        "Video creators adding AI-generated narration to videos",
        "Freelancers creating audio and voice projects",
        "Developers exploring AI voice and text-to-speech tools",
        "Creative professionals working with audio content",
      ]}
    />
  );
}