
import { useEffect, useState } from "react";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="pt-24 pb-12 px-4 bg-[#171717]">
      <div className="container mx-auto">
        <div className={`max-w-3xl mx-auto text-center transform ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
          <span className="inline-block px-4 py-1 mb-4 text-sm font-medium text-primary bg-primary/10 rounded-full">
            Bem-vindo ao BrasilFlow
          </span>
          <h1 className="mb-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            Sua conexão com a
            <span className="text-primary"> comunidade brasileira</span> nos EUA
          </h1>
          <p className="mb-8 text-lg text-gray-400">
            Informação, educação e networking para brasileiros que buscam sucesso nos Estados Unidos
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-3 text-lg font-medium text-gray-900 bg-primary hover:bg-primary/90 rounded-lg transition-colors">
              Comece Agora
            </button>
            <button className="px-8 py-3 text-lg font-medium text-white border border-gray-700 hover:border-primary rounded-lg transition-colors">
              Saiba Mais
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
