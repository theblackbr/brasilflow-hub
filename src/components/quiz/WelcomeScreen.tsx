
import { Button } from "@/components/ui/button";
import { ArrowRight, PiggyBank, DollarSign, Award, Users } from "lucide-react";
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
    <img 
      src="/lovable-uploads/dcd03955-ffcf-4d62-af9c-310d9ea0d6c5.png" 
      alt="Brasil na América Logo" 
      className="h-16 mx-auto mb-4"
    />

    <div className="inline-block border-2 border-primary rounded-full px-4 py-1 mb-6">
      <span className="text-sm font-medium text-gray-800">
        Exclusivo para Brasileiros nos EUA
      </span>
    </div>

    <h1 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
      Descubra as Melhores Soluções Financeiras para Brasileiros nos EUA
    </h1>
    <p className="text-xl text-gray-600 mb-12">
      Em poucos minutos, entendam quais contas digitais são ideais para seus perfis nos EUA e recebam recomendações personalizadas com os melhores benefícios para brasileiros.
    </p>

    <div className="space-y-6 mb-12 text-left">
      <div className="flex items-center gap-4">
        <Users className="w-8 h-8 text-primary flex-shrink-0" />
        <p className="text-base md:text-lg text-gray-700">
          Comparem diferentes contas e escolham as que melhor atendem suas necessidades
        </p>
      </div>
      
      <div className="flex items-center gap-4">
        <DollarSign className="w-8 h-8 text-primary flex-shrink-0" />
        <p className="text-base md:text-lg text-gray-700">
          Descubram benefícios exclusivos para brasileiros nos EUA
        </p>
      </div>
      
      <div className="flex items-center gap-4">
        <Award className="w-8 h-8 text-primary flex-shrink-0" />
        <p className="text-base md:text-lg text-gray-700">
          Recebam relatórios personalizados com as melhores recomendações
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
