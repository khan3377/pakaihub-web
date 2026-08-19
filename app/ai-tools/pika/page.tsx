import type { Metadata } from "next";
import AIToolDetail from "../../components/AIToolDetail";

export const metadata: Metadata = {
  title: "Pika AI | PakAIHub",
  description:
    "Learn about Pika, an AI video creation tool for generating and transforming creative videos.",
};

export default function PikaPage() {
  return (
    <AIToolDetail
      name="Pika AI"
      category="Video"
      description="Pika is an AI video creation tool for generating and transforming creative videos."
      officialUrl="https://pika.art/"
      features={[
        "AI video generation",
        "Creative video creation",
        "Video transformation",
        "AI-powered video effects",
        "Creative visual content",
      ]}
      overview="Pika is an AI video creation tool that helps users create and transform creative video content using AI-powered tools. It can be useful for exploring video ideas, creating visual content, and experimenting with AI-assisted video creation."
      bestFor={[
        "Content creators creating AI videos",
        "Social media creators developing visual content",
        "Designers exploring creative video ideas",
        "Freelancers creating video projects",
        "Anyone interested in AI-powered video creation",
      ]}
    />
  );
}