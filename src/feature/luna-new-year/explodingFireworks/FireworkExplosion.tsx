// src/components/FireworkExplosion.tsx
import React from "react";
import styled, { keyframes } from "styled-components";

const explosionAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(10);
    opacity: 0;
  }
`;

const ExplosionContainer = styled.div`
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #ffcc00;
  border-radius: 50%;
  animation: ${explosionAnimation} 0.5s ease-out;
`;

interface FireworkExplosionProps {
  x: number;
  y: number;
}

const FireworkExplosion: React.FC<FireworkExplosionProps> = ({ x, y }) => {
  return <ExplosionContainer style={{ left: `${x}px`, top: `${y}px` }} />;
};

export default FireworkExplosion;
