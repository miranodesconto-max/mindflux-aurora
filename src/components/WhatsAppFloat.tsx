import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Olá! Gostaria de saber mais sobre a MindFlux AI para minha clínica odontológica.");
    window.open(`https://wa.me/5511999999999?text=${message}`, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Button
        onClick={handleWhatsAppClick}
        className="w-14 h-14 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 animate-pulse"
        size="icon"
      >
        <MessageCircle className="h-7 w-7" />
      </Button>
      
      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 opacity-0 hover:opacity-100 transition-opacity duration-200 pointer-events-none">
        <div className="bg-mf-black text-white text-xs px-3 py-2 rounded-lg whitespace-nowrap shadow-lg">
          Fale conosco no WhatsApp
        </div>
      </div>
    </div>
  );
};