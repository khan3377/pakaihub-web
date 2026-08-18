import type { Metadata } from "next";
import AIToolDetail from "../../components/AIToolDetail";

export const metadata: Metadata = {
  title: "CapCut AI | PakAIHub",
  description:
    "Learn about CapCut, an AI-powered video editing tool for creators, social media, and short-form videos.",
};

export default function CapCutPage() {
  return (
    <AIToolDetail
      name="CapCut AI"
      category="Video"
      description="CapCut is an AI-powered video editing platform for creators, social media content, and short-form videos."
      officialUrl="https://www.capcut.com"
      features={[
        "AI video editing",
        "Short-form video creation",
        "Social media content",
        "Captions and subtitles",
        "Creative video effects",
      ]}
      overview="CapCut is an AI-powered video editing platform that helps users create and edit videos for social media, short-form content, and creative projects. It can be useful for editing videos, adding captions, creating effects, and developing engaging visual content."
      bestFor={[
        "Content creators making social media videos",
        "Video creators producing short-form content",
        "Freelancers editing videos for clients",
        "Social media managers creating engaging content",
        "Anyone interested in easy AI-powered video editing",
      ]}
    />
  );
}