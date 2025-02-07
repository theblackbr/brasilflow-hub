
import { BriefcaseIcon, DollarSignIcon, GraduationCapIcon, User2Icon } from "lucide-react";
import { Link } from "react-router-dom";

const NavigationHeader = () => {
  return (
    <header className="fixed w-full bg-[#171717]/90 backdrop-blur-lg border-b border-gray-800 z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
            <img 
              src="/lovable-uploads/f3b6bf77-ca0d-497d-ad83-7d5ac8c06770.png" 
              alt="Brasil na América Logo" 
              className="h-16"
            />
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink to="/financas" icon={<DollarSignIcon className="w-4 h-4" />} text="Finanças" />
            <NavLink to="/educacao" icon={<GraduationCapIcon className="w-4 h-4" />} text="Educação" />
            <NavLink to="/empreendedorismo" icon={<BriefcaseIcon className="w-4 h-4" />} text="Empreendedorismo" />
            <NavLink to="/imigracao" icon={<User2Icon className="w-4 h-4" />} text="Imigração" />
          </div>

          <button className="md:hidden text-white hover:text-primary">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </div>
    </header>
  );
};

const NavLink = ({ to, icon, text }: { to: string; icon: React.ReactNode; text: string }) => (
  <Link
    to={to}
    className="flex items-center space-x-2 text-gray-300 hover:text-primary transition-colors"
  >
    {icon}
    <span>{text}</span>
  </Link>
);

export default NavigationHeader;
