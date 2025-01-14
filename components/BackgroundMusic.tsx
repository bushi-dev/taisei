import { getPath } from "@/app/util";
import React, { useEffect, useRef } from "react";

type BackgroundMusicProps = {
  src: string;
  shouldPlay: boolean;
};

export default function BackgroundMusic({
  src,
  shouldPlay,
}: BackgroundMusicProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.1; // 音量を設定
      if (shouldPlay) {
        audioRef.current
          .play()
          .then(() => {
            console.log(`${src} is playing...`);
          })
          .catch(() => {});
      } else {
        audioRef.current.pause();
      }
    }
  }, [shouldPlay, src]);

  return <audio ref={audioRef} src={getPath(src)} loop />;
}
