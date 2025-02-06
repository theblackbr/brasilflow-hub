
import { Button } from "@/components/ui/button";
import { ProfileResult, UserData } from "@/types/quiz";
import { motion } from "framer-motion";
import { BadgeCheck, ArrowRight, CheckCircle } from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface QuizResultsProps {
  profile: ProfileResult;
  userData: UserData;
}

export const QuizResults = ({ profile, userData }: QuizResultsProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-8 max-w-2xl mx-auto w-full px-4"
  >
    <div className="text-center space-y-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className="inline-block bg-primary/10 p-4 rounded-full mb-4"
      >
        <BadgeCheck className="w-12 h-12 text-primary" />
      </motion.div>
      <h2 className="text-4xl font-bold text-gray-800">
        {userData.nome}, aqui está sua análise personalizada!
      </h2>
      <p className="text-xl text-gray-600">{profile.description}</p>
    </div>
    
    <motion.div 
      className="space-y-6 bg-gradient-to-br from-primary/5 to-primary/10 p-8 rounded-xl border border-primary/20"
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2
          }
        }
      }}
      initial="hidden"
      animate="show"
    >
      <div className="flex items-center gap-6 mb-6">
        <img 
          src="/lovable-uploads/a83934bc-d45b-47a7-ad8b-352d600d0927.png"
          alt="MonkeyMoney Logo"
          className="h-12"
        />
        <Avatar className="w-16 h-16">
          <AvatarImage 
            src="/lovable-uploads/b0f01726-d9cf-4b1f-8311-6b57c6ca5547.png"
            alt="MonkeyMoney Mascot"
          />
          <AvatarFallback>MM</AvatarFallback>
        </Avatar>
      </div>
      
      <h3 className="text-2xl font-bold text-gray-800">
        Comece agora sua jornada financeira nos EUA!
      </h3>
      
      <Button className="w-full md:w-auto group text-lg" size="lg">
        Criar minha conta MonkeyMoney
        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </Button>
    </motion.div>

    <motion.div 
      className="space-y-6"
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2
          }
        }
      }}
      initial="hidden"
      animate="show"
    >
      <h3 className="text-2xl font-semibold text-gray-800 mb-4">
        {userData.nome}, veja suas recomendações personalizadas:
      </h3>
      <ul className="space-y-4">
        {profile.recommendations.map((rec, index) => (
          <motion.li 
            key={index}
            variants={{
              hidden: { opacity: 0, x: -20 },
              show: { opacity: 1, x: 0 }
            }}
            className="flex items-start gap-3 bg-gray-50 p-6 rounded-xl border border-gray-100"
          >
            <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
            <span className="text-lg text-gray-700">{rec}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>

    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
      className="space-y-4"
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-4">
        Benefícios exclusivos da sua conta digital:
      </h3>
      <ul className="space-y-4">
        {[
          'Conta sem taxas mensais',
          'Transferências internacionais com as melhores taxas',
          'Cartão de débito aceito em todo os EUA',
          'Suporte em português 24/7'
        ].map((benefit, index) => (
          <motion.li 
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 + (index * 0.1) }}
            className="flex items-center gap-3 text-gray-700"
          >
            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
            {benefit}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  </motion.div>
);
