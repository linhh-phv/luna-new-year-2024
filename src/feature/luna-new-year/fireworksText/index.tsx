// FireworksText.tsx
import React from "react";
import { motion, useAnimation } from "framer-motion";

export const FireworksText: React.FC = () => {
  const controls = useAnimation();

  const animateFireworks = async () => {
    // Định nghĩa các hiệu ứng pháo hoa ở đây
    await controls.start({
      opacity: [0, 1, 0],
      y: [50, 0],
      rotate: [0, 360],
    });

    // Reset hiệu ứng
    controls.start({ opacity: 0, y: 0, rotate: 0 });
  };

  // Gọi hàm animateFireworks khi component được mount
  React.useEffect(() => {
    animateFireworks();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={controls}
      style={{ fontSize: "24px", fontWeight: "bold" }}
    >
      Happy New Year
    </motion.div>
  );
};
