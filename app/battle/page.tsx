"use client";

import Link from "next/link";
import BackgroundMusic from "@/components/BackgroundMusic";
import Boss from "@/components/Boss";
import Quiz from "@/components/Quiz";
import { useMusic } from "@/context/MusicContext";

export default function Test() {
  const { isPlaying } = useMusic(); // setIsPlayingを取得

  return (
    <div style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
      <BackgroundMusic
        src="/sound/maou_bgm_fantasy03.mp3"
        shouldPlay={isPlaying}
      />
      <Boss src="/image/boss/boss2.png" />
      <Link href="/">
        <button>HOMEへ</button>
      </Link>
      <Quiz />
    </div>
  );
}
