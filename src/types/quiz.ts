
export interface QuizAnswer {
  tempoEUA: string;
  objetivoFinanceiro: string;
  fonteRenda: string;
  appsFinanceiros: string;
  dificuldades: string;
}

export interface UserData {
  nome: string;
  email: string;
  telefone: string;
  codigoPais: string;
}

export interface ProfileResult {
  title: string;
  description: string;
  recommendations: string[];
}
