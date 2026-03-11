import { ActionText } from "@/components/ui/manga/action-text";
import ApplyForm from "./apply-form";

export const metadata = {
  title: "Apply Now! | Manga Estates",
};

export default function ApplyPage() {
  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <ActionText as="h1" className="text-5xl md:text-7xl text-red-500 mb-8 drop-shadow-[4px_4px_0_rgba(0,0,0,1)] text-center">
        JOIN THE ACTION!
      </ActionText>
      <p className="text-xl font-bold mb-8 text-center bg-white border-4 border-black p-4 shadow-[4px_4px_0_0_#000]">
        Ready to live in the most exciting apartments in the city? Fill out the application below and we&apos;ll get back to you faster than a speeding bullet!
      </p>
      
      <ApplyForm />
    </div>
  );
}
