import ProgressDots from "./ProgressDots";
import QuizButton from "./QuizButton";
import CloudPopup from "./CloudPopup";
import AfterSecondQuestionAd from "./AfterSecondQuestionAd";


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
  onAnswer: (optionId: number, feedback: string) => void;
  onBack?: () => void;
  globalFeedback?: string;
  isPopupOpen: boolean;
  currentFeedback: string;
  onPopupClose: () => void;
  showAdBefore?: boolean;
}

const Question = ({ 
  questionNumber, 
  totalQuestions, 
  title, 
  options, 
  onAnswer,
  onBack,
  globalFeedback,
  isPopupOpen,
  currentFeedback,
  onPopupClose,
  showAdBefore = false
}: QuestionProps) => {
  const handleOptionClick = (option: QuestionOption) => {
    const feedback = option.feedback || globalFeedback || "";
    onAnswer(option.id, feedback);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--night-gradient-start))]/40 to-[hsl(var(--night-gradient-end))]/40 flex items-center justify-center p-6">
      <div className="max-w-md w-full animate-slide-up">
        
        {/* Ad BTF no topo da Q3 */}
        {showAdBefore && (
          <div className="q3-ad">
            <AfterSecondQuestionAd show={true} />
          </div>
        )}
        
        {/* Progress */}
        <ProgressDots total={totalQuestions} current={questionNumber} />

        {/* Question counter */}
        <p className="text-sm text-muted-foreground text-center mb-2">
          Pergunta {questionNumber} de {totalQuestions}
        </p>

        {/* Question title */}
        <h2 className="text-[22px] font-bold text-foreground mb-8 text-center leading-tight">
          {title}
        </h2>

        {/* Options */}
        <div className="space-y-4">
          {options.map((option) => (
            <QuizButton
              key={option.id}
              variant="option"
              gtmId={option.id}
              onClick={() => handleOptionClick(option)}
            >
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
      {isPopupOpen && (
        <CloudPopup
          message={currentFeedback}
          onClose={onPopupClose}
        />
      )}
    </div>
  );
};

export default Question;
