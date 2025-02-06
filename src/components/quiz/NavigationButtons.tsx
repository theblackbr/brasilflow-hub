
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface NavigationButtonsProps {
  onBack: () => void;
  onNext: () => void;
  onSubmit?: () => void;
  isLastStep?: boolean;
  canProceed: boolean;
  isDataComplete?: boolean;
}

export const NavigationButtons = ({ 
  onBack, 
  onNext, 
  onSubmit, 
  isLastStep, 
  canProceed,
  isDataComplete 
}: NavigationButtonsProps) => (
  <div className="flex justify-center gap-4 mt-12">
    <Button
      variant="secondary"
      onClick={onBack}
      className="animate-fadeIn text-white"
    >
      <ArrowLeft className="mr-2" />
      Voltar
    </Button>
    {isLastStep ? (
      <Button
        onClick={onSubmit}
        disabled={!isDataComplete}
        className="animate-fadeIn"
      >
        Ver Resultados
        <ArrowRight className="ml-2" />
      </Button>
    ) : (
      <Button
        onClick={onNext}
        disabled={!canProceed}
        className="animate-fadeIn"
      >
        Próxima
        <ArrowRight className="ml-2" />
      </Button>
    )}
  </div>
);
