import { useState } from "react";
import ProgressDots from "./ProgressDots";
import QuizButton from "./QuizButton";
import CloudPopup from "./CloudPopup";

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
  globalFeedback?: string;
}

const Question = ({ 
  questionNumber, 
  totalQuestions, 
  title, 
  options, 
  onAnswer,
  globalFeedback 
}: QuestionProps) => {
  const [showPopup, setShowPopup] = useState(false);
  const [currentFeedback, setCurrentFeedback] = useState("");
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

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
    <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--night-gradient-start))] to-[hsl(var(--night-gradient-end))] flex flex-col p-6">
      <div className="max-w-md w-full mx-auto flex-1 flex flex-col justify-center animate-slide-up">
        {/* Progress */}
        <ProgressDots total={totalQuestions} current={questionNumber} />

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
              onClick={() => handleOptionClick(option)}
            >
              <span className="text-primary mr-2 font-bold">{option.id}️⃣</span>
              {option.text}
            </QuizButton>
          ))}
        </div>
      </div>

      {/* Cloud popup feedback */}
      {showPopup && (
        <CloudPopup
          message={currentFeedback}
          onClose={handlePopupClose}
        />
      )}
    </div>
  );
};

export default Question;
