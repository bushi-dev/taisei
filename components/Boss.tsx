"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getPath } from "@/app/util";

type BossProps = {
  src: string; // 画像のソース
  initialPosition: { top: string; left: string };
};

export default function Boss({ src, initialPosition }: BossProps) {
  const [position, setPosition] = useState(initialPosition);
  const [size, setSize] = useState(250);

  useEffect(() => {
    // 初回レンダリング後にアニメーションを開始
    const moveBoss = () => {
      const randomTop = `${Math.random() * 30 + 10}%`;
      const randomLeft = `${Math.random() * 30 + 10}%`;
      const randomSize = Math.random() * 200 + 200;
      setPosition({ top: randomTop, left: randomLeft });
      setSize(randomSize);
    };

    // 初回のアニメーションをすぐに開始
    moveBoss();

    // その後は1秒間隔でアニメーション
    const interval = setInterval(moveBoss, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Image
      src={getPath(src)}
      alt="boss"
      width={size}
      height={size}
      priority
      style={{
        position: "absolute",
        top: position.top,
        left: position.left,
        transform: "translate(-50%, -50%)",
        transition: "all 1s ease",
      }}
    />
  );
}
