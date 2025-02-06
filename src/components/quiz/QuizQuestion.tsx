
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

interface QuizQuestionProps {
  title: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

export const QuizQuestion = ({ title, options, value, onChange }: QuizQuestionProps) => (
  <div className="space-y-6 max-w-2xl mx-auto w-full px-4">
    <h2 className="text-3xl font-bold text-gray-800 mb-8">{title}</h2>
    <RadioGroup
      value={value}
      onValueChange={onChange}
      className="flex flex-col space-y-4"
    >
      {options.map((option) => (
        <label
          key={option}
          className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors"
        >
          <RadioGroupItem value={option} id={option} className="text-primary" />
          <span className="text-gray-700 text-lg">{option}</span>
        </label>
      ))}
    </RadioGroup>
  </div>
);
