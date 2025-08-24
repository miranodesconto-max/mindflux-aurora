import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background with golden lines and glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-mf-black via-mf-black to-mf-black">
        <div className="absolute inset-0 aurora-bg opacity-50" />
        <div className="absolute inset-0 mesh-bg opacity-30" />
        
        {/* Animated golden lines */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent animate-pulse" />
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent animate-pulse delay-1000" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-pulse delay-500" />
        </div>
      </div>

      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 rounded-full bg-gradient-gold flex items-center justify-center animate-pulse gold-glow-strong">
              <Sparkles className="h-10 w-10 text-mf-black" />
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold mb-8 leading-tight">
            Pronto para encher a agenda da sua{" "}
            <span className="text-gradient-gold">clínica?</span>
          </h2>

          {/* Description */}
          <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            Pare de perder pacientes por demora no atendimento. 
            Ative sua IA agora e veja os resultados em dias.
          </p>

          {/* CTA Button */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button 
              variant="hero" 
              size="xl" 
              className="text-lg px-12 py-6 h-auto gold-glow-strong group"
              onClick={() => window.open('https://wa.me/5571984264435?text=Gostaria%20de%20agendar%20uma%20demonstração', '_blank')}
            >
              Ativar Minha IA
              <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            {/* Trust indicators */}
            <div className="flex items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse" />
                <span>Setup em 7 dias</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse" />
                <span>Sem fidelidade</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse" />
                <span>Suporte total</span>
              </div>
            </div>
          </div>

          {/* Additional info */}
          <div className="mt-12 glass-card p-6 max-w-2xl mx-auto">
            <p className="text-sm text-muted-foreground">
              💡 <strong className="text-primary">Demonstração gratuita:</strong> Veja a IA funcionando com casos reais da sua clínica antes de decidir.
            </p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/40 rounded-full animate-float" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-primary/30 rounded-full animate-float delay-1000" />
        <div className="absolute bottom-32 left-20 w-1.5 h-1.5 bg-primary/35 rounded-full animate-float delay-2000" />
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-primary/25 rounded-full animate-float delay-500" />
      </div>
    </section>
  );
};