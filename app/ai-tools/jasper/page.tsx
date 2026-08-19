import type { Metadata } from "next";
import AIToolDetail from "../../components/AIToolDetail";

export const metadata: Metadata = {
  title: "Jasper AI | PakAIHub",
  description:
    "Learn about Jasper, an AI writing platform for creating marketing content, blog posts, and business copy.",
};

export default function JasperPage() {
  return (
    <AIToolDetail
      name="Jasper AI"
      category="Writing"
      description="Jasper is an AI writing platform for creating marketing content, blog posts, and business copy."
      officialUrl="https://www.jasper.ai/"
      features={[
        "Marketing content creation",
        "Blog post writing",
        "Business copy",
        "AI-assisted writing",
        "Content creation",
      ]}
      overview="Jasper is an AI writing platform that helps users create marketing content, blog posts, business copy, and other written content with AI. It can be useful for businesses, marketers, writers, and content creators."
      bestFor={[
        "Marketers creating marketing content",
        "Bloggers writing blog posts",
        "Businesses creating professional copy",
        "Content creators developing written content",
        "Freelancers creating content for clients",
      ]}
    />
  );
}