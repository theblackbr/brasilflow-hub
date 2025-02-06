
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface QuizAnswer {
  tempoEUA: string;
  objetivoFinanceiro: string;
  fonteRenda: string;
  appsFinanceiros: string;
  dificuldades: string;
}

const Quiz1 = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 6; // 5 perguntas + tela inicial
  const [answers, setAnswers] = useState<QuizAnswer>({
    tempoEUA: "",
    objetivoFinanceiro: "",
    fonteRenda: "",
    appsFinanceiros: "",
    dificuldades: "",
  });

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

  const handleAnswerChange = (question: keyof QuizAnswer, value: string) => {
    setAnswers(prev => ({
      ...prev,
      [question]: value
    }));
  };

  const renderQuestion = (
    title: string,
    options: string[],
    questionKey: keyof QuizAnswer
  ) => (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold text-white mb-8">{title}</h2>
      <RadioGroup
        value={answers[questionKey]}
        onValueChange={(value) => handleAnswerChange(questionKey, value)}
        className="flex flex-col space-y-4"
      >
        {options.map((option) => (
          <label
            key={option}
            className="flex items-center space-x-3 bg-secondary/50 p-4 rounded-lg cursor-pointer hover:bg-secondary/70 transition-colors"
          >
            <RadioGroupItem value={option} id={option} className="text-primary" />
            <span className="text-white text-lg">{option}</span>
          </label>
        ))}
      </RadioGroup>
    </div>
  );

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
      case 1:
        return renderQuestion(
          "Há quanto tempo você está nos EUA?",
          [
            "Menos de 1 ano",
            "Entre 1 e 3 anos",
            "Entre 3 e 5 anos",
            "Mais de 5 anos"
          ],
          "tempoEUA"
        );
      case 2:
        return renderQuestion(
          "Qual é seu principal objetivo financeiro nos EUA?",
          [
            "Construir crédito",
            "Investir em ações",
            "Comprar uma casa",
            "Abrir um negócio",
            "Enviar dinheiro para o Brasil"
          ],
          "objetivoFinanceiro"
        );
      case 3:
        return renderQuestion(
          "Qual sua principal fonte de renda?",
          [
            "Emprego formal (CLT)",
            "Trabalho autônomo",
            "Empresário",
            "Investimentos",
            "Múltiplas fontes"
          ],
          "fonteRenda"
        );
      case 4:
        return renderQuestion(
          "Quais apps financeiros você mais usa?",
          [
            "Apenas banco tradicional",
            "Wise/Remessa Online",
            "Robinhood/TD Ameritrade",
            "Cash App/Venmo",
            "Vários apps diferentes"
          ],
          "appsFinanceiros"
        );
      case 5:
        return renderQuestion(
          "Qual sua maior dificuldade financeira nos EUA?",
          [
            "Entender o sistema de crédito",
            "Fazer investimentos",
            "Declarar impostos",
            "Enviar dinheiro internacional",
            "Organizar o orçamento"
          ],
          "dificuldades"
        );
      default:
        return null;
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
        <div className="animate-fadeIn">
          {renderStep()}
          {currentStep > 0 && (
            <div className="flex justify-center gap-4 mt-12">
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
                disabled={currentStep === totalSteps - 1}
                className="animate-fadeIn"
              >
                Próxima
                <ArrowRight className="ml-2" />
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Quiz1;
