import type { Metadata } from "next";
import AIToolDetail from "../../components/AIToolDetail";

export const metadata: Metadata = {
  title: "Adobe Firefly | PakAIHub",
  description:
    "Learn about Adobe Firefly, a generative AI tool for creating and editing images and creative content.",
};

export default function FireflyPage() {
  return (
    <AIToolDetail
      name="Adobe Firefly"
      category="Design"
      description="Adobe Firefly is a generative AI tool for creating and editing images, designs, and other creative content."
      officialUrl="https://firefly.adobe.com"
      features={[
        "AI image generation",
        "Creative image editing",
        "Graphic design ideas",
        "Generative creative content",
        "Visual experimentation",
      ]}
      overview="Adobe Firefly is a generative AI tool that helps users create and edit images, designs, and other creative content. It can be useful for exploring visual ideas, creating graphics, and experimenting with AI-powered creative workflows."
      bestFor={[
        "Designers creating visual concepts",
        "Content creators making creative images",
        "Students creating visual projects",
        "Freelancers developing designs for clients",
        "Anyone interested in AI-powered creative tools",
      ]}
    />
  );
}