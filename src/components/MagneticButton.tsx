/* eslint-disable @typescript-eslint/no-explicit-any */
import type React from "react";
import { motion } from "motion/react";
import { useRef, useState } from "react";
const MagneticButton = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const onMouseMove = (e: any) => {
    const { clientX, clientY } = e;
    if (!ref.current) return;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  console.log(position);
  const onMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };
  const { x, y } = position;
  return (
    <motion.div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      ref={ref}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export default MagneticButton;
