import type { Metadata } from "next";
import AIToolDetail from "../../components/AIToolDetail";

export const metadata: Metadata = {
  title: "Leonardo AI | PakAIHub",
  description:
    "Learn about Leonardo AI, a creative AI platform for generating images, artwork, designs, and visual content.",
};

export default function LeonardoPage() {
  return (
    <AIToolDetail
      name="Leonardo AI"
      category="Design"
      description="Leonardo AI is a creative AI platform for generating images, artwork, designs, and other visual content."
      officialUrl="https://leonardo.ai"
      features={[
        "AI image generation",
        "Artwork and illustrations",
        "Creative designs",
        "Visual content creation",
        "Exploring creative ideas",
      ]}
      overview="Leonardo AI is a creative AI platform that helps users generate images, artwork, designs, and other visual content. It can support creative projects, visual experiments, concept development, and the creation of digital artwork."
      bestFor={[
        "Designers creating AI-generated visual content",
        "Content creators developing images and creative assets",
        "Artists exploring AI-assisted artwork and illustrations",
        "Freelancers creating visual designs for projects and clients",
        "Anyone who wants to explore AI-powered image creation",
      ]}
    />
  );
}