import { Badge } from "@/components/ui/badge";
import { Award, Users, TrendingUp, Code, Brain, Target } from "lucide-react";
import samuelPortrait from "@/assets/samuel-fonseca-portrait.jpg";

const achievements = [
  "+50 empresas atendidas no Brasil",
  "+R$5M gerados para clientes",
  "7 anos de experiência no mercado"
];

const expertise = [
  { icon: Brain, title: "Especialista em IA", description: "Desenvolvimento de soluções inteligentes" },
  { icon: Code, title: "7+ anos em tecnologia", description: "Programação e sistemas avançados" },
  { icon: Target, title: "Foco em resultados", description: "ROI comprovado para clientes" },
  { icon: Users, title: "Comunidade Lendária IA", description: "Membro ativo da maior comunidade de IA do Brasil" }
];

const companies = [
  { name: "Grupo Boticário", role: "Aumento de vendas" },
  { name: "BASF", role: "Business Intelligence" }
];

export const AboutSection = () => {
  return (
    <section className="py-20 lg:py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 mesh-bg opacity-10" />
      
      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-6">
            Sobre a <span className="text-gradient-gold">MindFlux</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Agência de IA especializada em clínicas odontológicas. 
            Transformamos atendimento em faturamento com eficiência, empatia e velocidade.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Company Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-heading font-semibold mb-4">
                Tecnologia de ponta aplicada à <span className="text-gradient-gold">odontologia</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nossa expertise combina anos de experiência em tecnologia com 
                profundo conhecimento do mercado odontológico. Desenvolvemos 
                soluções que realmente entendem as necessidades específicas 
                de cada clínica.
              </p>
              
              {/* Achievements */}
              <div className="space-y-3">
                {achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center">
                    <Award className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                    <span className="text-muted-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Company Experience */}
            <div className="glass-card p-6">
              <h4 className="font-heading font-semibold mb-4 text-primary">
                Experiência Corporativa
              </h4>
              <div className="space-y-3">
                {companies.map((company, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-medium">{company.name}</span>
                    <Badge variant="outline" className="text-xs">
                      {company.role}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Founder Card */}
          <div className="glass-card p-8 lg:p-10 hover-lift">
            <div className="text-center mb-8">
              <div className="relative w-24 h-24 mx-auto mb-6">
                <div className="absolute -inset-2 bg-gradient-gold rounded-full opacity-30 blur-md" />
                <img
                  src={samuelPortrait}
                  alt="Samuel Fonseca, Sócio-fundador da MindFlux IA"
                  className="relative w-full h-full object-cover rounded-full border-2 border-primary/20 shadow-lift"
                />
              </div>
              <h3 className="text-2xl font-heading font-bold mb-2">
                Samuel Fonseca
              </h3>
              <p className="text-primary font-medium mb-4">
                Sócio-fundador da MindFlux IA
              </p>
            </div>

            {/* Expertise Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {expertise.map((item, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-card/30">
                  <item.icon className="h-8 w-8 text-primary mx-auto mb-2" />
                  <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>

            {/* Bio */}
            <div className="space-y-4 text-sm text-muted-foreground">
              <div className="flex items-start">
                <TrendingUp className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>+7 anos em tecnologia e programação</span>
              </div>
              <div className="flex items-start">
                <Brain className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>Especialista em IA • Membro Comunidade Lendária IA</span>
              </div>
              <div className="flex items-start">
                <Award className="h-4 w-4 text-primary mr-2 mt-0.5 flex-shrink-0" />
                <span>Histórico comprovado em aumento de vendas e BI</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};