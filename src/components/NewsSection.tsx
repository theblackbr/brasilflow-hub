
import { RssIcon } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const NewsSection = () => {
  const recentPosts = [
    {
      title: "Como abrir sua empresa nos EUA: Guia Completo 2024",
      date: "Mar 15, 2024",
      category: "Empreendedorismo"
    },
    {
      title: "Melhores universidades para brasileiros nos EUA",
      date: "Mar 14, 2024",
      category: "Educação"
    },
    {
      title: "Investindo na bolsa americana: Por onde começar",
      date: "Mar 13, 2024",
      category: "Finanças"
    }
  ];

  return (
    <section className="py-16 bg-[#1A1F2C]">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 mb-8">
          <RssIcon className="w-6 h-6 text-primary" />
          <h2 className="text-3xl font-bold text-white">Novidades</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {recentPosts.map((post, index) => (
            <Card key={index} className="bg-[#222222]/50 border-gray-800 hover:border-primary transition-colors">
              <CardContent className="p-6">
                <span className="text-sm text-primary mb-2 block">{post.category}</span>
                <h3 className="text-xl font-semibold text-white mb-2">{post.title}</h3>
                <span className="text-sm text-gray-400">{post.date}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
