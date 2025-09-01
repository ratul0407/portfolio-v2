"use client";
import { useLocation, Outlet } from "react-router";
import { AnimatePresence, motion } from "motion/react";

const pageVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.6 } },
};

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname} // important for AnimatePresence to detect changes
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
      >
        <Outlet /> {/* renders the active route */}
      </motion.div>
    </AnimatePresence>
  );
}
