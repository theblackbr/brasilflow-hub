
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface QuizQuestionProps {
  title: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export const QuizQuestion = ({ title, options, value, onChange }: QuizQuestionProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="space-y-6 max-w-2xl mx-auto w-full px-4"
  >
    <h2 className="text-3xl font-bold text-gray-800 mb-8 leading-tight">
      {title}
    </h2>
    <RadioGroup
      value={value}
      onValueChange={onChange}
      className="flex flex-col space-y-4"
    >
      {options.map((option) => (
        <motion.label
          key={option}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className={`flex items-center space-x-3 p-6 rounded-xl cursor-pointer transition-all duration-200 ${
            value === option 
              ? 'bg-primary/10 border-2 border-primary shadow-lg' 
              : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
          }`}
        >
          <RadioGroupItem value={option} id={option} className="text-primary" />
          <span className="text-gray-700 text-lg flex-1">{option}</span>
          {value === option && (
            <CheckCircle2 className="w-5 h-5 text-primary" />
          )}
        </motion.label>
      ))}
    </RadioGroup>
  </motion.div>
);
