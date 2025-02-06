
import { DollarSignIcon, GraduationCapIcon, BriefcaseIcon, User2Icon } from "lucide-react";

const FeaturedGrid = () => {
  return (
    <section className="py-16 px-4 bg-[#171717]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeaturedCard
            icon={<DollarSignIcon className="w-6 h-6" />}
            title="Finanças"
            description="Dicas e estratégias para gerenciar suas finanças nos EUA"
          />
          <FeaturedCard
            icon={<GraduationCapIcon className="w-6 h-6" />}
            title="Educação"
            description="Guias completos sobre o sistema educacional americano"
          />
          <FeaturedCard
            icon={<BriefcaseIcon className="w-6 h-6" />}
            title="Empreendedorismo"
            description="Como abrir e gerenciar seu negócio nos Estados Unidos"
          />
          <FeaturedCard
            icon={<User2Icon className="w-6 h-6" />}
            title="Imigração"
            description="Informações atualizadas sobre processos imigratórios"
          />
        </div>
      </div>
    </section>
  );
};

const FeaturedCard = ({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) => (
  <div className="group p-6 bg-secondary/50 backdrop-blur-lg border border-gray-800 rounded-xl hover:border-primary/50 transition-all duration-300">
    <div className="mb-4 p-3 w-fit rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-gray-900 transition-colors">
      {icon}
    </div>
    <h3 className="mb-2 text-xl font-semibold text-white group-hover:text-primary transition-colors">
      {title}
    </h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

export default FeaturedGrid;
