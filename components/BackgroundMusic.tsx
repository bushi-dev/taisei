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
      if (shouldPlay) {
        audioRef.current.play();
      }
    }
  }, [shouldPlay]);

  return <audio ref={audioRef} src={src} loop />;
}
