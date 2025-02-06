
import { QuizAnswer, ProfileResult } from "@/types/quiz";

export const calculateProfile = (answers: QuizAnswer): ProfileResult => {
  // Perfil Novo nos EUA
  if (answers.tempoEUA === "Menos de 1 ano") {
    return {
      title: "Perfil Iniciante nos EUA",
      description: "Você está começando sua jornada financeira nos EUA e precisa de uma solução completa e simplificada.",
      recommendations: [
        "Abertura de conta sem SSN",
        "Atendimento em português 24/7",
        "Cartão de débito sem anuidade",
        "App intuitivo em português"
      ]
    };
  }

  // Perfil Internacional
  if (answers.objetivoFinanceiro === "Enviar dinheiro para o Brasil") {
    return {
      title: "Perfil Internacional",
      description: "Você precisa de uma solução eficiente para movimentar dinheiro entre EUA e Brasil.",
      recommendations: [
        "Remessas internacionais com as melhores taxas",
        "Câmbio competitivo",
        "Transferências gratuitas nos EUA",
        "Conta multi-moeda"
      ]
    };
  }

  // Perfil Empreendedor
  if (answers.fonteRenda === "Empresário" || answers.fonteRenda === "Trabalho autônomo") {
    return {
      title: "Perfil Empreendedor",
      description: "Você precisa de uma solução bancária que atenda suas necessidades empresariais nos EUA.",
      recommendations: [
        "Conta PJ sem taxas mensais",
        "Integração com ferramentas de contabilidade",
        "Gestão financeira simplificada",
        "Suporte especializado para empresas"
      ]
    };
  }

  // Perfil Digital
  return {
    title: "Perfil Digital",
    description: "Você busca praticidade e eficiência em seus serviços financeiros.",
    recommendations: [
      "Tudo em um só aplicativo",
      "Cashback em compras",
      "Transferências instantâneas",
      "Gestão financeira inteligente"
    ]
  };
};
