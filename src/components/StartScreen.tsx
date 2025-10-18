import { Moon, Stars } from "lucide-react";
import { useEffect, useState } from "react";
import QuizButton from "./QuizButton";
import MidArticleAd from "./MidArticleAd";

const SocialProofBar = ({ onClick }: { onClick: () => void }) => {
  const [count, setCount] = useState(0);
  const target = 1859;

  useEffect(() => {
    const duration = 2000;
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(target * progress);
      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(target);
      }
    };

    requestAnimationFrame(animate);
  }, []);

  return (
    <div
      onClick={onClick}
      role="status"
      aria-live="polite"
      className="max-w-[920px] mx-auto my-1.5 mb-2.5 px-3 py-2.5 rounded-xl bg-sky-100 border border-sky-200 text-sky-900 flex gap-2.5 justify-center items-center text-sm cursor-pointer hover:bg-sky-50 transition-colors"
    >
      <span
        className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0"
        aria-hidden="true"
        style={{
          animation: "sleepPulse 1.8s infinite",
          boxShadow: "0 0 0 0 rgba(34, 197, 94, 0.6)",
        }}
      />
      <span>Atualizado hoje</span>
      <span className="opacity-50">•</span>
      <span>
        <strong className="font-extrabold">{count.toLocaleString("pt-BR")}</strong> pessoas fizeram a avaliação de sono
        esta semana
      </span>

      <style>{`
        @keyframes sleepPulse {
          70% { box-shadow: 0 0 0 10px rgba(34, 197, 94, 0); }
        }
      `}</style>
    </div>
  );
};

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
        {/* Title */}
        <h1 className="text-[22px] font-bold text-foreground text-center mb-4 leading-tight">
          Insônia e ansiedade te impedem de dormir? Entenda o motivo
        </h1>

        {/* Social Proof Bar */}
        <SocialProofBar onClick={onStart} />

        {/* First paragraph */}
        <p className="text-[16px] text-muted-foreground text-center mb-4 leading-relaxed">
          Insônia recorrente? Identifique em 45 segundos padrões do seu sono e receba orientações simples para testar
          hoje. Sem cadastro.
        </p>

        {/* CTA Button */}
        <QuizButton variant="primary" onClick={onStart}>
          1º PASSO - SAIBA MAIS
        </QuizButton>

        {/* BTF Ad - Lazy Load */}
        <div className="my-6">
          <MidArticleAd />
        </div>

        {/* Moon icon with glow */}
        <div className="flex justify-center mb-8 animate-float">
          <div className="relative">
            <Moon className="w-20 h-20 text-[hsl(var(--moon-glow))] drop-shadow-[0_0_20px_rgba(255,240,150,0.6)]" />
          </div>
        </div>

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
            Perguntas Frequentes Sobre Dormir Melhor e a Ansiedade
          </h2>

          <div className="space-y-3">
            <details className="group bg-card rounded-lg border border-border overflow-hidden">
              <summary className="cursor-pointer px-4 py-4 text-[15px] font-medium text-foreground hover:bg-secondary/50 transition-colors list-none flex justify-between items-center">
                <span>A ansiedade pode realmente afetar a qualidade do sono?</span>
                <span className="text-muted-foreground group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="px-4 py-3 text-[14px] text-muted-foreground border-t border-border">
                Sim. A ansiedade aumenta a atividade do sistema de alerta, o corpo libera adrenalina e cortisol, o que
                dificulta adormecer e mantém despertares. Se piora à noite, veja{" "}
                <a
                  href="https://cleoloiolatp.com/como-aliviar-ansiedade-a-noite/"
                  target="_blank"
                  rel="internal noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  ansiedade à noite
                </a>
                .
              </div>
            </details>

            <details className="group bg-card rounded-lg border border-border overflow-hidden">
              <summary className="cursor-pointer px-4 py-4 text-[15px] font-medium text-foreground hover:bg-secondary/50 transition-colors list-none flex justify-between items-center">
                <span>Por que durmo a noite inteira mas ainda acordo cansado?</span>
                <span className="text-muted-foreground group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="px-4 py-3 text-[14px] text-muted-foreground border-t border-border">
                Pode haver pouco sono profundo, microdespertares por luz, ruído ou álcool, além de horários irregulares.
                Ajuste ambiente e rotina. Guia prático em{" "}
                <a
                  href="https://cleoloiolatp.com/higiene-do-sono-quarto-ideal/"
                  target="_blank"
                  rel="internal noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  quarto ideal
                </a>
                .
              </div>
            </details>

            <details className="group bg-card rounded-lg border border-border overflow-hidden">
              <summary className="cursor-pointer px-4 py-4 text-[15px] font-medium text-foreground hover:bg-secondary/50 transition-colors list-none flex justify-between items-center">
                <span>Quanto tempo antes devo desligar telas para não atrapalhar o sono?</span>
                <span className="text-muted-foreground group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="px-4 py-3 text-[14px] text-muted-foreground border-t border-border">
                Desligue 60 a 90 minutos antes de deitar. Se precisar usar, aplique filtro noturno e brilho baixo e
                evite conteúdos ativadores. Monte um ritual simples com este{" "}
                <a
                  href="https://cleoloiolatp.com/rotina-antes-de-dormir/"
                  target="_blank"
                  rel="internal noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  passo a passo pré-sono
                </a>
                .
              </div>
            </details>

            <details className="group bg-card rounded-lg border border-border overflow-hidden">
              <summary className="cursor-pointer px-4 py-4 text-[15px] font-medium text-foreground hover:bg-secondary/50 transition-colors list-none flex justify-between items-center">
                <span>O que fazer na hora se eu travar para dormir e a mente acelerar?</span>
                <span className="text-muted-foreground group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="px-4 py-3 text-[14px] text-muted-foreground border-t border-border">
                Use respiração 4-6, grounding 5-4-3-2-1, relaxamento muscular por 2 a 3 minutos. Evite celular e telas.
                Veja técnicas rápidas em{" "}
                <a
                  href="https://cleoloiolatp.com/app-de-meditacao-gratis/"
                  target="_blank"
                  rel="internal noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  app de meditação grátis
                </a>
                .
              </div>
            </details>

            <details className="group bg-card rounded-lg border border-border overflow-hidden">
              <summary className="cursor-pointer px-4 py-4 text-[15px] font-medium text-foreground hover:bg-secondary/50 transition-colors list-none flex justify-between items-center">
                <span>Cafeína e álcool atrapalham mesmo? Até que horas devo evitar?</span>
                <span className="text-muted-foreground group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="px-4 py-3 text-[14px] text-muted-foreground border-t border-border">
                Cafeína pode reduzir sono profundo por várias horas, prefira evitar após o meio da tarde. Álcool
                fragmenta o sono, piora ronco e despertares. Combine com hábitos do{" "}
                <a
                  href="https://cleoloiolatp.com/higiene-do-sono-quarto-ideal/"
                  target="_blank"
                  rel="internal noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  quarto ideal
                </a>
                .
              </div>
            </details>

            <details className="group bg-card rounded-lg border border-border overflow-hidden">
              <summary className="cursor-pointer px-4 py-4 text-[15px] font-medium text-foreground hover:bg-secondary/50 transition-colors list-none flex justify-between items-center">
                <span>Vitamina D3 e magnésio ajudam a dormir melhor?</span>
                <span className="text-muted-foreground group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="px-4 py-3 text-[14px] text-muted-foreground border-t border-border">
                Podem ajudar se houver deficiência ou consumo insuficiente. Suplementos não substituem rotina de sono e
                manejo da ansiedade. Bases e cuidados em{" "}
                <a
                  href="https://cleoloiolatp.com/vitamina-d3-e-ansiedade/"
                  target="_blank"
                  rel="internal noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  D3 e ansiedade
                </a>
                .
              </div>
            </details>

            <details className="group bg-card rounded-lg border border-border overflow-hidden">
              <summary className="cursor-pointer px-4 py-4 text-[15px] font-medium text-foreground hover:bg-secondary/50 transition-colors list-none flex justify-between items-center">
                <span>Quais sinais físicos indicam que minha ansiedade está afetando o corpo?</span>
                <span className="text-muted-foreground group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="px-4 py-3 text-[14px] text-muted-foreground border-t border-border">
                Taquicardia, aperto no peito, tremores, tensão muscular, suor frio, tontura e náusea são comuns. Entenda
                gatilhos e o que fazer no momento da crise em{" "}
                <a
                  href="https://cleoloiolatp.com/sintomas-fisicos-da-ansiedade/"
                  target="_blank"
                  rel="internal noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  sintomas físicos da ansiedade
                </a>
                .
              </div>
            </details>

            <details className="group bg-card rounded-lg border border-border overflow-hidden">
              <summary className="cursor-pointer px-4 py-4 text-[15px] font-medium text-foreground hover:bg-secondary/50 transition-colors list-none flex justify-between items-center">
                <span>Wearables ajudam a melhorar o sono ou só geram ansiedade com dados?</span>
                <span className="text-muted-foreground group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="px-4 py-3 text-[14px] text-muted-foreground border-t border-border">
                Úteis quando usados para tendências semanais, não para vigiar cada noite. Sincronize de manhã e desative
                notificações noturnas. Boas práticas em{" "}
                <a
                  href="https://cleoloiolatp.com/apps-de-meditacao-e-wearables-sincronizar/"
                  target="_blank"
                  rel="internal noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  apps e wearables
                </a>
                .
              </div>
            </details>

            <details className="group bg-card rounded-lg border border-border overflow-hidden">
              <summary className="cursor-pointer px-4 py-4 text-[15px] font-medium text-foreground hover:bg-secondary/50 transition-colors list-none flex justify-between items-center">
                <span>Quando é hora de buscar ajuda profissional para insônia e ansiedade?</span>
                <span className="text-muted-foreground group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="px-4 py-3 text-[14px] text-muted-foreground border-t border-border">
                Se persistir por mais de 3 semanas, se houver ataques de pânico recorrentes ou prejuízo no dia a dia,
                procure avaliação. Como viabilizar com seu convênio em{" "}
                <a
                  href="https://cleoloiolatp.com/tratar-ansiedade-com-seu-plano-de-saude/"
                  target="_blank"
                  rel="internal noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  atendimento pelo plano
                </a>{" "}
                e{" "}
                <a
                  href="https://cleoloiolatp.com/reembolso-do-plano-de-saude/"
                  target="_blank"
                  rel="internal noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  reembolso
                </a>
                .
              </div>
            </details>

            <details className="group bg-card rounded-lg border border-border overflow-hidden">
              <summary className="cursor-pointer px-4 py-4 text-[15px] font-medium text-foreground hover:bg-secondary/50 transition-colors list-none flex justify-between items-center">
                <span>Existe um "atalho 80/20" para melhorar o sono nos próximos 7 dias?</span>
                <span className="text-muted-foreground group-open:rotate-180 transition-transform">+</span>
              </summary>
              <div className="px-4 py-3 text-[14px] text-muted-foreground border-t border-border">
                Horário fixo para deitar e acordar, sem telas à noite, quarto escuro e fresco, respiração guiada por 10
                minutos e caminhada diurna. Para iniciar hoje, use a{" "}
                <a
                  href="https://cleoloiolatp.com/trilha-adormecer-rapido-1"
                  target="_blank"
                  rel="internal noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  trilha adormecer rápido
                </a>{" "}
                ou a{" "}
                <a
                  href="https://cleoloiolatp.com/trilha-sono-profundo-1"
                  target="_blank"
                  rel="internal noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  trilha sono profundo
                </a>
                .
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
