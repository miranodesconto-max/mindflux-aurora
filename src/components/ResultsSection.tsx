import { useState } from "react";
import { TrendingUp, Clock, DollarSign, ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const cases = [
  {
    title: "+38% de agendamentos noturnos",
    period: "em 45 dias",
    description: "Clínica odontológica em São Paulo aumentou significativamente os agendamentos fora do horário comercial",
    metrics: [
      { label: "Agendamentos noturnos", value: "+38%", icon: Clock },
      { label: "Tempo de resposta", value: "45s", icon: TrendingUp },
      { label: "Taxa de conversão", value: "73%", icon: Star }
    ],
    color: "text-blue-400"
  },
  {
    title: "–42% em custos de atendimento", 
    period: "em 60 dias",
    description: "Rede de clínicas reduziu drasticamente os custos operacionais com atendimento automatizado",
    metrics: [
      { label: "Redução de custos", value: "-42%", icon: DollarSign },
      { label: "Horas economizadas", value: "120h/mês", icon: Clock },
      { label: "ROI mensal", value: "340%", icon: TrendingUp }
    ],
    color: "text-green-400"
  },
  {
    title: "100% das mensagens respondidas",
    period: "em até 60s",
    description: "Clínica especializada em implantes alcançou atendimento perfeito com resposta instantânea",
    metrics: [
      { label: "Taxa de resposta", value: "100%", icon: Star },
      { label: "Tempo médio", value: "38s", icon: Clock },
      { label: "Satisfação", value: "4.9/5", icon: TrendingUp }
    ],
    color: "text-purple-400"
  }
];

const testimonials = [
  {
    name: "Dr. Carlos Silva",
    clinic: "Clínica Sorrir+",
    location: "São Paulo, SP",
    text: "A MindFlux transformou completamente nosso atendimento. Nunca mais perdemos um paciente por demora na resposta.",
    rating: 5,
    image: "🦷"
  },
  {
    name: "Dra. Maria Santos",
    clinic: "Dental Excellence",
    location: "Rio de Janeiro, RJ", 
    text: "Em 60 dias, nossa agenda ficou 40% mais cheia. A IA é tão natural que os pacientes nem percebem.",
    rating: 5,
    image: "👩‍⚕️"
  },
  {
    name: "Dr. João Costa",
    clinic: "ImplanteCenter",
    location: "Belo Horizonte, MG",
    text: "Reduzimos custos operacionais em quase 50%. Agora focamos 100% no que sabemos fazer: cuidar dos sorrisos.",
    rating: 5,
    image: "👨‍⚕️"
  }
];

export const ResultsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-6">
            <span className="text-gradient-gold">Resultados</span> Reais
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cases de sucesso que comprovam o poder da IA na odontologia
          </p>
        </div>

        {/* Cases */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {cases.map((caseStudy, index) => (
            <div
              key={index}
              className="glass-card p-8 hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-heading font-bold mb-2 text-gradient-gold">
                  {caseStudy.title}
                </h3>
                <p className="text-primary font-medium">
                  {caseStudy.period}
                </p>
              </div>

              <p className="text-muted-foreground text-center mb-8 leading-relaxed">
                {caseStudy.description}
              </p>

              <div className="space-y-4">
                {caseStudy.metrics.map((metric, metricIndex) => (
                  <div key={metricIndex} className="flex items-center justify-between">
                    <div className="flex items-center">
                      <metric.icon className={`h-5 w-5 ${caseStudy.color} mr-3`} />
                      <span className="text-sm text-muted-foreground">
                        {metric.label}
                      </span>
                    </div>
                    <span className="font-bold text-foreground">
                      {metric.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="glass-card p-8 lg:p-12 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-heading font-semibold mb-2">
              O que dizem nossos <span className="text-gradient-gold">clientes</span>
            </h3>
          </div>

          <div className="relative">
            <div className="flex items-center justify-between mb-6">
              <Button
                variant="ghost"
                size="icon"
                onClick={prevTestimonial}
                className="hover:text-primary"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-primary' : 'bg-muted'
                    }`}
                    onClick={() => setCurrentTestimonial(index)}
                  />
                ))}
              </div>

              <Button
                variant="ghost"
                size="icon"
                onClick={nextTestimonial}
                className="hover:text-primary"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

            <div className="text-center animate-fade-up">
              <Quote className="h-8 w-8 text-primary mx-auto mb-6 opacity-50" />
              
              <blockquote className="text-lg lg:text-xl mb-6 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              <div className="flex items-center justify-center mb-4">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="flex items-center justify-center space-x-4">
                <div className="text-4xl">
                  {testimonials[currentTestimonial].image}
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonials[currentTestimonial].clinic}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {testimonials[currentTestimonial].location}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};