import { useEffect, useState } from "react";
import { Moon, Sparkles, X } from "lucide-react";

interface CloudPopupProps {
  message: string;
  onClose: () => void;
}

const CloudPopup = ({ message, onClose }: CloudPopupProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 400);
  };

  const extractLinksAndText = () => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const links = message.match(urlRegex) || [];
    const textWithoutLinks = message.replace(urlRegex, '').trim();
    return { links, text: textWithoutLinks };
  };

  const { links, text } = extractLinksAndText();

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/20 backdrop-blur-sm"
    >
      <div 
        className={`
          relative max-w-sm mx-auto bg-[hsl(var(--cloud-bg))] rounded-[2rem] p-6 
          shadow-[0_2px_12px_rgba(0,0,0,0.2)] animate-float
          transition-all duration-400
          ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
        `}
      >
        {/* Close button */}
        <button
          onClick={handleClose}
          className="absolute top-3 right-3 w-8 h-8 flex items-center justify-center rounded-full bg-[hsl(var(--cloud-text))]/10 hover:bg-[hsl(var(--cloud-text))]/20 transition-colors"
          aria-label="Fechar"
        >
          <X className="w-4 h-4 text-[hsl(var(--cloud-text))]" />
        </button>

        {/* Icon decoration */}
        <div className="flex justify-center mb-3">
          {Math.random() > 0.5 ? (
            <Moon className="w-6 h-6 text-primary" />
          ) : (
            <Sparkles className="w-6 h-6 text-primary" />
          )}
        </div>
        
        {/* Message */}
        <p className="text-[hsl(var(--cloud-text))] text-base leading-relaxed text-center mb-4">
          {text}
        </p>

        {/* CTA Links */}
        {links.length > 0 && (
          <div className="flex flex-col gap-2 mt-4">
            {links.map((link, index) => (
              <a
                key={index}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-4 py-2 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors text-sm font-medium"
              >
                Ver mais →
              </a>
            ))}
          </div>
        )}

        {/* Cloud tail (optional decorative element) */}
        <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-[hsl(var(--cloud-bg))] rounded-full opacity-70" />
        <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-6 h-6 bg-[hsl(var(--cloud-bg))] rounded-full opacity-40" />
      </div>
    </div>
  );
};

export default CloudPopup;
