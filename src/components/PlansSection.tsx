import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Zap, Shield } from "lucide-react";

const plans = [
  {
    name: "Essencial",
    description: "Perfeito para clínicas que estão começando com IA",
    price: "Consultar",
    period: "mensais",
    features: [
      "Atendimento 24/7 no WhatsApp",
      "Base de respostas configurada",
      "1 agenda / 1 número",
      "Relatórios mensais",
      "Suporte por email",
      "Treinamento básico"
    ],
    cta: "Começar Essencial",
    variant: "outline" as const,
    popular: false
  },
  {
    name: "Profissional",
    description: "A escolha mais popular para clínicas em crescimento",
    price: "Consultar",
    period: "mensais",
    features: [
      "Tudo do Essencial",
      "Pré-agendamento inteligente",
      "Lembretes automáticos",
      "Até 3 agendas / 1–2 números",
      "Relatórios semanais + otimizações",
      "Suporte prioritário",
      "Follow-up automatizado",
      "Dashboard avançado"
    ],
    cta: "Assinar Profissional",
    variant: "hero" as const,
    popular: true
  },
  {
    name: "Enterprise",
    description: "Solução completa para redes e clínicas grandes",
    price: "Consultar",
    period: "mensais",
    features: [
      "Workflows avançados",
      "Campanhas de reativação",
      "Fila de espera inteligente",
      "Integrações (CRM/ERP)",
      "Follow-up infinito",
      "Suporte 24/7",
      "Treinamento da equipe",
      "Consultoria estratégica"
    ],
    cta: "Falar com Especialista",
    variant: "premium" as const,
    popular: false
  }
];

export const PlansSection = () => {
  return (
    <section className="py-20 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 aurora-bg opacity-30" />
      
      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-6">
            Planos que <span className="text-gradient-gold">fazem a diferença</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Escolha o plano ideal para sua clínica. Sem fidelidade obrigatória, 
            valores variam conforme volume e integrações.
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full">
            <Shield className="h-4 w-4 text-green-400 mr-2" />
            <span className="text-green-400 font-medium text-sm">
              Garantia de resultado - se a IA não entregar melhora no seu atendimento, devolvemos seu dinheiro
            </span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`glass-card p-8 relative hover-lift animate-fade-up ${
                plan.popular 
                  ? 'border-primary/50 gold-glow scale-105' 
                  : 'border-primary/20'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gradient-gold text-mf-black font-semibold px-4 py-1 flex items-center gap-1">
                    <Star className="h-3 w-3 fill-current" />
                    Mais escolhido
                  </Badge>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-heading font-bold mb-2">
                  {plan.name}
                </h3>
                <p className="text-muted-foreground text-sm mb-6">
                  {plan.description}
                </p>
                
                <div className="mb-6">
                  <div className="text-4xl font-heading font-bold text-gradient-gold mb-1">
                    {plan.price}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    valores {plan.period}
                  </div>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Button 
                variant={plan.variant} 
                size="lg" 
                className="w-full"
                onClick={() => window.open('https://wa.me/5571984264435?text=Gostaria%20de%20agendar%20uma%20demonstração', '_blank')}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-12">
          <div className="glass-card p-6 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <Zap className="h-5 w-5 text-primary mr-2" />
              <span className="font-semibold text-primary">Garantia de Satisfação</span>
            </div>
            <p className="text-muted-foreground">
              Teste sem compromisso por 7 dias. Se não ficar satisfeito, 
              cancelamos sem custos e sem burocracia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};