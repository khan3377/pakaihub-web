import type { Metadata } from "next";
import AIToolDetail from "../../components/AIToolDetail";

export const metadata: Metadata = {
  title: "Canva AI | PakAIHub",
  description:
    "Learn about Canva AI, a creative AI tool for designs, presentations, images, and content creation.",
};

export default function CanvaPage() {
  return (
    <AIToolDetail
      name="Canva AI"
      category="Design"
      description="Canva AI helps you create designs, presentations, images, and creative content with the help of artificial intelligence."
      officialUrl="https://www.canva.com"
      features={[
        "Graphic design",
        "Presentations",
        "AI image creation",
        "Social media content",
        "Creative ideas and designs",
      ]}
      overview="Canva AI combines artificial intelligence with Canva's design tools to help users create visual content more easily. It can assist with designs, presentations, images, social media content, and creative projects, making it useful for both beginners and experienced creators."
      bestFor={[
        "Students creating presentations, projects, and visual assignments",
        "Freelancers designing graphics and client content",
        "Content creators making social media posts and visual content",
        "Small businesses creating marketing materials and presentations",
        "Anyone who wants to create professional-looking designs more easily",
      ]}
    />
  );
}