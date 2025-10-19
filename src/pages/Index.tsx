import { useState } from "react";
import StartScreen from "@/components/StartScreen";
import Question from "@/components/Question";
import Results from "@/components/Results";
import AfterSecondQuestionAd from "@/components/AfterSecondQuestionAd";
import { questions, resultProfiles } from "@/data/quizData";

type Screen = "start" | "question" | "results";

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>("start");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showAdAfterQ2, setShowAdAfterQ2] = useState(false);
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
      // Avançar para próxima pergunta
      setCurrentQuestionIndex(pendingQuestionIndex);
      
      // Se for Q2→Q3, ativar anúncio DEPOIS de Q3 renderizar
      if (pendingQuestionIndex === 2 && !showAdAfterQ2) {
        setTimeout(() => {
          setShowAdAfterQ2(true);
        }, 100);
      }
      
      setPendingQuestionIndex(null);
    } else {
      // Era a última pergunta
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
          showAdBefore={currentQuestionIndex === 2 && showAdAfterQ2}
        />
      )}

      {currentScreen === "results" && <Results profile={getResultProfile()} />}
    </>
  );
};

export default Index;
