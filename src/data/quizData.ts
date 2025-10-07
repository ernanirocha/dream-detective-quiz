export interface QuestionData {
  id: number;
  title: string;
  options: {
    id: number;
    text: string;
    feedback?: string;
  }[];
  globalFeedback?: string;
}

export interface ResultProfile {
  type: string;
  headline: string;
  description: string;
  articles: {
    title: string;
    url: string;
  }[];
  cta: string;
  icon: "brain" | "body" | "heart";
}

export const questions: QuestionData[] = [
  {
    id: 1,
    title: "Quando você tenta dormir, o que mais te incomoda?",
    options: [
      {
        id: 1,
        text: "Minha mente acelera, não consigo \"desligar\".",
      },
      {
        id: 2,
        text: "Meu corpo fica tenso, mesmo cansado.",
      },
      {
        id: 3,
        text: "Durmo, mas acordo várias vezes.",
      },
    ],
    globalFeedback: "Isso mostra que seu corpo ainda está em modo de alerta. O cérebro precisa de sinais de segurança e nutrientes calmantes (magnésio, melatonina natural) pra liberar o sono profundo.",
  },
  {
    id: 2,
    title: "Há quanto tempo você sente isso?",
    options: [
      { id: 1, text: "Semanas." },
      { id: 2, text: "Meses." },
      { id: 3, text: "Já virou rotina." },
    ],
    globalFeedback: "Quando o corpo passa meses sem sono profundo, ele reduz vitamina D3 e hormônios do sono. Dá pra restaurar com suplementos naturais e rotina noturna leve.",
  },
  {
    id: 3,
    title: "O que você já tentou pra dormir melhor ou reduzir a ansiedade?",
    options: [
      {
        id: 1,
        text: "Chás, vitaminas ou suplementos.",
        feedback: "Essas opções ajudam, mas o segredo é usar antes da mente acelerar.",
      },
      {
        id: 2,
        text: "Meditação, música ou aplicativos.",
        feedback: "Som e respiração guiada aumentam melatonina natural.",
      },
      {
        id: 3,
        text: "Técnicas corporais (EFT, respiração, tapping).",
        feedback: "EFT e tapping reduzem cortisol e preparam pro sono.",
      },
    ],
  },
  {
    id: 4,
    title: "Qual desses hábitos é mais comum antes de dormir?",
    options: [
      { id: 1, text: "Telas até tarde." },
      { id: 2, text: "Café/vinho à noite." },
      { id: 3, text: "Pensar demais." },
    ],
    globalFeedback: "Esses hábitos reduzem sua melatonina natural e mantêm o corpo em alerta. Experimente um app de relaxamento guiado e pratique higiene do sono.",
  },
  {
    id: 5,
    title: "Se pudesse resolver uma coisa hoje, qual seria?",
    options: [
      { id: 1, text: "Dormir mais rápido, naturalmente." },
      { id: 2, text: "Parar de acordar de madrugada." },
      { id: 3, text: "Controlar a ansiedade sem remédios." },
    ],
    globalFeedback: "Perfeito. Já sei qual tipo de solução natural combina com seu perfil. Veja duas estratégias práticas e um artigo bônus pra testar hoje.",
  },
];

export const resultProfiles: Record<number, ResultProfile> = {
  1: {
    type: "A",
    headline: "Seu corpo precisa aprender a desligar a mente antes do corpo.",
    description: "Você mostra sinais de ansiedade noturna. Combine respiração guiada, EFT/tapping e nutrientes calmantes.",
    articles: [
      {
        title: "Como dormir rápido naturalmente",
        url: "https://cleoloiolatp.com/como-dormir-rapido-naturalmente/",
      },
      {
        title: "Rotina antes de dormir",
        url: "https://cleoloiolatp.com/rotina-antes-de-dormir/",
      },
      {
        title: "Apps de meditação e wearables",
        url: "https://cleoloiolatp.com/apps-de-meditacao-e-wearables-sincronizar/",
      },
    ],
    cta: "Descubra seu ritual de desligamento 🌙",
    icon: "brain",
  },
  2: {
    type: "B",
    headline: "Você está dormindo, mas seu corpo não se recupera.",
    description: "Pode haver falta de magnésio ou vitamina D3. Alinhe suplementação leve e rotina noturna.",
    articles: [
      {
        title: "Suplementos naturais para dormir",
        url: "https://cleoloiolatp.com/suplementos-naturais-para-dormir/",
      },
      {
        title: "Vitamina D3 e ansiedade",
        url: "https://cleoloiolatp.com/vitamina-d3-e-ansiedade/",
      },
      {
        title: "Como aliviar ansiedade à noite",
        url: "https://cleoloiolatp.com/como-aliviar-ansiedade-a-noite/",
      },
    ],
    cta: "Ver suplemento e rotina ideal 🌿",
    icon: "body",
  },
  3: {
    type: "C",
    headline: "Seu desafio é manter o corpo calmo durante o sono.",
    description: "A ansiedade noturna quebra o descanso. Técnicas de EFT, apps de tapping e gestão emocional ajudam a estabilizar o corpo.",
    articles: [
      {
        title: "Gestão emocional com EFT",
        url: "https://cleoloiolatp.com/gestao-emocional-com-eft/",
      },
      {
        title: "Melhores apps de tapping",
        url: "https://cleoloiolatp.com/os-melhores-apps-de-tapping-para-ansiedade/",
      },
      {
        title: "Relatos inspiradores de EFT",
        url: "https://cleoloiolatp.com/relatos-de-eft-inspiradores/",
      },
    ],
    cta: "Aprender a acalmar o corpo 🧘",
    icon: "heart",
  },
};
