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
      <section id="home">
        <HeroSection />
      </section>
      <ProblemSection />
      <section id="solucoes">
        <SolutionSection />
      </section>
      <section id="como-funciona">
        <HowItWorksSection />
      </section>
      <section id="planos">
        <PlansSection />
      </section>
      <section id="resultados">
        <ResultsSection />
      </section>
      <section id="sobre">
        <AboutSection />
      </section>
      <CTASection />
    </div>
  );
};

export default Index;
