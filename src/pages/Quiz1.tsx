import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface QuizAnswer {
  tempoEUA: string;
  objetivoFinanceiro: string;
  fonteRenda: string;
  appsFinanceiros: string;
  dificuldades: string;
}

interface UserData {
  nome: string;
  email: string;
  telefone: string;
  codigoPais: string;
}

interface ProfileResult {
  title: string;
  description: string;
  recommendations: string[];
}

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
    
    // Auto-advance for single choice questions
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

  const renderQuestion = (
    title: string,
    options: string[],
    questionKey: keyof QuizAnswer
  ) => (
    <div className="space-y-6 max-w-2xl mx-auto w-full px-4">
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

  const renderLoadingState = () => (
    <div className="space-y-8 animate-fadeIn max-w-2xl mx-auto w-full px-4 text-center">
      <div className="flex flex-col items-center justify-center min-h-[400px] space-y-8">
        <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        <h2 className="text-2xl font-bold text-white animate-pulse">
          {loadingMessage}
        </h2>
      </div>
    </div>
  );

  const renderResults = () => {
    const profile = calculateProfile(answers);
    return (
      <div className="space-y-8 animate-fadeIn max-w-2xl mx-auto w-full px-4">
        <h2 className="text-4xl font-bold text-white mb-4">{profile.title}</h2>
        <p className="text-xl text-gray-300 mb-8">{profile.description}</p>
        
        <div className="space-y-6">
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

        <div className="mt-12 bg-primary/10 p-6 rounded-lg border border-primary/20">
          <h3 className="text-2xl font-bold text-primary mb-4">
            Conheça a MonkeyMoney
          </h3>
          <p className="text-gray-300 mb-6">
            A conta digital perfeita para brasileiros nos EUA. Simplifique sua vida financeira e aproveite benefícios exclusivos:
          </p>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center gap-2 text-gray-200">
              ✓ Conta sem taxas mensais
            </li>
            <li className="flex items-center gap-2 text-gray-200">
              ✓ Transferências internacionais com as melhores taxas
            </li>
            <li className="flex items-center gap-2 text-gray-200">
              ✓ Cartão de débito aceito em todo os EUA
            </li>
            <li className="flex items-center gap-2 text-gray-200">
              ✓ Suporte em português 24/7
            </li>
          </ul>
          <Button className="w-full md:w-auto" size="lg">
            Criar minha conta MonkeyMoney
          </Button>
        </div>
      </div>
    );
  };

  const renderUserDataForm = () => (
    <div className="space-y-8 animate-fadeIn max-w-2xl mx-auto w-full px-4">
      <h2 className="text-3xl font-bold text-white mb-8">
        Receba suas recomendações por email
      </h2>
      <div className="space-y-6 max-w-md mx-auto">
        <div className="space-y-2">
          <Label htmlFor="nome" className="text-white">Nome</Label>
          <Input
            id="nome"
            value={userData.nome}
            onChange={(e) => handleUserDataChange("nome", e.target.value)}
            placeholder="Seu nome completo"
            className="bg-secondary/50 text-white placeholder:text-gray-400"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email" className="text-white">Email</Label>
          <Input
            id="email"
            type="email"
            value={userData.email}
            onChange={(e) => handleUserDataChange("email", e.target.value)}
            placeholder="seu@email.com"
            className="bg-secondary/50 text-white placeholder:text-gray-400"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="telefone" className="text-white">Telefone</Label>
          <div className="flex gap-2">
            <Select
              value={userData.codigoPais}
              onValueChange={(value) => handleUserDataChange("codigoPais", value)}
            >
              <SelectTrigger className="w-[100px] bg-secondary/50 text-white">
                <SelectValue placeholder="País" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200">
                <SelectItem value="+1" className="text-gray-900 hover:bg-gray-100">🇺🇸 +1</SelectItem>
                <SelectItem value="+55" className="text-gray-900 hover:bg-gray-100">🇧🇷 +55</SelectItem>
                <SelectItem value="+44" className="text-gray-900 hover:bg-gray-100">🇬🇧 +44</SelectItem>
                <SelectItem value="+351" className="text-gray-900 hover:bg-gray-100">🇵🇹 +351</SelectItem>
                <SelectItem value="+34" className="text-gray-900 hover:bg-gray-100">🇪🇸 +34</SelectItem>
              </SelectContent>
            </Select>
            <Input
              id="telefone"
              type="tel"
              value={userData.telefone}
              onChange={(e) => handleUserDataChange("telefone", e.target.value)}
              placeholder="(555) 123-4567"
              className="flex-1 bg-secondary/50 text-white placeholder:text-gray-400"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderStep = () => {
    if (isLoading) {
      return renderLoadingState();
    }

    if (showResults) {
      return renderResults();
    }

    switch (currentStep) {
      case 0:
        return (
          <div className="max-w-2xl mx-auto w-full px-4 text-center animate-fadeIn">
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
        return renderUserDataForm();
      default:
        return null;
    }
  };

  const isLastStep = currentStep === totalSteps - 1;
  const canProceed = currentStep !== 6 || (userData.nome && userData.email && userData.telefone);

  return (
    <div className="min-h-screen bg-[#171717]">
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
                className="animate-fadeIn"
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
