import type { Metadata } from "next";
import AIToolDetail from "../../components/AIToolDetail";

export const metadata: Metadata = {
  title: "Photoroom AI | PakAIHub",
  description:
    "Learn about Photoroom, an AI photo editing tool for removing backgrounds, creating product images, and improving photos.",
};

export default function PhotoroomPage() {
  return (
    <AIToolDetail
      name="Photoroom AI"
      category="Design"
      description="Photoroom is an AI photo editing tool for removing backgrounds, creating product images, and improving photos."
      officialUrl="https://www.photoroom.com/"
      features={[
        "AI photo editing",
        "Background removal",
        "Product image creation",
        "Photo improvement",
        "Visual content creation",
      ]}
      overview="Photoroom is an AI photo editing tool that helps users edit photos, remove backgrounds, create product images, and improve visual content with AI."
      bestFor={[
        "Online sellers creating product images",
        "Content creators editing photos",
        "Businesses improving product photography",
        "Designers creating visual content",
        "Anyone who wants to edit photos with AI",
      ]}
    />
  );
}