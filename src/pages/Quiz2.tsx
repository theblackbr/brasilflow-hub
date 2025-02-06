import { useState, useEffect } from "react";
import { Progress } from "@/components/ui/progress";
import { QuizQuestion } from "@/components/quiz/QuizQuestion";
import { UserDataForm } from "@/components/quiz/UserDataForm";
import { QuizResults } from "@/components/quiz/QuizResults";
import { WelcomeScreen } from "@/components/quiz/WelcomeScreen";
import { LoadingScreen } from "@/components/quiz/LoadingScreen";
import { NavigationButtons } from "@/components/quiz/NavigationButtons";
import { QuizAnswer, UserData } from "@/types/quiz";
import { calculateProfile } from "@/utils/profileCalculator";

const Quiz2 = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 6;
  const [answers, setAnswers] = useState<QuizAnswer>({
    tempoEUA: "",
    objetivoFinanceiro: "",
    fonteRenda: "",
    appsFinanceiros: "",
    dificuldades: "", // Added missing property
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
    
    if (currentStep > 0 && currentStep <= 4) {
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

  const renderStep = () => {
    if (isLoading) {
      return <LoadingScreen message={loadingMessage} />;
    }

    if (showResults) {
      return <QuizResults profile={calculateProfile(answers)} userData={userData} />;
    }

    switch (currentStep) {
      case 0:
        return <WelcomeScreen onNext={handleNext} />;
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
            title="Qual serviço financeiro mais interessa você?"
            options={[
              "Cashback em compras",
              "Remessa internacional",
              "Transferências gratuitas nos EUA",
              "Cartão de crédito/débito"
            ]}
            value={answers.objetivoFinanceiro}
            onChange={(value) => handleAnswerChange("objetivoFinanceiro", value)}
          />
        );
      case 3:
        return (
          <QuizQuestion
            title="Você tem empresa nos EUA?"
            options={[
              "Sim, tenho uma LLC",
              "Sim, tenho outra estrutura",
              "Não, mas pretendo abrir",
              "Não tenho interesse"
            ]}
            value={answers.fonteRenda}
            onChange={(value) => handleAnswerChange("fonteRenda", value)}
          />
        );
      case 4:
        return (
          <QuizQuestion
            title="Qual diferencial é mais importante para você?"
            options={[
              "Atendimento em português 24/7",
              "Abertura de conta simplificada",
              "Tudo em um só aplicativo",
              "Taxas competitivas"
            ]}
            value={answers.appsFinanceiros}
            onChange={(value) => handleAnswerChange("appsFinanceiros", value)}
          />
        );
      case 5:
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
  const canProceed = currentStep !== 5 || Boolean(userData.nome && userData.email && userData.telefone);
  const isDataComplete = Boolean(userData.nome && userData.email && userData.telefone);

  return (
    <div className="min-h-screen bg-white">
      <main className="container mx-auto px-4 pt-24 pb-16">
        {currentStep > 0 && !isLoading && !showResults && (
          <div className="max-w-2xl mx-auto mb-8">
            <Progress 
              value={((currentStep - 1) / (totalSteps - 2)) * 100} 
              className="animate-fadeIn"
            />
          </div>
        )}
        <div className="animate-fadeIn">
          {renderStep()}
          {currentStep > 0 && !isLoading && !showResults && (
            <NavigationButtons
              onBack={handleBack}
              onNext={handleNext}
              onSubmit={handleUserDataSubmit}
              isLastStep={isLastStep}
              canProceed={canProceed}
              isDataComplete={isDataComplete}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default Quiz2;
