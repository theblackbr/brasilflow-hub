
import { BadgeIcon } from "lucide-react";

const SponsorsSection = () => {
  const sponsors = [
    { name: "Empresa 1", logo: "/placeholder.svg" },
    { name: "Empresa 2", logo: "/placeholder.svg" },
    { name: "Empresa 3", logo: "/placeholder.svg" },
    { name: "Empresa 4", logo: "/placeholder.svg" }
  ];

  return (
    <section className="py-16 bg-[#222222]">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-8">
          <BadgeIcon className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold text-white">Mantenedores</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="bg-[#2A2A2A] p-6 rounded-lg border border-gray-800 hover:border-primary transition-all duration-300"
            >
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="w-full h-20 object-contain opacity-75 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
