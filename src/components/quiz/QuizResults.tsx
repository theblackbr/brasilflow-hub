
import { Button } from "@/components/ui/button";
import { ProfileResult } from "@/types/quiz";

interface QuizResultsProps {
  profile: ProfileResult;
}

export const QuizResults = ({ profile }: QuizResultsProps) => (
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
