
import { Button } from "@/components/ui/button";
import { ArrowRight, PiggyBank, DollarSign, Award } from "lucide-react";
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
    <span className="text-xs font-medium text-primary block mb-4">
      BrasilFlow
    </span>

    <div className="inline-block border-2 border-primary rounded-full px-4 py-1 mb-6">
      <span className="text-sm font-medium text-gray-800">
        Exclusivo para Brasileiro nos EUA
      </span>
    </div>

    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
      Descubra a Melhor Solução Bancária para Você nos EUA
    </h1>
    <p className="text-xl text-gray-600 mb-12">
      Em poucos minutos, entenda qual conta digital é ideal para o seu perfil nos EUA e receba recomendações personalizadas com os melhores benefícios para brasileiros.
    </p>

    <div className="space-y-6 mb-12 text-left">
      <div className="flex items-center gap-4">
        <PiggyBank className="w-8 h-8 text-primary flex-shrink-0" />
        <p className="text-lg text-gray-700">
          Compare diferentes contas e escolha a que melhor atende suas necessidades
        </p>
      </div>
      
      <div className="flex items-center gap-4">
        <DollarSign className="w-8 h-8 text-primary flex-shrink-0" />
        <p className="text-lg text-gray-700">
          Descubra benefícios exclusivos para brasileiros nos EUA
        </p>
      </div>
      
      <div className="flex items-center gap-4">
        <Award className="w-8 h-8 text-primary flex-shrink-0" />
        <p className="text-lg text-gray-700">
          Receba um relatório personalizado com as melhores recomendações
        </p>
      </div>
    </div>

    <Button 
      className="animate-fadeIn"
      size="lg"
      onClick={onNext}
    >
      Começar Agora
      <ArrowRight className="ml-2" />
    </Button>
  </motion.div>
);
