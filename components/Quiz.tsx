"use client";

import React from "react";

type QuizProps = {
  question: string;
  options: number[];
  correctAnswer: number;
  onOptionClick: (option: number) => void;
  successSound: () => void;
  failureSound: () => void;
};

const Quiz: React.FC<QuizProps> = ({
  question,
  options,
  correctAnswer,
  onOptionClick,
  successSound,
  failureSound,
}) => {
  const handleClick = (option: number) => {
    if (option === correctAnswer) {
      successSound();
    } else {
      failureSound();
    }
    onOptionClick(option);
  };

  return (
    <div
      style={{
        position: "absolute",
        top: "40%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        backgroundColor: "rgba(255, 255, 255, 0.5)",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <h1>{question}</h1>
      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {options.map((option, index) => (
          <div
            key={index}
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              backgroundColor: "#f0f0f0",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              border:
                option === correctAnswer ? "2px solid green" : "2px solid gray",
            }}
            onClick={() => handleClick(option)}
          >
            {option}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
