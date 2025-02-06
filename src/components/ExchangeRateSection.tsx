
import { useState, useEffect } from "react";
import { DollarSignIcon, AlertCircle } from "lucide-react";

const ExchangeRateSection = () => {
  const [rate, setRate] = useState<number | null>(null);
  const [lastUpdate, setLastUpdate] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const fetchExchangeRate = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('https://v6.exchangerate-api.com/v6/YOUR_API_KEY/pair/USD/BRL');
      if (!response.ok) {
        throw new Error('Falha ao buscar taxa de câmbio');
      }
      
      const data = await response.json();
      setRate(data.conversion_rate);
      setLastUpdate(new Date().toLocaleTimeString());
    } catch (err) {
      setError("Erro ao atualizar cotação");
      console.error("Exchange rate fetch error:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchExchangeRate();
    
    const interval = setInterval(() => {
      fetchExchangeRate();
    }, 60000); // Atualiza a cada 1 minuto

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-black/80 backdrop-blur-lg border border-gray-800 rounded-lg p-4 shadow-lg z-40">
      <div className="flex items-center gap-2 mb-2">
        <DollarSignIcon className="w-4 h-4 text-primary" />
        <span className="text-white font-medium">Dólar Hoje</span>
      </div>
      
      {error ? (
        <div className="flex items-center gap-2 text-red-400">
          <AlertCircle className="w-4 h-4" />
          <span className="text-sm">{error}</span>
        </div>
      ) : loading && !rate ? (
        <div className="text-gray-400 text-sm">Carregando...</div>
      ) : rate ? (
        <div className="text-2xl font-bold text-primary animate-fade-in">
          R$ {rate.toFixed(2)}
        </div>
      ) : null}
      
      {lastUpdate && !error && (
        <div className="text-xs text-gray-400 mt-1">
          Atualizado: {lastUpdate}
        </div>
      )}
    </div>
  );
};

export default ExchangeRateSection;
