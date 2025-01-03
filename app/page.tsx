"use client";
import Link from "next/link";
import BackgroundMusic from "@/components/BackgroundMusic";
import Image from "next/image";
import styles from "./home.module.css";

export default function Home() {
  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <BackgroundMusic src="/sound/maou_bgm_fantasy15.mp3" />

      <Link href="/battle">
        <div className={styles.glowing}>
          <span className={styles.startText}>START</span>
        </div>
      </Link>

      <div className={styles.jumping}>
        <Image
          src="/image/nin.png"
          alt="Ninja"
          width={250}
          height={250}
          priority
        />
      </div>
    </div>
  );
}
