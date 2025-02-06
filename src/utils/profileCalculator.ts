
import { QuizAnswer, ProfileResult } from "@/types/quiz";

export const calculateProfile = (answers: QuizAnswer): ProfileResult => {
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
