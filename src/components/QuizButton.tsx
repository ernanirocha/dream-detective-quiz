import { ButtonHTMLAttributes, ReactNode } from "react";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

interface QuizButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "option";
  gtmId?: number;
}

const QuizButton = ({ children, variant = "option", gtmId, className = "", ...props }: QuizButtonProps) => {
  const gtmClass = gtmId ? `gtm-id-${String(gtmId).padStart(2, '0')}` : "gtm-id-button";
  const baseStyles = `${gtmClass} w-full min-h-[56px] rounded-2xl font-medium transition-all duration-200 relative overflow-hidden`;
  
  const variantStyles = {
    primary: "bg-primary text-primary-foreground hover:brightness-110 active:scale-[0.98] text-lg shadow-[0_8px_32px_rgba(107,115,255,0.3)]",
    option: "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:border-primary border-2 border-transparent active:scale-[0.98] text-left px-6 py-4"
  };

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    // Send gtm-id to dataLayer
    if (gtmId && window.dataLayer) {
      window.dataLayer.push({
        event: 'button_click_id',
        button_id: gtmId
      });
    }
    
    // Call original onClick if exists
    if (props.onClick) {
      props.onClick(e);
    }
  };

  return (
    <button 
      type="button"
      role="button"
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
      onClick={handleClick}
    >
      <span className="pointer-events-none">
        {children}
      </span>
    </button>
  );
};

export default QuizButton;
