import { useState } from "react";
import StartScreen from "@/components/StartScreen";
import Question from "@/components/Question";
import Results from "@/components/Results";
import { questions, resultProfiles } from "@/data/quizData";

type Screen = "start" | "question" | "results";

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>("start");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [currentFeedback, setCurrentFeedback] = useState("");
  const [pendingQuestionIndex, setPendingQuestionIndex] = useState<number | null>(null);

  const handleStart = () => {
    setCurrentScreen("question");
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  const handleAnswer = (optionId: number, feedback: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = optionId;
    setAnswers(newAnswers);

    // Abrir popup com feedback
    setCurrentFeedback(feedback);
    setIsPopupOpen(true);

    // Guardar próximo índice
    if (currentQuestionIndex < questions.length - 1) {
      setPendingQuestionIndex(currentQuestionIndex + 1);
    } else {
      setPendingQuestionIndex(null);
    }
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);

    if (pendingQuestionIndex !== null) {
      setCurrentQuestionIndex(pendingQuestionIndex);
      setPendingQuestionIndex(null);
    } else {
      setCurrentScreen("results");
    }
  };

  const handleBack = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const getResultProfile = () => {
    // Logic based on Q1 answer (first question determines profile)
    const firstAnswer = answers[0] || 1;
    return resultProfiles[firstAnswer];
  };

  return (
    <>
      {currentScreen === "start" && <StartScreen onStart={handleStart} />}

      {currentScreen === "question" && (
        <Question
          key={currentQuestionIndex}
          questionNumber={currentQuestionIndex + 1}
          totalQuestions={questions.length}
          title={questions[currentQuestionIndex].title}
          options={questions[currentQuestionIndex].options}
          onAnswer={handleAnswer}
          onBack={handleBack}
          globalFeedback={questions[currentQuestionIndex].globalFeedback}
          isPopupOpen={isPopupOpen}
          currentFeedback={currentFeedback}
          onPopupClose={handlePopupClose}
        />
      )}

      {currentScreen === "results" && <Results profile={getResultProfile()} />}
    </>
  );
};

export default Index;
