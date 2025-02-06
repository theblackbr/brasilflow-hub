
import { motion } from "framer-motion";

interface LoadingScreenProps {
  message: string;
}

export const LoadingScreen = ({ message }: LoadingScreenProps) => (
  <div className="space-y-8 animate-fadeIn max-w-2xl mx-auto w-full px-4 text-center">
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center min-h-[400px] space-y-8"
    >
      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      <h2 className="text-2xl font-bold text-gray-800 animate-pulse">
        {message}
      </h2>
    </motion.div>
  </div>
);
