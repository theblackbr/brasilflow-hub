
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Inscrição realizada!",
      description: "Você receberá nossas atualizações no email fornecido.",
    });
    setEmail("");
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">
            Fique por dentro das novidades
          </h2>
          <p className="mb-8 text-gray-600">
            Receba as últimas notícias e atualizações diretamente no seu email
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Seu melhor email"
              className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-primary"
              required
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary hover:bg-primary/90 text-gray-900 font-medium rounded-lg transition-colors"
            >
              Inscrever
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
