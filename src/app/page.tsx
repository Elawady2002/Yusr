import { Vision } from "@/components/home/Vision";
import { FAQ } from "@/components/home/FAQ";
import { Features } from "@/components/home/Features";

import { Hero } from "@/components/home/Hero";
import { Instructors } from "@/components/home/Instructors";
// import { Partners } from "@/components/home/Partners"; // Might be redundant or moved
import { ContactForm } from "@/components/home/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Features />

      <Vision />
      <Instructors />
      <FAQ />
      <ContactForm />
    </div>
  );
}
