import type { Metadata } from "next";
import AIToolDetail from "../../components/AIToolDetail";

export const metadata: Metadata = {
  title: "Grammarly | PakAIHub",
  description:
    "Learn about Grammarly, an AI writing assistant for grammar, clarity, rewriting, and professional communication.",
};

export default function GrammarlyPage() {
  return (
    <AIToolDetail
      name="Grammarly"
      category="Writing"
      description="Grammarly is an AI writing assistant that helps improve grammar, clarity, rewriting, and professional communication."
      officialUrl="https://www.grammarly.com"
      features={[
        "Grammar and spelling",
        "Writing clarity",
        "Rewriting and editing",
        "Professional communication",
        "Improving written content",
      ]}
      overview="Grammarly is an AI writing assistant that helps users improve grammar, clarity, rewriting, and professional communication. It can be useful for creating, editing, and improving written content."
      bestFor={[
        "Students improving essays and assignments",
        "Writers editing and improving their content",
        "Professionals creating clear business communication",
        "Freelancers improving written content for clients",
        "Anyone looking to improve their writing",
      ]}
    />
  );
}