
import { useState, useEffect } from "react";
import { DollarSignIcon, AlertCircle } from "lucide-react";
import { formatDistanceToNow } from "date-fns";
import { ptBR } from "date-fns/locale";

interface CachedData {
  rate: number;
  timestamp: number;
}

const CACHE_KEY = 'exchange_rate_cache';
const UPDATE_INTERVAL = 6 * 60 * 60 * 1000; // 6 hours in milliseconds

const ExchangeRateSection = () => {
  const [rate, setRate] = useState<number | null>(null);
  const [lastUpdate, setLastUpdate] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const getCachedData = (): CachedData | null => {
    const cached = localStorage.getItem(CACHE_KEY);
    return cached ? JSON.parse(cached) : null;
  };

  const setCachedData = (rate: number) => {
    const data: CachedData = {
      rate,
      timestamp: Date.now(),
    };
    localStorage.setItem(CACHE_KEY, JSON.stringify(data));
  };

  const shouldUpdate = (): boolean => {
    const cached = getCachedData();
    if (!cached) return true;
    
    const now = Date.now();
    return now - cached.timestamp >= UPDATE_INTERVAL;
  };

  const formatTimeAgo = (timestamp: number): string => {
    return formatDistanceToNow(timestamp, { addSuffix: true, locale: ptBR });
  };

  const fetchExchangeRate = async () => {
    if (!shouldUpdate()) {
      const cached = getCachedData();
      if (cached) {
        setRate(cached.rate);
        setLastUpdate(formatTimeAgo(cached.timestamp));
        return;
      }
    }

    try {
      setLoading(true);
      setError(null);
      
      const response = await fetch('https://api.exchangerate-api.com/v4/latest/USD');
      if (!response.ok) {
        throw new Error('Falha ao buscar taxa de câmbio');
      }
      
      const data = await response.json();
      setRate(data.rates.BRL);
      const now = Date.now();
      setLastUpdate(formatTimeAgo(now));
      setCachedData(data.rates.BRL);
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
    }, UPDATE_INTERVAL);

    // Atualiza o tempo relativo a cada minuto
    const timeAgoInterval = setInterval(() => {
      const cached = getCachedData();
      if (cached) {
        setLastUpdate(formatTimeAgo(cached.timestamp));
      }
    }, 60000);

    return () => {
      clearInterval(interval);
      clearInterval(timeAgoInterval);
    };
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
          Atualizado {lastUpdate}
        </div>
      )}
    </div>
  );
};

export default ExchangeRateSection;
