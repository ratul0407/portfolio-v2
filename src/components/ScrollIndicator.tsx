import { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function ScrollIndicator() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercent(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 z-50 bg-gray-300 dark:bg-gray-700">
      <motion.div
        className="h-1.5 bg-white "
        style={{ width: `${scrollPercent}%` }}
        transition={{ ease: "easeOut", duration: 0.1 }}
      />
    </div>
  );
}
