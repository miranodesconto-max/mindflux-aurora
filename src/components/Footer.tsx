import { Link } from "react-router-dom";
import { MessageSquare, Mail, MapPin, Phone } from "lucide-react";

const footerLinks = {
  company: [
    { label: "Sobre", href: "/sobre" },
    { label: "Como Funciona", href: "/como-funciona" },
    { label: "Resultados", href: "/resultados" },
    { label: "Blog", href: "/blog" }
  ],
  solutions: [
    { label: "Soluções", href: "/solucoes" },
    { label: "Integrações", href: "/integracoes" },
    { label: "Planos", href: "/planos" },
    { label: "Contato", href: "/contato" }
  ],
  legal: [
    { label: "Política de Privacidade", href: "/privacidade" },
    { label: "Termos de Uso", href: "/termos" },
    { label: "LGPD", href: "/lgpd" }
  ]
};

export const Footer = () => {
  return (
    <footer className="relative mt-20">
      {/* Main Footer */}
      <div className="glass-card border-t border-primary/20">
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Logo & Description */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <div className="text-2xl font-heading font-bold text-gradient-gold">
                  MindFlux
                </div>
                <div className="text-2xl font-heading font-bold text-foreground">
                  AI
                </div>
              </Link>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                IA que transforma mensagens em agendamentos. 
                Atendimento 24/7 para clínicas odontológicas.
              </p>

              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-green-400">Sistema online</span>
              </div>
            </div>

            {/* Company Links */}
            <div>
              <h4 className="font-heading font-semibold mb-6 text-foreground">
                Empresa
              </h4>
              <ul className="space-y-4">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions Links */}
            <div>
              <h4 className="font-heading font-semibold mb-6 text-foreground">
                Soluções
              </h4>
              <ul className="space-y-4">
                {footerLinks.solutions.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.href}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-heading font-semibold mb-6 text-foreground">
                Contato
              </h4>
              <div className="space-y-4">
                <div className="flex items-start">
                  <MessageSquare className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">
                      WhatsApp
                    </p>
                    <p className="text-foreground font-medium">
                      (11) 99999-9999
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Email
                    </p>
                    <p className="text-foreground font-medium">
                      contato@mindflux.ai
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/20">
          <div className="container mx-auto px-4 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-6">
                <p className="text-sm text-muted-foreground">
                  © 2024 MindFlux AI. Todos os direitos reservados.
                </p>
                
                <div className="flex items-center space-x-1 text-xs text-muted-foreground">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>LGPD Compliant</span>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                {footerLinks.legal.map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    className="text-xs text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};