import { ButtonHTMLAttributes, ReactNode } from "react";

interface QuizButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "option";
}

const QuizButton = ({ children, variant = "option", className = "", ...props }: QuizButtonProps) => {
  const baseStyles = "gtm-id-button w-full min-h-[56px] rounded-2xl font-medium transition-all duration-200 relative overflow-hidden";
  
  const variantStyles = {
    primary: "bg-primary text-primary-foreground hover:brightness-110 active:scale-[0.98] text-lg shadow-[0_8px_32px_rgba(107,115,255,0.3)]",
    option: "bg-secondary text-secondary-foreground hover:bg-secondary/80 hover:border-primary border-2 border-transparent active:scale-[0.98] text-left px-6 py-4"
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default QuizButton;
