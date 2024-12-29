import styles from "./page.module.css";
import Link from "next/link";
import BackgroundMusic from "@/components/BackgroundMusic";
import StatrtButton from "@/components/StatrtButton";

export default function Home() {
  return (
    <div className={styles.page}>
      <BackgroundMusic src="/sound/maou_bgm_fantasy15.mp3" />
      <Link href="/battle">
        <StatrtButton />
      </Link>
    </div>
  );
}
