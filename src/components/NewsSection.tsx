
import { RssIcon, ArrowRight } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const NewsSection = () => {
  const recentPosts = [
    {
      title: "Como abrir sua empresa nos EUA: Guia Completo 2024",
      date: "Mar 15, 2024",
      category: "Empreendedorismo",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
      slug: "como-abrir-empresa-eua-2024"
    },
    {
      title: "Melhores universidades para brasileiros nos EUA",
      date: "Mar 14, 2024",
      category: "Educação",
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=1200&auto=format&fit=crop",
      slug: "melhores-universidades-brasileiros-eua"
    },
    {
      title: "Investindo na bolsa americana: Por onde começar",
      date: "Mar 13, 2024",
      category: "Finanças",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=1200&auto=format&fit=crop",
      slug: "investindo-bolsa-americana-inicio"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-[#FEF7CD] to-[#FFE29F]">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-8">
          <RssIcon className="w-6 h-6 text-[#F97316]" />
          <h2 className="text-3xl font-bold text-[#222222]">Novidades</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {recentPosts.map((post, index) => (
            <Card 
              key={index} 
              className="bg-white/90 backdrop-blur-sm border-transparent hover:border-[#F97316] transition-all duration-300 overflow-hidden group"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6">
                <span className="inline-block px-3 py-1 rounded-full text-sm font-medium bg-[#FEF7CD] text-[#F97316] mb-3">
                  {post.category}
                </span>
                <h3 className="text-xl font-semibold text-[#222222] mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <span className="text-sm text-gray-600 block mb-4">{post.date}</span>
                <Button 
                  variant="ghost" 
                  className="group/btn text-[#F97316] hover:text-[#F97316] hover:bg-[#FEF7CD]"
                >
                  Ler mais
                  <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
