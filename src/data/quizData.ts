export interface QuestionData {
  id: number;
  title: string;
  options: { id: number; text: string; feedback?: string }[];
  globalFeedback?: string;
}
export interface ResultProfile {
  type: string;
  headline: string;
  description: string;
  articles: { title: string; url: string }[];
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
        text: 'Minha mente acelera, não consigo "desligar".',
        feedback:
          "Mente acelerada é muito comum à noite. Experimente 5 a 10 minutos de respiração guiada e um ritual simples antes de deitar. Passo a passo em: https://cleoloiolatp.com/rotina-antes-de-dormir/ e técnicas rápidas: https://cleoloiolatp.com/app-de-meditacao-gratis/",
      },
      {
        id: 2,
        text: "Meu corpo fica tenso, mesmo cansado.",
        feedback:
          "A tensão corporal sustenta microdespertares. Teste relaxamento muscular progressivo por 2 a 3 minutos e ajuste do ambiente. Guia do quarto ideal: https://cleoloiolatp.com/higiene-do-sono-quarto-ideal/",
      },
      {
        id: 3,
        text: "Durmo, mas acordo várias vezes.",
        feedback:
          "Despertares noturnos costumam piorar com luz azul, álcool e quarto quente. Veja higiene do sono e rotina pré-sono: https://cleoloiolatp.com/higiene-do-sono-quarto-ideal/ e https://cleoloiolatp.com/rotina-antes-de-dormir/",
      },
    ],
    globalFeedback:
      "Você não está sozinho. Estimativas indicam que 1 em cada 3 adultos relata dificuldades para dormir. Quando o corpo fica em modo de alerta, o cérebro precisa de sinais consistentes de segurança e um ambiente favorável. Para começar hoje, monte um ritual simples: https://cleoloiolatp.com/rotina-antes-de-dormir/ e ajuste o quarto para reduzir microdespertares: https://cleoloiolatp.com/higiene-do-sono-quarto-ideal/",
  },

  {
    id: 2,
    title: "O que você já tentou pra dormir melhor ou reduzir a ansiedade?",
    options: [
      {
        id: 1,
        text: "Chás, vitaminas ou suplementos.",
        feedback:
          "Boas apostas, principalmente se usados antes da mente acelerar. Entenda quando D3 pode ajudar no bem-estar: https://cleoloiolatp.com/vitamina-d3-e-ansiedade/ e veja substituições noturnas que não atrapalham o sono: https://cleoloiolatp.com/higiene-do-sono-quarto-ideal/",
      },
      {
        id: 2,
        text: "Meditação, música ou aplicativos.",
        feedback:
          "Sessões curtas, 5 a 10 minutos, funcionam melhor todos os dias do que blocos longos e raros. Opções gratuitas e como usar sem telas à noite: https://cleoloiolatp.com/app-de-meditacao-gratis/",
      },
      {
        id: 3,
        text: "Técnicas corporais (EFT, respiração, tapping).",
        feedback:
          "Excelente para reduzir cortisol rapidamente. Guia prático de EFT: https://cleoloiolatp.com/gestao-emocional-com-eft/ e integração com apps e wearables sem ansiedade por dados: https://cleoloiolatp.com/apps-de-meditacao-e-wearables-sincronizar/",
      },
    ],
    globalFeedback:
      "Muitas pessoas relatam melhora quando combinam 1 hábito mental, 1 corporal e 1 ajuste ambiental. Monte seu trio de base hoje: meditação breve, relaxamento muscular e quarto escuro e fresco. Recursos: https://cleoloiolatp.com/app-de-meditacao-gratis/ e https://cleoloiolatp.com/higiene-do-sono-quarto-ideal/",
  },

  {
    id: 3,
    title: "Há quanto tempo você sente dificuldade para dormir?",
    options: [
      {
        id: 1,
        text: "Semanas.",
        feedback:
          "Bom momento para intervir cedo. Combine 10 minutos de prática respiratória e cortes leves em cafeína à tarde. Técnicas acessíveis: https://cleoloiolatp.com/app-de-meditacao-gratis/",
      },
      {
        id: 2,
        text: "Meses.",
        feedback:
          "Quando persiste por meses, vale padronizar horário de sono, revisar ambiente e avaliar nutrientes. Veja D3 e bem-estar: https://cleoloiolatp.com/vitamina-d3-e-ansiedade/ e quarto ideal: https://cleoloiolatp.com/higiene-do-sono-quarto-ideal/",
      },
      {
        id: 3,
        text: "Já virou rotina.",
        feedback:
          "Rotina crônica merece plano estruturado. Considere acompanhamento profissional e um protocolo simples de 2 semanas com metas objetivas. Como viabilizar pelo convênio: https://cleoloiolatp.com/tratar-ansiedade-com-seu-plano-de-saude/ e formas de reembolso: https://cleoloiolatp.com/reembolso-do-plano-de-saude/",
      },
    ],
    globalFeedback:
      "Quanto mais tempo o sono fica instável, maior a chance de ansiedade noturna e cansaço diurno. O caminho prático combina ritual consistente, ambiente adequado e avaliação de gatilhos. Comece aqui: https://cleoloiolatp.com/como-aliviar-ansiedade-a-noite/ e aqui: https://cleoloiolatp.com/rotina-antes-de-dormir/",
  },

  {
    id: 4,
    title: "Qual desses hábitos é mais comum antes de dormir?",
    options: [
      {
        id: 1,
        text: "Telas até tarde.",
        feedback:
          "A luz e o conteúdo ativador reduzem a melatonina endógena. Use modo noturno e encerre telas 60 a 90 minutos antes. Ritual pré-sono passo a passo: https://cleoloiolatp.com/rotina-antes-de-dormir/",
      },
      {
        id: 2,
        text: "Café/vinho à noite.",
        feedback:
          "Cafeína tarde e álcool noturno fragmentam o sono. Troque por chás suaves e mantenha janelas de consumo mais cedo. Veja recomendações práticas: https://cleoloiolatp.com/higiene-do-sono-quarto-ideal/",
      },
      {
        id: 3,
        text: "Pensar demais.",
        feedback:
          "Escrita rápida de preocupações por 3 minutos e respiração 4-6 ajudam a desacelerar. Se os sintomas forem físicos, entenda gatilhos: https://cleoloiolatp.com/sintomas-fisicos-da-ansiedade/",
      },
    ],
    globalFeedback:
      "Esses hábitos mantêm o corpo em alerta e explicam parte da dificuldade para iniciar ou manter o sono. Ajuste um ponto por vez durante 7 dias e reavalie. Comece por ritual simples: https://cleoloiolatp.com/rotina-antes-de-dormir/ e ambiente certo: https://cleoloiolatp.com/higiene-do-sono-quarto-ideal/",
  },
  {
    id: 5,
    title: "Se pudesse resolver uma coisa hoje, qual seria?",
    options: [
      {
        id: 1,
        text: "Dormir mais rápido, naturalmente.",
        feedback:
          "Aplique o método 80 por cento: telas off, quarto escuro, respiração 4-6 por 10 minutos. Trilha guiada para pegar no sono: https://cleoloiolatp.com/trilha-adormecer-rapido-1",
      },
      {
        id: 2,
        text: "Parar de acordar de madrugada.",
        feedback:
          "Revise temperatura, luz e última refeição. Evite álcool, reduza líquidos no fim da noite e teste respiração curta ao acordar. Trilha para sono profundo: https://cleoloiolatp.com/trilha-sono-profundo-1",
      },
      {
        id: 3,
        text: "Controlar a ansiedade sem remédios.",
        feedback:
          "Combine 10 minutos de prática diária com técnicas corporais. Guia de meditação gratuita: https://cleoloiolatp.com/app-de-meditacao-gratis/ e estratégias noturnas: https://cleoloiolatp.com/como-aliviar-ansiedade-a-noite/",
      },
    ],
    globalFeedback:
      "Entendido. A maioria das pessoas melhora quando escolhe uma prioridade clara e repete o mesmo protocolo por 2 semanas. Para resultados consistentes, siga um plano simples com início hoje: https://cleoloiolatp.com/rotina-antes-de-dormir/ e integre técnicas rápidas: https://cleoloiolatp.com/app-de-meditacao-gratis/",
  },
];
export const resultProfiles: Record<number, ResultProfile> = {
  1: {
    type: "A",
    headline: "Seu corpo precisa aprender a desligar a mente antes do corpo.",
    description:
      "Você mostra sinais de ansiedade noturna. Combine respiração guiada, EFT/tapping e nutrientes calmantes.",
    articles: [
      { title: "Como dormir rápido naturalmente", url: "https://cleoloiolatp.com/como-dormir-rapido-naturalmente/" },
      { title: "Rotina antes de dormir", url: "https://cleoloiolatp.com/rotina-antes-de-dormir/" },
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
      { title: "Suplementos naturais para dormir", url: "https://cleoloiolatp.com/suplementos-naturais-para-dormir/" },
      { title: "Vitamina D3 e ansiedade", url: "https://cleoloiolatp.com/vitamina-d3-e-ansiedade/" },
      { title: "Como aliviar ansiedade à noite", url: "https://cleoloiolatp.com/como-aliviar-ansiedade-a-noite/" },
    ],
    cta: "Ver suplemento e rotina ideal 🌿",
    icon: "body",
  },
  3: {
    type: "C",
    headline: "Seu desafio é manter o corpo calmo durante o sono.",
    description:
      "A ansiedade noturna quebra o descanso. Técnicas de EFT, apps de tapping e gestão emocional ajudam a estabilizar o corpo.",
    articles: [
      { title: "Gestão emocional com EFT", url: "https://cleoloiolatp.com/gestao-emocional-com-eft/" },
      {
        title: "Melhores apps de tapping",
        url: "https://cleoloiolatp.com/os-melhores-apps-de-tapping-para-ansiedade/",
      },
      { title: "Relatos inspiradores de EFT", url: "https://cleoloiolatp.com/relatos-de-eft-inspiradores/" },
    ],
    cta: "Aprender a acalmar o corpo 🧘",
    icon: "heart",
  },
};
