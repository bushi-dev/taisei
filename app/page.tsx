"use client";
import Link from "next/link";
import BackgroundMusic from "@/components/BackgroundMusic";
import Image from "next/image";

export default function Home() {
  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      <BackgroundMusic src="/sound/maou_bgm_fantasy15.mp3" />
      <Link href="/battle">
        <div className="rotating">
          <Image
            src="/image/start.png"
            alt="Start Button"
            width={400} // ボタンの幅
            height={400} // ボタンの高さ
            priority={true} // 必須ではないが推奨
            style={{
              cursor: "pointer", // ボタンらしい見た目に
            }}
          />
        </div>
      </Link>
      <Image
        src="/image/nin.png"
        alt="Ninja"
        width={250} // 必須
        height={250} // 必須
        priority={true} // 必須ではないが推奨
        style={{
          position: "fixed", // 画面に固定表示
          bottom: "0px", // 画面下からの余白
          left: "0px", // 画面右からの余白
          zIndex: 1000, // 他の要素の上に表示
        }}
      />
      <style jsx>{`
        .rotating {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          animation: spin 20s linear infinite;
        }

        @keyframes spin {
          from {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          to {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
