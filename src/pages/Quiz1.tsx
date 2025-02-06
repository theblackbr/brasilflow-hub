
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { QuizQuestion } from "@/components/quiz/QuizQuestion";
import { UserDataForm } from "@/components/quiz/UserDataForm";
import { QuizResults } from "@/components/quiz/QuizResults";
import { QuizAnswer, UserData } from "@/types/quiz";
import { calculateProfile } from "@/utils/profileCalculator";

const Quiz1 = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 8;
  const [answers, setAnswers] = useState<QuizAnswer>({
    tempoEUA: "",
    objetivoFinanceiro: "",
    fonteRenda: "",
    appsFinanceiros: "",
    dificuldades: "",
  });
  const [userData, setUserData] = useState<UserData>({
    nome: "",
    email: "",
    telefone: "",
    codigoPais: "+1",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [loadingMessage, setLoadingMessage] = useState("");
  const [showResults, setShowResults] = useState(false);

  const loadingMessages = [
    "Analisando suas respostas...",
    "Personalizando seu perfil financeiro...",
    "Preparando recomendações específicas...",
    "Finalizando sua análise..."
  ];

  useEffect(() => {
    let currentMessageIndex = 0;
    let timer: NodeJS.Timeout;

    if (isLoading) {
      const showNextMessage = () => {
        if (currentMessageIndex < loadingMessages.length) {
          setLoadingMessage(loadingMessages[currentMessageIndex]);
          currentMessageIndex++;
          timer = setTimeout(showNextMessage, 1500);
        } else {
          setIsLoading(false);
          setShowResults(true);
        }
      };

      showNextMessage();
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [isLoading]);

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
    
    if (currentStep > 0 && currentStep <= 5) {
      handleNext();
    }
  };

  const handleUserDataChange = (field: keyof UserData, value: string) => {
    setUserData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleUserDataSubmit = () => {
    if (userData.nome && userData.email && userData.telefone) {
      setIsLoading(true);
    }
  };

  const renderLoadingState = () => (
    <div className="space-y-8 animate-fadeIn max-w-2xl mx-auto w-full px-4 text-center">
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-8">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <h2 className="text-2xl font-bold text-gray-800 animate-pulse">
          {loadingMessage}
        </h2>
      </div>
    </div>
  );

  const renderStep = () => {
    if (isLoading) {
      return renderLoadingState();
    }

    if (showResults) {
      return <QuizResults profile={calculateProfile(answers)} />;
    }

    switch (currentStep) {
      case 0:
        return (
          <div className="max-w-2xl mx-auto w-full px-4 text-center animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              Qual é o seu Perfil Financeiro nos EUA?
            </h1>
            <p className="text-xl text-gray-600 mb-8">
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
        return (
          <QuizQuestion
            title="Há quanto tempo você está nos EUA?"
            options={[
              "Menos de 1 ano",
              "Entre 1 e 3 anos",
              "Entre 3 e 5 anos",
              "Mais de 5 anos"
            ]}
            value={answers.tempoEUA}
            onChange={(value) => handleAnswerChange("tempoEUA", value)}
          />
        );
      case 2:
        return (
          <QuizQuestion
            title="Qual é seu principal objetivo financeiro nos EUA?"
            options={[
              "Construir crédito",
              "Investir em ações",
              "Comprar uma casa",
              "Abrir um negócio",
              "Enviar dinheiro para o Brasil"
            ]}
            value={answers.objetivoFinanceiro}
            onChange={(value) => handleAnswerChange("objetivoFinanceiro", value)}
          />
        );
      case 3:
        return (
          <QuizQuestion
            title="Qual sua principal fonte de renda?"
            options={[
              "Emprego formal (CLT)",
              "Trabalho autônomo",
              "Empresário",
              "Investimentos",
              "Múltiplas fontes"
            ]}
            value={answers.fonteRenda}
            onChange={(value) => handleAnswerChange("fonteRenda", value)}
          />
        );
      case 4:
        return (
          <QuizQuestion
            title="Quais apps financeiros você mais usa?"
            options={[
              "Apenas banco tradicional",
              "Wise/Remessa Online",
              "Robinhood/TD Ameritrade",
              "Cash App/Venmo",
              "Vários apps diferentes"
            ]}
            value={answers.appsFinanceiros}
            onChange={(value) => handleAnswerChange("appsFinanceiros", value)}
          />
        );
      case 5:
        return (
          <QuizQuestion
            title="Qual sua maior dificuldade financeira nos EUA?"
            options={[
              "Entender o sistema de crédito",
              "Fazer investimentos",
              "Declarar impostos",
              "Enviar dinheiro internacional",
              "Organizar o orçamento"
            ]}
            value={answers.dificuldades}
            onChange={(value) => handleAnswerChange("dificuldades", value)}
          />
        );
      case 6:
        return (
          <UserDataForm
            userData={userData}
            onDataChange={handleUserDataChange}
          />
        );
      default:
        return null;
    }
  };

  const isLastStep = currentStep === totalSteps - 1;
  const canProceed = currentStep !== 6 || (userData.nome && userData.email && userData.telefone);

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 pt-24 pb-16">
        {currentStep > 0 && !isLoading && !showResults && (
          <div className="max-w-2xl mx-auto mb-8">
            <Progress 
              value={(currentStep / (totalSteps - 1)) * 100} 
              className="animate-fadeIn"
            />
          </div>
        )}
        <div className="animate-fadeIn">
          {renderStep()}
          {currentStep > 0 && !isLoading && !showResults && !isLastStep && (
            <div className="flex justify-center gap-4 mt-12">
              <Button
                variant="secondary"
                onClick={handleBack}
                className="animate-fadeIn text-white"
              >
                <ArrowLeft className="mr-2" />
                Voltar
              </Button>
              {currentStep === 6 ? (
                <Button
                  onClick={handleUserDataSubmit}
                  disabled={!userData.nome || !userData.email || !userData.telefone}
                  className="animate-fadeIn"
                >
                  Ver Resultados
                  <ArrowRight className="ml-2" />
                </Button>
              ) : (
                <Button
                  onClick={handleNext}
                  disabled={!canProceed}
                  className="animate-fadeIn"
                >
                  Próxima
                  <ArrowRight className="ml-2" />
                </Button>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default Quiz1;
