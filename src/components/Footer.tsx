
import { MapPin, Mail, Phone } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#222222] text-gray-300 py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Brasil na América</h3>
            <p className="text-sm leading-relaxed">
              Sua solução completa para transferências internacionais. 
              Conectando o Brasil aos Estados Unidos com segurança e praticidade.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-primary" />
                <span>contato@brasilnaamerica.com</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-primary" />
                <span>+1 (215) 555-0123</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" />
                <span>1500 Market Street, Philadelphia, PA 19102</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4 text-white">Links Úteis</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Sobre Nós
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Como Funciona
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Taxas e Tarifas
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Central de Ajuda
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Brasil na América. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
