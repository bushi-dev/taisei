"use client";

import { playSound } from "@/app/util";
import { useState, useRef, useEffect } from "react";

type Question = {
  question: string;
  options: number[];
  correctAnswer: number;
};

const generateQuestion = (
  digits: number = 1,
  operation: "add" | "subtract" | "multiply"
): Question => {
  const getRandomInt = (max: number) => Math.floor(Math.random() * max) + 1;

  const num1 = getRandomInt(Math.pow(10, digits));
  const num2 = getRandomInt(Math.pow(10, digits));

  let question = "";
  let correctAnswer = 0;

  switch (operation) {
    case "add":
      question = `${num1} + ${num2} = ?`;
      correctAnswer = num1 + num2;
      break;
    case "subtract":
      question = `${num1} - ${num2} = ?`;
      correctAnswer = num1 - num2;
      break;
    case "multiply":
      question = `${num1} × ${num2} = ?`;
      correctAnswer = num1 * num2;
      break;
    default:
      throw new Error("Invalid operation");
  }

  const options = Array.from({ length: 3 }, (_, i) => {
    const offset =
      i === 0 ? 0 : getRandomInt(10) * (Math.random() < 0.5 ? -1 : 1);
    return correctAnswer + offset;
  }).sort(() => Math.random() - 0.5);

  return { question, options, correctAnswer };
};

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    setCurrentQuestion(generateQuestion(1, "add"));
  }, []);

  const handleOptionClick = (option: number) => {
    if (!currentQuestion) return;

    const isCorrect = option === currentQuestion.correctAnswer;
    playSound(audioRef, isCorrect);

    console.log(isCorrect ? "正解！" : "不正解！");

    setTimeout(() => {
      setCurrentQuestion(generateQuestion(1, "add"));
    }, 2000);
  };

  if (!currentQuestion) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <p>{currentQuestion.question}</p>
      <div>
        {currentQuestion.options.map((option, index) => (
          <button key={index} onClick={() => handleOptionClick(option)}>
            {option}
          </button>
        ))}
      </div>
      <audio ref={audioRef} />
    </div>
  );
}
