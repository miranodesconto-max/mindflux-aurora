import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { CheckCircle, Clock, Users, Shield } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import whatsappMockup from "@/assets/whatsapp-chat.jpg";

const badges = [
  { icon: Clock, text: "Implementação Rápida" },
  { icon: Users, text: "atende em segundos seus pacientes" },
  { icon: Shield, text: "mais agendamentos" }
];

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 aurora-bg opacity-40" />
      <div className="absolute inset-0 mesh-bg opacity-30" />
      
      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold leading-tight">
                <span className="block text-foreground">IA que atende sua</span>
                <span className="block text-gradient-gold">clínica 24/7</span>
                <span className="block text-foreground">e transforma</span>
                <span className="block text-gradient-gold">mensagens</span>
                <span className="block text-foreground">em agendamentos</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground max-w-2xl">
                Respostas imediatas, redução de custos operacionais e mais horários 
                preenchidos — direto no seu WhatsApp Business.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="hero" size="xl" className="gold-glow-strong">
                Agendar Demonstração
              </Button>
              <Button variant="outline" size="xl">
                Ver Planos
              </Button>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {badges.map((badge, index) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="flex items-center gap-2 px-4 py-2 text-sm bg-card/50 backdrop-blur-sm border-primary/30"
                >
                  <badge.icon className="h-4 w-4 text-primary" />
                  {badge.text}
                </Badge>
              ))}
            </div>
          </div>

          {/* Right Column - WhatsApp Mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-gold rounded-3xl opacity-20 blur-xl animate-pulse" />
              <div className="relative glass-card p-4 rounded-3xl hover-lift">
                <img
                  src={whatsappMockup}
                  alt="Interface do WhatsApp Business com IA da MindFlux confirmando consulta odontológica"
                  className="w-full max-w-sm rounded-2xl shadow-lift"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-float" />
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-primary/20 rounded-full animate-float delay-1000" />
        <div className="absolute top-1/2 right-1/3 w-1.5 h-1.5 bg-primary/25 rounded-full animate-float delay-2000" />
      </div>
    </section>
  );
};