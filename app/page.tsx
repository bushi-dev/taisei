"use client";
import Link from "next/link";
import BackgroundMusic from "@/components/BackgroundMusic";
import Image from "next/image";
import { useMusic } from "@/context/MusicContext";
import styles from "./home.module.css";
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Home() {
  const { isPlaying, setIsPlaying } = useMusic(); // setIsPlayingを取得

  const handleLinkClick = () => {
    setIsPlaying(true); // Battleページに行く前に再生を有効化
  };

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <BackgroundMusic
        src="/sound/maou_bgm_fantasy15.mp3"
        shouldPlay={isPlaying}
      />

      <Link href="/battle">
        <div className={styles.glowing} onClick={handleLinkClick}>
          <span className={styles.startText}>START</span>
        </div>
      </Link>

      <div className={styles.jumping}>
        <Image
          src={BASE_PATH + "/image/inn.png"}
          alt="Ninja"
          width={250}
          height={250}
          priority
        />
      </div>
    </div>
  );
}
