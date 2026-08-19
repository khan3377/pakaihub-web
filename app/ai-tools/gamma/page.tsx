import type { Metadata } from "next";
import AIToolDetail from "../../components/AIToolDetail";

export const metadata: Metadata = {
  title: "Gamma | PakAIHub",
  description:
    "Learn about Gamma, an AI tool for creating presentations, documents, and visual content.",
};

export default function GammaPage() {
  return (
    <AIToolDetail
      name="Gamma"
      category="Productivity"
      description="Gamma is an AI tool for creating presentations, documents, and visual content quickly and easily."
      officialUrl="https://gamma.app"
      features={[
        "AI presentations",
        "Documents and reports",
        "Visual content",
        "Ideas and storytelling",
        "Quick content creation",
      ]}
      overview="Gamma is an AI-powered tool that helps users create presentations, documents, and visual content more quickly. It can help turn ideas into structured content, develop visual presentations, organize information, and support creative storytelling."
      bestFor={[
        "Students creating presentations and project materials",
        "Freelancers preparing presentations and client documents",
        "Content creators developing visual stories and content",
        "Professionals creating reports and business presentations",
        "Anyone who wants to turn ideas into polished visual content",
      ]}
    />
  );
}