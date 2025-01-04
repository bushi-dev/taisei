"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import BackgroundMusic from "@/components/BackgroundMusic";
import Boss from "@/components/Boss";
import Quiz from "@/components/Quiz";

const generateQuestion = (digits = 1, operation = "add") => {
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

  const options = [
    correctAnswer,
    correctAnswer + getRandomInt(10),
    correctAnswer - getRandomInt(10),
  ].sort(() => Math.random() - 0.5);

  return { question, options, correctAnswer };
};

export default function Test() {
  const [playingButton, setPlayingButton] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playSound = (isCorrect: boolean) => {
    if (audioRef.current) {
      const sounds = isCorrect
        ? ["/sound/success1.mp3", "/sound/success2.mp3"]
        : ["/sound/ken1.mp3", "/sound/ken2.mp3"];
      const randomSound = sounds[Math.floor(Math.random() * sounds.length)];
      audioRef.current.src = randomSound;
      audioRef.current.play();
    }
  };

  const { question, options, correctAnswer } = generateQuestion(1, "add");

  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <BackgroundMusic src="/sound/maou_bgm_fantasy03.mp3" />
      <Boss src="/image/boss/boss2.png" />
      <Link href="/">
        <button>HOMEへ</button>
      </Link>

      <Quiz
        question={question}
        options={options}
        correctAnswer={correctAnswer}
        onOptionClick={(option) => {
          setPlayingButton(option.toString());
          playSound(option === correctAnswer);
        }}
        successSound={() => playSound(true)}
        failureSound={() => playSound(false)}
      />
      <audio ref={audioRef} />
    </div>
  );
}
