
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface WelcomeScreenProps {
  onNext: () => void;
}

export const WelcomeScreen = ({ onNext }: WelcomeScreenProps) => (
  <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="max-w-2xl mx-auto w-full px-4 text-center animate-fadeIn"
  >
    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
      Qual é o seu Perfil Financeiro nos EUA?
    </h1>
    <p className="text-xl text-gray-600 mb-8">
      Descubra, em poucos minutos, como você lida com dinheiro nos EUA e receba recomendações personalizadas para melhorar sua vida financeira.
    </p>
    <Button 
      className="animate-fadeIn"
      size="lg"
      onClick={onNext}
    >
      Iniciar o Quiz
      <ArrowRight className="ml-2" />
    </Button>
  </motion.div>
);
