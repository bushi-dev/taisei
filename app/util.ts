"use client";
export const playSound = (audioRef, seikai) => {
  if (audioRef.current) {
    const primarySound = seikai ? "/sound/ken1.mp3" : "/sound/ken2.mp3";
    const secondarySound = seikai ? "/sound/seikai.mp3" : "/sound/sippai.mp3";

    // 最初の音声を設定して再生
    audioRef.current.src = primarySound;
    audioRef.current.load();
    audioRef.current.loop = false;
    audioRef.current
      .play()
      .then(() => {
        console.log("Primary sound playing...");
      })
      .catch(() => {});

    // イベントリスナーを設定
    const handlePrimarySoundEnded = () => {
      audioRef.current?.removeEventListener("ended", handlePrimarySoundEnded);

      // 次の音声を設定して再生
      audioRef.current.src = secondarySound;
      audioRef.current.load();
      audioRef.current.loop = false;
      audioRef.current
        .play()
        .then(() => {
          console.log("Secondary sound playing...");
        })
        .catch(() => {});

      // 次の音声が終了したらリセット
      const handleSecondarySoundEnded = () => {
        audioRef.current?.removeEventListener(
          "ended",
          handleSecondarySoundEnded
        );
        console.log("Secondary sound finished.");
      };
      audioRef.current.addEventListener("ended", handleSecondarySoundEnded);
    };

    audioRef.current.addEventListener("ended", handlePrimarySoundEnded);
  }
};
