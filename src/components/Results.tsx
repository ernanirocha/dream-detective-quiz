import { Brain, Heart, Moon } from "lucide-react";
import QuizButton from "./QuizButton";
import AdSenseAd from "./AdSenseAd";

declare global {
  interface Window {
    dataLayer: any[];
  }
}

interface Article {
  title: string;
  url: string;
}

interface ResultProfile {
  type: string;
  headline: string;
  description: string;
  articles: Article[];
  cta: string;
  icon: "brain" | "body" | "heart";
}

interface ResultsProps {
  profile: ResultProfile;
}

const Results = ({ profile }: ResultsProps) => {
  const IconComponent = {
    brain: Brain,
    body: Moon,
    heart: Heart,
  }[profile.icon];

  const handleArticleClick = (url: string) => {
    // GTM tracking
    if (window.dataLayer) {
      window.dataLayer.push({
        event: "btn_click",
        _event: "btn_click",
      });
    }
    // Abre na mesma janela
    window.location.href = `${url}?utm_source=quiz&utm_medium=resultado&utm_campaign=sono_ansiedade`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--night-gradient-start))]/40 to-[hsl(var(--night-gradient-end))]/40 flex flex-col p-6">
      <div className="max-w-md w-full mx-auto flex-1 flex flex-col justify-center animate-slide-up">
        {/* Icon */}
        <div className="flex justify-center mb-6 animate-float">
          <div className="relative">
            <IconComponent className="w-16 h-16 text-primary drop-shadow-[0_0_20px_rgba(107,115,255,0.5)]" />
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-[22px] font-bold text-foreground text-center mb-4 leading-tight">{profile.headline}</h1>

        {/* Anúncio AdSense no Results */}

        {/* Description */}
        <p className="text-[16px] text-muted-foreground text-center mb-8 leading-relaxed">{profile.description}</p>

        {/* Articles */}
        <div className="space-y-3 mb-8">
          <h3 className="text-sm font-semibold text-primary uppercase tracking-wide text-center mb-4">
            Dicas personalizadas para sua noite de hoje
          </h3>
          {profile.articles.map((article, index) => (
            <QuizButton key={index} variant="option" onClick={() => handleArticleClick(article.url)}>
              📄 {article.title}
            </QuizButton>
          ))}
        </div>

        {/* CTA */}
        <QuizButton variant="primary" onClick={() => handleArticleClick(profile.articles[0].url)}>
          {profile.cta}
        </QuizButton>

        {/* Restart option */}
        <button
          onClick={() => window.location.reload()}
          className="gtm-id-button mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors text-center"
        >
          🔄 Refazer o quiz
        </button>
      </div>
    </div>
  );
};

export default Results;
