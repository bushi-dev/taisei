import { RefObject } from "react";

export const playSound = (
  audioRef: RefObject<HTMLAudioElement | null>,
  seikai: boolean
) => {
  if (audioRef.current) {
    const primarySound = seikai ? "/sound/ken1.mp3" : "/sound/ken2.mp3";
    const secondarySound = seikai ? "/sound/seikai.mp3" : "/sound/sippai.mp3";

    const playAudio = (src: string, onEnd?: () => void) => {
      if (!audioRef.current) return;

      audioRef.current.src = src;
      audioRef.current.load();
      audioRef.current.loop = false;

      audioRef.current
        .play()
        .then(() => {
          console.log(`${src} is playing...`);
        })
        .catch((error) => {
          console.error(`Error playing ${src}:`, error);
        });

      if (onEnd) {
        audioRef.current.addEventListener("ended", function handleEnded() {
          audioRef.current?.removeEventListener("ended", handleEnded);
          onEnd();
        });
      }
    };

    playAudio(primarySound, () => {
      playAudio(secondarySound);
    });
  }
};
