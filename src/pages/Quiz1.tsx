
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const Quiz1 = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 6; // 5 perguntas + tela inicial

  const handleNext = () => {
    if (currentStep < totalSteps - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <div className="max-w-3xl mx-auto text-center animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Qual é o seu Perfil Financeiro nos EUA?
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Descubra, em poucos minutos, como você lida com dinheiro nos EUA e receba recomendações personalizadas para melhorar sua vida financeira.
            </p>
            <Button 
              className="animate-fadeIn"
              size="lg"
              onClick={handleNext}
            >
              Iniciar o Quiz
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        );
      default:
        return (
          <div className="max-w-3xl mx-auto text-center animate-fadeIn">
            <h2 className="text-3xl font-bold text-white mb-4">
              Pergunta {currentStep} de {totalSteps - 1}
            </h2>
            <p className="text-gray-300 mb-8">
              (Aguardando implementação das perguntas)
            </p>
            <div className="flex justify-center gap-4">
              <Button
                variant="secondary"
                onClick={handleBack}
                className="animate-fadeIn"
              >
                <ArrowLeft className="mr-2" />
                Voltar
              </Button>
              <Button
                onClick={handleNext}
                className="animate-fadeIn"
              >
                Próxima
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-[#171717]">
      <main className="container mx-auto px-4 pt-24 pb-16">
        {currentStep > 0 && (
          <div className="max-w-3xl mx-auto mb-8">
            <Progress 
              value={(currentStep / (totalSteps - 1)) * 100} 
              className="animate-fadeIn"
            />
          </div>
        )}
        {renderStep()}
      </main>
    </div>
  );
};

export default Quiz1;
