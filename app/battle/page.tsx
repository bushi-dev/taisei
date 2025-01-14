"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import BackgroundMusic from "@/components/BackgroundMusic";
import Boss from "@/components/Boss";
import Quiz from "@/components/Quiz";
import { useMusic } from "@/context/MusicContext";

export default function Test() {
  const { isPlaying } = useMusic(); // setIsPlayingを取得
  const [bossIndex, setBossIndex] = useState(1); // 初期値を1に設定

  // ボスをランダムに変更する関数
  const changeBoss = () => {
    // const newIndex = Math.floor(Math.random() * 4) + 1; // 1から4の間でランダム
    setBossIndex(1);
  };

  // 一定間隔でボスを変更する例
  useEffect(() => {
    changeBoss();
  }, []);

  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <BackgroundMusic
        src="/sound/maou_bgm_fantasy03.mp3"
        shouldPlay={isPlaying}
      />
      <Boss src={`/image/boss/boss${bossIndex}.png`} /> {/* 動的に変更 */}
      <Link href="/">
        <button>HOMEへ</button>
      </Link>
      <Quiz />
    </div>
  );
}
