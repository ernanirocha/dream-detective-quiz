import { Moon, Stars } from "lucide-react";
import QuizButton from "./QuizButton";

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen = ({ onStart }: StartScreenProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--night-gradient-start))] to-[hsl(var(--night-gradient-end))] flex flex-col items-center justify-center p-6 relative overflow-hidden">
      {/* Animated stars background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          >
            <Stars className="w-3 h-3 text-[hsl(var(--star-glow))]" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-md w-full animate-fade-in">
        {/* Moon icon with glow */}
        <div className="flex justify-center mb-8 animate-float">
          <div className="relative">
            <Moon className="w-20 h-20 text-[hsl(var(--moon-glow))] drop-shadow-[0_0_20px_rgba(255,240,150,0.6)]" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-[22px] font-bold text-foreground text-center mb-4 leading-tight">
          Sua mente não desliga à noite?
        </h1>

        {/* Ad Inserter Block */}
        <div className="text-center mb-4" dangerouslySetInnerHTML={{ __html: '[adinserter block="15"]' }} />

        {/* Subtitle */}
        <p className="text-[16px] text-muted-foreground text-center mb-12 leading-relaxed">
          Descubra o que está sabotando seu sono — e a <span className="text-primary font-semibold">solução natural</span> que combina com você.
        </p>

        {/* CTA Button */}
        <QuizButton variant="primary" onClick={onStart}>
          Começar
        </QuizButton>
      </div>
    </div>
  );
};

export default StartScreen;
