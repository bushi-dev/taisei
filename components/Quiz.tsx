"use client";

import { playSound } from "@/app/util";
import { useState, useRef, useEffect } from "react";

const generateQuestion = (digits = 1, operation = "add") => {
  const getRandomInt = (max) => Math.floor(Math.random() * max) + 1;
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

  const options = [
    correctAnswer,
    correctAnswer + getRandomInt(10),
    correctAnswer - getRandomInt(10),
  ].sort(() => Math.random() - 0.5);

  return { question, options, correctAnswer };
};

export default function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const audioRef = useRef(null);

  useEffect(() => {
    // クライアントサイドでのみ問題を生成
    setCurrentQuestion(generateQuestion(1, "add"));
  }, []);

  const handleOptionClick = (option) => {
    if (!currentQuestion) return;

    const isCorrect = option === currentQuestion.correctAnswer;
    playSound(audioRef, isCorrect);

    console.log(isCorrect ? "正解！" : "不正解！");

    // 次の問題を生成
    setTimeout(() => {
      setCurrentQuestion(generateQuestion(1, "add"));
    }, 2000);
  };

  if (!currentQuestion) {
    return <p>Loading...</p>; // 問題生成中にローディングメッセージを表示
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
