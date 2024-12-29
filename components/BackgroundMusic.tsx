"use client";

import { useEffect, useRef } from "react";

interface BackgroundMusicProps {
  src: string;
}

export default function BackgroundMusic({ src }: BackgroundMusicProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      // ボリュームを設定（例: 0.2 は20%）
      audio.volume = 0.2;

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.catch((error) => {
          console.error("再生がブロックされました:", error);
        });
      }
    }
  }, []);

  return <audio ref={audioRef} src={src} preload="auto" loop />;
}
