"use client";

import { useState } from "react";
import Link from "next/link";
import { getPath } from "@/app/util";
import BackgroundMusic from "@/components/BackgroundMusic";
import Boss from "@/components/Boss";
import Quiz from "@/components/Quiz";
import { useMusic } from "@/context/MusicContext";

export default function Test() {
  const { isPlaying } = useMusic();
  const [visibleBosses, setVisibleBosses] = useState([true, true, true, true]);
  const bossIndices = [1, 2, 3, 4]; // 複数のボスインデックス

  const handleCorrectAnswer = () => {
    setVisibleBosses((prev) => {
      const index = prev.findIndex((v) => v);
      if (index === -1) return prev;
      const newVisible = [...prev];
      newVisible[index] = false;
      return newVisible;
    });
  };

  // ボスの初期位置を計算
  const getInitialPosition = (index: number) => {
    const positions = [
      { top: "20%", left: "20%" },
      { top: "20%", left: "80%" },
      { top: "80%", left: "20%" },
      { top: "80%", left: "80%" },
    ];
    return positions[index % positions.length];
  };

  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <BackgroundMusic
        src="/sound/maou_bgm_fantasy03.mp3"
        shouldPlay={isPlaying}
      />
      {bossIndices.map((index, i) => (
        <Boss
          key={index}
          src={getPath(`/image/boss/boss${index}.png`)}
          initialPosition={getInitialPosition(i)}
        />
      ))}
      <Link href="/">
        <button>HOMEへ</button>
      </Link>
      <Quiz />
    </div>
  );
}
