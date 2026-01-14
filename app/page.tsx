import Hero from "@/components/hero";
import HowItWorks from "@/components/how-it-works";
import Services from "@/components/services";
import WhoItsFor from "@/components/who-its-for";
import SocialProof from "@/components/social-proof";
import CTASection from "@/components/cta-section";
import ShareSection from "@/components/share-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <HowItWorks />
      <Services />
      <WhoItsFor />
      <SocialProof />
      <CTASection />
      <ShareSection />
    </main>
  );
}
