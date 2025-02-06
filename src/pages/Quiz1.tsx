
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

interface ProfileResult {
  title: string;
  description: string;
  recommendations: string[];
}

const Quiz1 = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const totalSteps = 7; // 5 perguntas + tela inicial + tela de resultado
  const [answers, setAnswers] = useState<QuizAnswer>({
    tempoEUA: "",
    objetivoFinanceiro: "",
    fonteRenda: "",
    appsFinanceiros: "",
    dificuldades: "",
  });

  const calculateProfile = (answers: QuizAnswer): ProfileResult => {
    // Iniciante nos EUA
    if (answers.tempoEUA === "Menos de 1 ano") {
      return {
        title: "Iniciante nos EUA",
        description: "Você está começando sua jornada financeira nos EUA. É importante focar em construir uma base sólida.",
        recommendations: [
          "Abra uma conta em um banco tradicional americano",
          "Comece a construir seu histórico de crédito",
          "Aprenda sobre o sistema tributário americano",
          "Mantenha um fundo de emergência"
        ]
      };
    }
    
    // Investidor em Crescimento
    if (answers.objetivoFinanceiro === "Investir em ações" || answers.appsFinanceiros === "Robinhood/TD Ameritrade") {
      return {
        title: "Investidor em Crescimento",
        description: "Você já tem uma base financeira e está pronto para fazer seu dinheiro trabalhar para você.",
        recommendations: [
          "Diversifique seus investimentos",
          "Considere abrir uma conta IRA",
          "Aprenda sobre diferentes tipos de investimentos",
          "Considere consultar um planejador financeiro"
        ]
      };
    }

    // Empreendedor
    if (answers.fonteRenda === "Empresário" || answers.objetivoFinanceiro === "Abrir um negócio") {
      return {
        title: "Empreendedor",
        description: "Você tem um perfil empreendedor e busca oportunidades de negócios nos EUA.",
        recommendations: [
          "Consulte um contador especializado em pequenas empresas",
          "Pesquise sobre diferentes estruturas empresariais (LLC, Corp, etc)",
          "Construa uma rede de contatos profissionais",
          "Mantenha registros financeiros organizados"
        ]
      };
    }

    // Perfil Conservador
    return {
      title: "Construtor de Patrimônio",
      description: "Você está focado em construir uma base financeira sólida e sustentável nos EUA.",
      recommendations: [
        "Mantenha um orçamento detalhado",
        "Estabeleça metas financeiras de curto e longo prazo",
        "Pesquise sobre diferentes tipos de seguros",
        "Planeje sua aposentadoria"
      ]
    };
  };

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

  const renderResults = () => {
    const profile = calculateProfile(answers);
    return (
      <div className="space-y-8 animate-fadeIn">
        <h2 className="text-4xl font-bold text-white mb-4">{profile.title}</h2>
        <p className="text-xl text-gray-300 mb-8">{profile.description}</p>
        <div className="space-y-4">
          <h3 className="text-2xl font-semibold text-white mb-4">Recomendações para você:</h3>
          <ul className="space-y-4">
            {profile.recommendations.map((rec, index) => (
              <li 
                key={index}
                className="flex items-start gap-3 bg-secondary/30 p-4 rounded-lg"
              >
                <span className="text-lg text-gray-200">{rec}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
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
      case 6:
        return renderResults();
      default:
        return null;
    }
  };

  const isLastStep = currentStep === totalSteps - 1;

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
          {currentStep > 0 && !isLastStep && (
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

