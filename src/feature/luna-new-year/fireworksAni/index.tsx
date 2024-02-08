import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import * as THREE from "three";

export const FireworksAni: React.FC = () => {
  const particles = useRef<THREE.Points>(null);

  // Tạo particles
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 0.1,
  });

  const particlesCount = 500;
  const particlesPositions = new Float32Array(particlesCount * 3);

  for (let i = 0; i < particlesCount; i++) {
    // Tạo hình trái tim bằng cách sử dụng biểu thức toán học
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.random() * Math.PI * 2;
    const radius = 5 * Math.sin(theta) * Math.pow(Math.sin(phi), 2);
    particlesPositions[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
    particlesPositions[i * 3 + 1] = radius * Math.cos(phi);
    particlesPositions[i * 3 + 2] = radius * Math.sin(theta) * Math.sin(phi);
  }

  particlesGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(particlesPositions, 3)
  );

  useFrame(() => {
    // Tạo hiệu ứng chuyển động
    if (particles.current) {
      const positions = particles.current.geometry.attributes.position
        .array as Float32Array;
      for (let i = 0; i < particlesCount * 3; i += 3) {
        positions[i + 1] += 0.01; // Tăng y để di chuyển lên trên
        if (positions[i + 1] > 5) {
          positions[i + 1] = -5; // Reset khi vượt quá giới hạn
        }
      }
      particles.current.geometry.attributes.position.needsUpdate = true;
    }
  });

  return (
    <points
      ref={particles}
      geometry={particlesGeometry}
      material={particlesMaterial}
    />
  );
};
