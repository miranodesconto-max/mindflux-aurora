import { Clock, TrendingDown, DollarSign } from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Demora em responder",
    description: "Cada minuto sem resposta é chance do paciente fechar com o concorrente.",
    color: "text-red-400"
  },
  {
    icon: TrendingDown,
    title: "Rotatividade e custos",
    description: "Salários e encargos para tarefas repetitivas drenam o caixa.",
    color: "text-orange-400"
  },
  {
    icon: DollarSign,
    title: "Dinheiro que evapora",
    description: "Faturamento vaza em silêncio com operação ineficiente.",
    color: "text-yellow-400"
  }
];

export const ProblemSection = () => {
  return (
    <section className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-6">
            O <span className="text-gradient-gold">Problema</span> que Todo 
            <br />Dentista Enfrenta
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Enquanto você cuida dos sorrisos, oportunidades escapam pelos dedos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="glass-card p-8 text-center hover-lift group animate-fade-up"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="mb-6">
                <div className={`w-16 h-16 mx-auto rounded-full bg-card/50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <problem.icon className={`h-8 w-8 ${problem.color}`} />
                </div>
              </div>
              
              <h3 className="text-xl font-heading font-semibold mb-4 text-foreground">
                {problem.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-48 h-48 bg-primary/3 rounded-full blur-3xl" />
      </div>
    </section>
  );
};