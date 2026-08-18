import type { Metadata } from "next";
import AIToolDetail from "../../components/AIToolDetail";

export const metadata: Metadata = {
  title: "Ideogram AI | PakAIHub",
  description:
    "Learn about Ideogram, an AI image generation tool for creating designs, graphics, posters, and creative visuals.",
};

export default function IdeogramPage() {
  return (
    <AIToolDetail
      name="Ideogram AI"
      category="Design"
      description="Ideogram is an AI image generation tool for creating designs, graphics, posters, and creative visuals."
      officialUrl="https://ideogram.ai"
      features={[
        "AI image generation",
        "Graphic design",
        "Poster creation",
        "Creative visual content",
        "Text-to-image ideas",
      ]}
      overview="Ideogram is an AI image generation tool that helps users create designs, graphics, posters, and other creative visual content from text prompts. It can be useful for exploring visual ideas, creating graphics, and developing creative projects."
      bestFor={[
        "Designers creating graphics and visual concepts",
        "Content creators making images for social media and other content",
        "Students creating visual projects and presentations",
        "Freelancers developing creative designs for clients",
        "Anyone interested in AI-powered image generation",
      ]}
    />
  );
}