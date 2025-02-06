
import { BadgeIcon } from "lucide-react";

const SponsorsSection = () => {
  const sponsors = [
    { name: "Empresa 1", logo: "/lovable-uploads/a83934bc-d45b-47a7-ad8b-352d600d0927.png" },
    { name: "Empresa 2", logo: "/lovable-uploads/a83934bc-d45b-47a7-ad8b-352d600d0927.png" },
    { name: "Empresa 3", logo: "/lovable-uploads/a83934bc-d45b-47a7-ad8b-352d600d0927.png" },
    { name: "Empresa 4", logo: "/lovable-uploads/a83934bc-d45b-47a7-ad8b-352d600d0927.png" }
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
              <div className="bg-white p-4 rounded-lg mb-4">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-full h-20 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
