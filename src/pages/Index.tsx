import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSection } from "@/components/SolutionSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { PlansSection } from "@/components/PlansSection";
import { ResultsSection } from "@/components/ResultsSection";
import { AboutSection } from "@/components/AboutSection";
import { CTASection } from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <PlansSection />
      <ResultsSection />
      <AboutSection />
      <CTASection />
    </div>
  );
};

export default Index;
