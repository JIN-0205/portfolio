"use client";

import React, { useEffect, useRef } from "react";

type Spotlight = {
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
};

const HeroSection: React.FC = () => {
  const spotlightRefs = useRef<HTMLDivElement[]>([]);
  const spotlights = useRef<Spotlight[]>([]);

  useEffect(() => {
    const initializeSpotlights = () => {
      const numSpotlights = 5;
      const maxSize = 400;
      const minSize = 100;

      spotlights.current = Array.from({ length: numSpotlights }).map(() => ({
        x: Math.random() * (window.innerWidth - maxSize) + maxSize / 2,
        y: Math.random() * (window.innerHeight - maxSize) + maxSize / 2,
        dx: (Math.random() - 0.5) * 2, // スポットライトの移動速度
        dy: (Math.random() - 0.5) * 2,
        size: Math.random() * (maxSize - minSize) + minSize,
      }));
    };

    const updateSpotlights = () => {
      spotlights.current.forEach((spotlight, index) => {
        // 境界チェック: スポットライトが画面外に出ないように反転
        if (
          spotlight.x - spotlight.size / 2 <= 0 ||
          spotlight.x + spotlight.size / 2 >= window.innerWidth
        ) {
          spotlight.dx *= -1;
        }
        if (
          spotlight.y - spotlight.size / 2 <= 0 ||
          spotlight.y + spotlight.size / 2 >= window.innerHeight
        ) {
          spotlight.dy *= -1;
        }

        // 位置の更新
        spotlight.x += spotlight.dx;
        spotlight.y += spotlight.dy;

        // DOM要素の位置とサイズを更新
        const ref = spotlightRefs.current[index];
        if (ref) {
          ref.style.left = `${spotlight.x}px`;
          ref.style.top = `${spotlight.y}px`;
          ref.style.width = `${spotlight.size}px`;
          ref.style.height = `${spotlight.size}px`;
        }
      });

      requestAnimationFrame(updateSpotlights);
    };

    initializeSpotlights();
    updateSpotlights();

    return () => cancelAnimationFrame(updateSpotlights as any);
  }, []);

  return (
    <div className="relative flex items-center justify-center h-screen overflow-hidden bg-black">
      {Array.from({ length: 5 }).map((_, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) spotlightRefs.current[index] = el;
          }}
          className={`absolute rounded-full blur-3xl`}
          style={{
            backgroundImage: `radial-gradient(circle, rgba(${50 * index}, ${
              255 - 50 * index
            }, 255, 0.8), rgba(${50 * index}, ${255 - 50 * index}, 255, 0))`,
            left: `${spotlights.current[index]?.x || 0}px`,
            top: `${spotlights.current[index]?.y || 0}px`,
            width: `${spotlights.current[index]?.size || 150}px`,
            height: `${spotlights.current[index]?.size || 150}px`,
            transform: "translate(-50%, -50%)", // スポットライトを中央に配置
          }}
        />
      ))}
      <h1 className="z-10 text-4xl font-bold text-white md:text-6xl">
        Welcome to My Portfolio
      </h1>
    </div>
  );
};

export default HeroSection;
