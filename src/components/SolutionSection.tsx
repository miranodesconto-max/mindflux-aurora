import { Clock, Zap, RefreshCw, Brain } from "lucide-react";

const solutions = [
  {
    icon: Clock,
    title: "Atende 24h/7",
    description: "Sem pausas, sem atrasos. Sua clínica nunca dorme.",
    features: ["Disponibilidade total", "Sem horário comercial", "Cobertura completa"]
  },
  {
    icon: Zap,
    title: "Resposta imediata",
    description: "100% das mensagens respondidas em segundos.",
    features: ["Tempo de resposta <60s", "Zero filas", "Atendimento instantâneo"]
  },
  {
    icon: RefreshCw,
    title: "Follow-up infinito",
    description: "Sem esquecer, sem procrastinar. Persistência inteligente.",
    features: ["Lembretes automáticos", "Reagendamentos", "Campanhas de reativação"]
  },
  {
    icon: Brain,
    title: "IA Humanizada",
    description: "Entende contexto, tom de voz e base de conhecimento da clínica.",
    features: ["Conversação natural", "Personalização total", "Aprendizado contínuo"]
  }
];

export const SolutionSection = () => {
  return (
    <section className="py-20 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 mesh-bg opacity-20" />
      
      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-6">
            A <span className="text-gradient-gold">Solução</span> MindFlux
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Transforme atendimento em faturamento com eficiência, empatia e velocidade.
          </p>
          
          {/* Highlight Banner */}
          <div className="glass-card p-6 max-w-4xl mx-auto border-primary/30">
            <p className="text-lg lg:text-xl font-semibold text-gradient-gold">
              "Mais que chatbot: um agente de IA que conversa com naturalidade."
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="glass-card p-8 hover-lift group animate-fade-up"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-gradient-gold flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <solution.icon className="h-7 w-7 text-mf-black" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">
                    {solution.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {solution.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {solution.features.map((feature, featureIndex) => (
                      <li 
                        key={featureIndex} 
                        className="flex items-center text-sm text-muted-foreground"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};