// src/components/Firework.tsx
import React, { useEffect, useState } from "react";
import Fireworks, { FireworkProps } from "./Fireworks";

export const ExplodingFireworks: React.FC = () => {
  const [fireworks, setFireworks] = useState<FireworkProps[]>([]);
  const [showFireworks, setShowFireworks] = useState<boolean>(false);

  const handleFireworkClick = () => {
    setShowFireworks(true);
    setTimeout(() => {
      setShowFireworks(false);
      setFireworks([]);
    }, 5000);
  };

  useEffect(() => {
    if (showFireworks) {
      const intervalId = setInterval(() => {
        const randomX = Math.floor(Math.random() * window.innerWidth);
        const randomY = Math.floor(Math.random() * window.innerHeight);
        setFireworks((prev) => [...prev, { x: randomX, y: randomY }]);
      }, 500);

      return () => clearInterval(intervalId);
    }
  }, [showFireworks]);

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "60vh",
        overflow: "hidden",
      }}
      onClick={handleFireworkClick}
    >
      {fireworks.map((firework, index) => (
        <Fireworks key={index} x={firework.x} y={firework.y} />
      ))}
    </div>
  );
};
