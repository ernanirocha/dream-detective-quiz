import { Moon, Stars } from "lucide-react";
import QuizButton from "./QuizButton";
import AdSenseAd from "./AdSenseAd";

interface StartScreenProps {
  onStart: () => void;
}

const StartScreen = ({ onStart }: StartScreenProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--night-gradient-start))]/40 to-[hsl(var(--night-gradient-end))]/40 flex flex-col items-center justify-center p-6 relative overflow-hidden">
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
          Descubra em 60 segundos o que pode estar travando o seu sono
        </h1>

        {/* First paragraph */}
        <p className="text-[16px] text-muted-foreground text-center mb-4 leading-relaxed">
          Responda abaixo e veja qual plano simples pode ajudar a melhorar suas noites.
        </p>

        {/* Anúncio AdSense no Start */}
        <AdSenseAd
          client="ca-pub-1170863474773514"
          slot="8117047174"
          // adtest="on"  // habilite para testar layout sem monetizar
        />

        {/* Second paragraph */}
        <p className="text-[16px] text-muted-foreground text-center mb-12 leading-relaxed">
          Entenda seu nível de ansiedade noturna. Sem criar conta*
        </p>

        {/* CTA Button */}
        <QuizButton variant="primary" onClick={onStart}>
          Começar
        </QuizButton>

        {/* Privacy notice */}
        <p className="text-[14px] text-muted-foreground text-center mt-8 mb-6">
          🔒 Sua privacidade é nossa prioridade.{" "}
          <a 
            href="https://cleoloiolatp.com/politicas-de-privacidade/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-primary hover:underline"
          >
            Consulte nossa Política de Privacidade
          </a>
        </p>

        {/* FAQs */}
        <div className="w-full mt-8">
          <h2 className="text-[18px] font-semibold text-foreground text-center mb-6">
            Perguntas frequentes sobre sono e ansiedade
          </h2>
          
          <div className="space-y-3">
            <details className="group bg-card rounded-lg border border-border overflow-hidden">
              <summary className="cursor-pointer px-4 py-4 text-[15px] font-medium text-foreground hover:bg-secondary/50 transition-colors list-none flex justify-between items-center">
                <span>A ansiedade pode realmente afetar a qualidade do sono?</span>
                <span className="text-muted-foreground group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="px-4 py-3 text-[14px] text-muted-foreground border-t border-border">
                Sim. A ansiedade aumenta a atividade mental e dificulta o relaxamento, o que leva a despertares frequentes e dificuldade para adormecer.
              </div>
            </details>

            <details className="group bg-card rounded-lg border border-border overflow-hidden">
              <summary className="cursor-pointer px-4 py-4 text-[15px] font-medium text-foreground hover:bg-secondary/50 transition-colors list-none flex justify-between items-center">
                <span>Por que durmo a noite inteira mas ainda acordo cansado?</span>
                <span className="text-muted-foreground group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="px-4 py-3 text-[14px] text-muted-foreground border-t border-border">
                Isso pode acontecer por deficiências nutricionais, estresse, ou porque o sono profundo não está sendo atingido. É comum em quadros de má qualidade do sono.
              </div>
            </details>

            <details className="group bg-card rounded-lg border border-border overflow-hidden">
              <summary className="cursor-pointer px-4 py-4 text-[15px] font-medium text-foreground hover:bg-secondary/50 transition-colors list-none flex justify-between items-center">
                <span>Vitamina D3 e magnésio ajudam mesmo a dormir melhor?</span>
                <span className="text-muted-foreground group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="px-4 py-3 text-[14px] text-muted-foreground border-t border-border">
                Sim, eles estão ligados à produção de hormônios que regulam o sono e a energia. A falta desses nutrientes pode causar cansaço constante.
              </div>
            </details>

            <details className="group bg-card rounded-lg border border-border overflow-hidden">
              <summary className="cursor-pointer px-4 py-4 text-[15px] font-medium text-foreground hover:bg-secondary/50 transition-colors list-none flex justify-between items-center">
                <span>Quando devo procurar ajuda médica para insônia?</span>
                <span className="text-muted-foreground group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="px-4 py-3 text-[14px] text-muted-foreground border-t border-border">
                Se o problema persistir por mais de três semanas, ou causar prejuízos no trabalho, estudo ou vida social, é indicado buscar acompanhamento profissional.
              </div>
            </details>
          </div>

          {/* Disclaimer */}
          <p className="text-[13px] text-muted-foreground text-center mt-8 leading-relaxed">
            *Não pedimos email ou telefone para ver o resultado. Se quiser receber dicas e notificações relacionadas,{" "}
            <a 
              href="https://cleoloiolatp.com/inscricao" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              inscreva-se aqui
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default StartScreen;
