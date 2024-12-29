"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import BackgroundMusic from "@/components/BackgroundMusic";

export default function Test() {
  // 再生中のボタンを追跡する状態
  const [playingButton, setPlayingButton] = useState<string | null>(null);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playSound = (soundSrc: string) => {
    if (audioRef.current) {
      audioRef.current.src = soundSrc; // 音源を切り替え
      audioRef.current.play(); // 再生
    }
  };

  return (
    <div>
      <BackgroundMusic src="/sound/maou_bgm_fantasy03.mp3" />
      <Link href="/">
        <button
          style={{ padding: "10px 20px", fontSize: "16px", cursor: "pointer" }}
        >
          HOMEへ
        </button>
      </Link>

      <button
        onClick={() => {
          if (playingButton !== "けん1") {
            setPlayingButton("けん1");
            playSound("/sound/ken1.mp3");
          }
        }}
      >
        けん1
      </button>
      <button
        onClick={() => {
          if (playingButton !== "けん2") {
            setPlayingButton("けん2");
            playSound("/sound/ken2.mp3");
          }
        }}
      >
        けん2
      </button>

      {/* 隠れたaudio要素 */}
      <audio ref={audioRef} />
    </div>
  );
}
