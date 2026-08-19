import type { Metadata } from "next";
import AIToolDetail from "../../components/AIToolDetail";

export const metadata: Metadata = {
  title: "Runway AI | PakAIHub",
  description:
    "Learn about Runway AI, an AI-powered platform for generating and editing videos, images, and creative media.",
};

export default function RunwayPage() {
  return (
    <AIToolDetail
      name="Runway AI"
      category="Video"
      description="Runway is an AI-powered platform for generating and editing videos, images, and other creative media."
      officialUrl="https://runwayml.com"
      features={[
        "AI video generation",
        "Video editing",
        "Creative media production",
        "Visual effects and experiments",
        "Content creation",
      ]}
      overview="Runway is an AI-powered creative platform that helps users generate and edit videos, images, and other visual media. It can support creative projects, video production, visual experimentation, and content creation with AI-powered tools."
      bestFor={[
        "Content creators making AI-powered videos and visual content",
        "Video creators exploring new editing and generation workflows",
        "Designers experimenting with AI-generated visual media",
        "Freelancers creating creative video and media projects",
        "Creative professionals exploring AI-assisted production",
      ]}
    />
  );
}