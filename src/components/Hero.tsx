import { motion } from "motion/react";

export default function Hero() {
  const container = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
        delay: 1.5,
      },
    },
  };

  const wordAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.5,
      },
    }),
  };

  const title = "Hi, I'm Ratul";

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen text-center"
      initial="hidden"
      animate="visible"
      variants={container}
      id="home"
    >
      <h1 className="text-5xl font-bold mb-4">
        {title.split(" ").map((word, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={wordAnimation}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        ))}
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="text-lg text-gray-500"
      >
        Full-Stack Developer • MERN • React.js • Web Enthusiast
      </motion.p>
    </motion.div>
  );
}
