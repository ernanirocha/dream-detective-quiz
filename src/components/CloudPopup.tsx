import { useEffect, useState } from "react";
import { Moon, Sparkles } from "lucide-react";

interface CloudPopupProps {
  message: string;
  onClose: () => void;
  autoCloseDuration?: number;
}

const CloudPopup = ({ message, onClose, autoCloseDuration = 3000 }: CloudPopupProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 400);
    }, autoCloseDuration);

    return () => clearTimeout(timer);
  }, [autoCloseDuration, onClose]);

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm"
      onClick={() => {
        setIsVisible(false);
        setTimeout(onClose, 400);
      }}
    >
      <div 
        className={`
          relative max-w-sm mx-auto bg-[hsl(var(--cloud-bg))] rounded-[2rem] p-6 
          shadow-[0_2px_12px_rgba(0,0,0,0.2)] animate-float
          transition-all duration-400
          ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
        `}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Icon decoration */}
        <div className="flex justify-center mb-3">
          {Math.random() > 0.5 ? (
            <Moon className="w-6 h-6 text-primary" />
          ) : (
            <Sparkles className="w-6 h-6 text-primary" />
          )}
        </div>
        
        {/* Message */}
        <p className="text-[hsl(var(--cloud-text))] text-base leading-relaxed text-center">
          {message}
        </p>

        {/* Cloud tail (optional decorative element) */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-[hsl(var(--cloud-bg))] rounded-full opacity-70" />
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-6 h-6 bg-[hsl(var(--cloud-bg))] rounded-full opacity-40" />
      </div>
    </div>
  );
};

export default CloudPopup;
