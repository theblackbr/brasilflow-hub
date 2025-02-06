
import NavigationHeader from "@/components/NavigationHeader";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Quiz1 = () => {
  return (
    <div className="min-h-screen bg-[#171717]">
      <NavigationHeader />
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fadeIn">
            Qual é o seu Perfil Financeiro nos EUA?
          </h1>
          <p className="text-xl text-gray-300 mb-8 animate-fadeIn">
            Descubra, em poucos minutos, como você lida com dinheiro nos EUA e receba recomendações personalizadas para melhorar sua vida financeira.
          </p>
          <Button 
            className="animate-fadeIn"
            size="lg"
          >
            Iniciar o Quiz
            <ArrowRight className="ml-2" />
          </Button>
        </div>
      </main>
    </div>
  );
};

export default Quiz1;
