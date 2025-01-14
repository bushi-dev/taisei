"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { getPath } from "@/app/util";

type BossProps = {
  src: string; // 画像のソース
};

export default function Boss({ src }: BossProps) {
  const [position, setPosition] = useState({ top: "50%", left: "50%" });
  const [size, setSize] = useState(250);

  useEffect(() => {
    const moveBoss = () => {
      const randomTop = `${Math.random() * 30 + 10}%`;
      const randomLeft = `${Math.random() * 30 + 10}%`;
      const randomSize = Math.random() * 200 + 200;
      setPosition({ top: randomTop, left: randomLeft });
      setSize(randomSize);
    };

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
