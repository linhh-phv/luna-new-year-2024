// src/components/Firework.tsx
import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import FireworkExplosion from "./FireworkExplosion";

const fireworkAnimation = keyframes`
  0% {
    transform: translateY(0);
    opacity: 0;
  }
  100% {
    transform: translateY(-500px);
    opacity: 1;
  }
`;

const FireworkContainer = styled.div`
  position: absolute;
  width: 10px;
  height: 30px;
  background-color: #ff0000;
  border-radius: 50%;
  transform-origin: center bottom;
  animation: ${fireworkAnimation} 1s ease-out;
`;

export interface FireworkProps {
  x: number;
  y: number;
}

const Firework: React.FC<FireworkProps> = ({ x, y }) => {
  const [top, setTop] = useState<number>(window.innerHeight);
  const [explosions, setExplosions] = useState<boolean>(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTop((prevTop) => prevTop - 1);
    }, 10);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (top < window.innerHeight / 2) {
      setTimeout(() => {
        setExplosions(true);
      }, 1000);
    }
  }, [top]);

  return (
    <>
      {!explosions && (
        <FireworkContainer style={{ left: `${x}px`, top: `${top}px` }} />
      )}
      {explosions && <FireworkExplosion x={x} y={y} />}
    </>
  );
};
export default Firework;
