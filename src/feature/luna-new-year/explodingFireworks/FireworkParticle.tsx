// src/components/FireworkParticle.tsx
import React from "react";
import styled, { keyframes } from "styled-components";

const explodeAnimation = keyframes`
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(2);
    opacity: 0;
  }
`;

const Particle = styled.div`
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #ffcc00;
  border-radius: 50%;
  animation: ${explodeAnimation} 0.5s ease-out;
`;

interface FireworkParticleProps {
  x: number;
  y: number;
}

const FireworkParticle: React.FC<FireworkParticleProps> = ({ x, y }) => {
  return <Particle style={{ left: `${x}px`, top: `${y}px` }} />;
};

export default FireworkParticle;
