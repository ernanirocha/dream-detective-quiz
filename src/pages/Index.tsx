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

  const handleStart = () => {
    setCurrentScreen("question");
    setCurrentQuestionIndex(0);
    setAnswers([]);
  };

  const handleAnswer = (optionId: number) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestionIndex] = optionId;
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      const nextIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextIndex);
      // Mostrar anúncio #2 após concluir a 2ª pergunta (índice 1)
      if (nextIndex >= 2 && !showAdAfterQ2) {
        setShowAdAfterQ2(true);
      }
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
        <>
          <Question
            questionNumber={currentQuestionIndex + 1}
            totalQuestions={questions.length}
            title={questions[currentQuestionIndex].title}
            options={questions[currentQuestionIndex].options}
            onAnswer={handleAnswer}
            onBack={handleBack}
            globalFeedback={questions[currentQuestionIndex].globalFeedback}
          />
          {/* Anúncio #2 (BTF) - renderiza após concluir a 2ª pergunta */}
          <div className="my-4">
            <AfterSecondQuestionAd show={showAdAfterQ2} />
          </div>
        </>
      )}
      
      {currentScreen === "results" && <Results profile={getResultProfile()} />}
    </>
  );
};

export default Index;
