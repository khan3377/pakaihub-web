import type { Metadata } from "next";
import AIToolDetail from "../../components/AIToolDetail";

export const metadata: Metadata = {
  title: "Midjourney | PakAIHub",
  description:
    "Learn about Midjourney, an AI image generation tool for creating artwork, designs, concepts, and creative visuals.",
};

export default function MidjourneyPage() {
  return (
    <AIToolDetail
      name="Midjourney"
      category="Design"
      description="Midjourney is an AI image generation tool for creating artwork, designs, concepts, and other creative visual content."
      officialUrl="https://www.midjourney.com/"
      features={[
        "AI image generation",
        "Digital artwork",
        "Creative concepts and ideas",
        "Visual designs",
        "Creative image projects",
      ]}
      overview="Midjourney is a generative AI platform focused on creating images and visual concepts from text prompts. It can help users explore creative ideas, develop artwork, create visual concepts, and experiment with different artistic styles."
      bestFor={[
        "Designers creating AI-generated visual concepts",
        "Artists exploring AI-assisted artwork",
        "Content creators developing creative images",
        "Freelancers creating visual concepts for clients",
        "Anyone interested in AI-powered image generation",
      ]}
    />
  );
}