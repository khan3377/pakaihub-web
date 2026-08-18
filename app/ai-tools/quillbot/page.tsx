import type { Metadata } from "next";
import AIToolDetail from "../../components/AIToolDetail";

export const metadata: Metadata = {
  title: "QuillBot | PakAIHub",
  description:
    "Learn about QuillBot, an AI writing and paraphrasing tool for rewriting, summarizing, and improving text.",
};

export default function QuillBotPage() {
  return (
    <AIToolDetail
      name="QuillBot"
      category="Writing"
      description="QuillBot is an AI writing and paraphrasing tool that helps rewrite, summarize, and improve text."
      officialUrl="https://quillbot.com"
      features={[
        "Paraphrasing and rewriting",
        "Summarizing text",
        "Improving writing",
        "Grammar and style suggestions",
        "Academic and professional writing",
      ]}
      overview="QuillBot is an AI writing and paraphrasing tool that helps users rewrite, summarize, and improve text. It can be useful for editing written content, improving clarity, and creating polished academic and professional writing."
      bestFor={[
        "Students improving academic writing",
        "Writers rewriting and improving content",
        "Professionals creating clear written communication",
        "Freelancers editing content for clients",
        "Anyone looking to improve and refine their writing",
      ]}
    />
  );
}