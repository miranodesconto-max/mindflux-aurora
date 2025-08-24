import { useState } from "react";
import { CheckCircle, Settings, Zap, TrendingUp, Users, Clock, DollarSign, Brain } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Onboarding",
    subtitle: "24–72h",
    description: "Coletamos dados da empresa, definimos cronograma e cadastramos sua base de conhecimento.",
    details: [
      "Análise do perfil da clínica",
      "Configuração inicial do sistema",
      "Integração com WhatsApp Business",
      "Cadastro de especialidades e serviços"
    ],
    icon: Settings
  },
  {
    number: "02", 
    title: "Treinamento da IA",
    subtitle: "Personalização completa",
    description: "Configuramos persona, tom de voz, protocolos específicos, tabela de preços e FAQ real da clínica.",
    details: [
      "Definição da personalidade da IA",
      "Tom de voz alinhado à marca",
      "Protocolos de atendimento personalizados",
      "Base de conhecimento especializada"
    ],
    icon: Brain
  },
  {
    number: "03",
    title: "Go-Live & Otimizações",
    subtitle: "Ativação 24/7",
    description: "Integramos com sua agenda, ativamos o atendimento 24/7 e iniciamos relatórios detalhados.",
    details: [
      "Integração com agenda da clínica",
      "Ativação do atendimento contínuo",
      "Configuração de relatórios",
      "Monitoramento e ajustes"
    ],
    icon: Zap
  }
];

const kpis = [
  { icon: Clock, label: "Tempo de resposta", value: "<60s", color: "text-blue-400" },
  { icon: TrendingUp, label: "Conversão em agendamento", value: "+40%", color: "text-green-400" },
  { icon: Users, label: "Horários recuperados", value: "+25", color: "text-purple-400" },
  { icon: DollarSign, label: "Custo por lead atendido", value: "-60%", color: "text-yellow-400" }
];

export const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-6">
            Como <span className="text-gradient-gold">Funciona</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Da implementação aos primeiros resultados em 3 passos simples
          </p>
        </div>

        {/* Steps */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`glass-card p-8 cursor-pointer transition-all duration-300 hover-lift ${
                activeStep === index ? 'border-primary/50 gold-glow' : 'border-primary/20'
              }`}
              onClick={() => setActiveStep(index)}
            >
              <div className="flex items-center mb-6">
                <div className="text-4xl font-heading font-bold text-gradient-gold mr-4">
                  {step.number}
                </div>
                <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center">
                  <step.icon className="h-6 w-6 text-mf-black" />
                </div>
              </div>
              
              <h3 className="text-xl font-heading font-semibold mb-2">
                {step.title}
              </h3>
              
              <p className="text-primary text-sm font-medium mb-4">
                {step.subtitle}
              </p>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {step.description}
              </p>

              {/* Details */}
              <div className={`space-y-2 transition-all duration-300 ${
                activeStep === index ? 'opacity-100 max-h-40' : 'opacity-60 max-h-20 overflow-hidden'
              }`}>
                {step.details.map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                    <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                    {detail}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* KPIs */}
        <div className="glass-card p-8 lg:p-12">
          <h3 className="text-2xl font-heading font-semibold text-center mb-8">
            Resultados que Você Pode <span className="text-gradient-gold">Medir</span>
          </h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            {kpis.map((kpi, index) => (
              <div 
                key={index} 
                className="text-center group animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-card/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <kpi.icon className={`h-8 w-8 ${kpi.color}`} />
                </div>
                <div className="text-3xl font-heading font-bold text-gradient-gold mb-2">
                  {kpi.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {kpi.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};