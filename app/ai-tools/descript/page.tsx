import type { Metadata } from "next";
import AIToolDetail from "../../components/AIToolDetail";

export const metadata: Metadata = {
  title: "Descript AI | PakAIHub",
  description:
    "Learn about Descript, an AI-powered tool for editing videos, audio, podcasts, and transcripts.",
};

export default function DescriptPage() {
  return (
    <AIToolDetail
      name="Descript AI"
      category="Video"
      description="Descript is an AI-powered tool for editing videos, audio, podcasts, and transcripts."
      officialUrl="https://www.descript.com"
      features={[
        "Video editing",
        "Audio editing",
        "Podcast creation",
        "Transcript-based editing",
        "Content creation",
      ]}
      overview="Descript is an AI-powered media editing tool that helps users edit video and audio using transcripts and other intuitive editing features. It can be useful for creating podcasts, videos, narrated content, and other media projects."
      bestFor={[
        "Content creators editing videos and audio",
        "Podcasters creating and editing podcast episodes",
        "Video creators working with transcripts and spoken content",
        "Freelancers producing video and audio projects",
        "Teams creating and editing media content",
      ]}
    />
  );
}