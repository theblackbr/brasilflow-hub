
import { useState, useEffect } from "react";
import { DollarSignIcon } from "lucide-react";

const ExchangeRateSection = () => {
  const [rate, setRate] = useState<number | null>(null);
  const [lastUpdate, setLastUpdate] = useState<string>("");

  useEffect(() => {
    // Simulating real-time exchange rate updates
    const mockRate = 4.95 + (Math.random() * 0.1);
    setRate(mockRate);
    setLastUpdate(new Date().toLocaleTimeString());

    const interval = setInterval(() => {
      const newRate = 4.95 + (Math.random() * 0.1);
      setRate(newRate);
      setLastUpdate(new Date().toLocaleTimeString());
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-lg border border-gray-800 rounded-lg p-4 shadow-lg z-40">
      <div className="flex items-center gap-2 mb-2">
        <DollarSignIcon className="w-4 h-4 text-primary" />
        <span className="text-white font-medium">Dólar Hoje</span>
      </div>
      {rate && (
        <div className="text-2xl font-bold text-primary">
          R$ {rate.toFixed(2)}
        </div>
      )}
      <div className="text-xs text-gray-400 mt-1">
        Atualizado: {lastUpdate}
      </div>
    </div>
  );
};

export default ExchangeRateSection;
