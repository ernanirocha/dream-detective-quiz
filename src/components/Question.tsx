Desculpe pelo erro! Vamos fazer apenas as alterações **mínimas** necessárias. Me diga qual erro apareceu para eu ajudar melhor.

Enquanto isso, aqui está uma versão com **mudanças mínimas** - apenas 3 pequenas alterações:

```typescript
import { useState, useEffect } from "react";
import ProgressDots from "./ProgressDots";
import QuizButton from "./QuizButton";
import CloudPopup from "./CloudPopup";
import AdxAd from "./AdxAd";

interface QuestionOption {
  id: number;
  text: string;
  feedback?: string;
}

interface QuestionProps {
  questionNumber: number;
  totalQuestions: number;
  title: string;
  options: QuestionOption[];
  onAnswer: (optionId: number) => void;
  onBack?: () => void;
  globalFeedback?: string;
}

const Question = ({
  questionNumber,
  totalQuestions,
  title,
  options,
  onAnswer,
  onBack,
  globalFeedback,
}: QuestionProps) => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentFeedback, setCurrentFeedback] = useState("");
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [questionNumber]);

  const handleOptionClick = (option: QuestionOption) => {
    setSelectedOption(option.id);
    const feedback = option.feedback || globalFeedback || "";
    setCurrentFeedback(feedback);
    setShowPopup(true);
  };

  const handlePopupClose = () => {
    setShowPopup(false);
    if (selectedOption !== null) {
      setTimeout(() => onAnswer(selectedOption), 300);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--night-gradient-start))]/40 to-[hsl(var(--night-gradient-end))]/40 flex items-start justify-center p-6 pt-3">
      <div className="max-w-md w-full animate-slide-up">
        {/* ADX na pergunta 2 */}
        {questionNumber >= 1 && <AdxAd />}

        {/* Progress */}
        <ProgressDots total={totalQuestions} current={questionNumber} />

        {/* Question counter */}
        <p className="text-sm text-muted-foreground text-center mb-2">
          Pergunta {questionNumber} de {totalQuestions}
        </p>

        {/* Question title */}
        <h2 className="text-[22px] font-bold text-foreground mb-8 text-center leading-tight">{title}</h2>

        {/* Options */}
        <div className="space-y-4">
          {options.map((option) => (
            <QuizButton key={option.id} variant="option" gtmId={option.id} onClick={() => handleOptionClick(option)}>
              <span className="text-primary mr-2 font-bold">{option.id}️⃣</span>
              {option.text}
            </QuizButton>
          ))}
        </div>

        {/* Back button */}
        {onBack && questionNumber > 1 && (
          <button
            onClick={onBack}
            className="gtm-id-button mt-6 text-sm text-muted-foreground hover:text-foreground transition-colors text-center"
          >
            ← Voltar
          </button>
        )}
      </div>

      {/* Cloud popup feedback */}
      {showPopup && <CloudPopup message={currentFeedback} onClose={handlePopupClose} />}
    </div>
  );
};

export default Question;
```

## Apenas 3 mudanças no código original:

1. **Linha 1:** `import { useState, useEffect } from "react";` (adicionei `useEffect`)
2. **Linha 35-37:** Adicionei o useEffect para scroll
3. **Linha 54:** Mudei `items-center` para `items-start` e `p-6` para `p-6 pt-3`

**Qual erro apareceu?** Me diga para eu corrigir especificamente! 🙏