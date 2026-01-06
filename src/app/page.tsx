import { Vision } from "@/components/features/home/Vision";
import { FAQ } from "@/components/features/home/FAQ";
import { Features } from "@/components/features/home/Features";
import { Hero } from "@/components/features/home/Hero";
import { Approach } from "@/components/features/home/Approach";
import { Founder } from "@/components/features/home/Founder";
import { CommunityCTA } from "@/components/features/home/CommunityCTA";
import { ContactForm } from "@/components/features/home/ContactForm";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Features />
      <Approach />
      <Founder />
      <Vision />
      <CommunityCTA />
      <FAQ />
      <ContactForm />
    </div>
  );
}
