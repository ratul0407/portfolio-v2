import { motion } from "motion/react";
import myImage from "../assets/images/my-img.jpg";
export default function About() {
  const container = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const title = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" as const },
    },
  };

  const paragraph = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  const image = {
    hidden: { opacity: 0, x: 50, scale: 0.95 },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" as const },
    },
  };

  return (
    <motion.section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 md:px-20 py-16 text-white bg-black"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }} // animate when 30% visible, only once
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl items-center">
        {/* LEFT: Text */}
        <div className="space-y-6">
          <motion.h2
            variants={title}
            className="text-4xl md:text-5xl font-bold mb-8"
          >
            About Me
          </motion.h2>

          <motion.p
            variants={paragraph}
            className="text-lg leading-relaxed text-gray-600 dark:text-gray-300"
          >
            "I’m a full-stack developer passionate about crafting smooth user
            experiences and scalable applications.",
          </motion.p>
          <motion.p
            variants={paragraph}
            className="text-lg leading-relaxed text-gray-600 dark:text-gray-300"
          >
            "I specialize in JavaScript, React, Node.js, and love working with
            modern frameworks like Next.js and TailwindCSS.",
          </motion.p>
          <motion.p
            variants={paragraph}
            className="text-lg leading-relaxed text-gray-600 dark:text-gray-300"
          >
            "Beyond coding, I enjoy gaming, reading, and exploring new
            technologies that push the web forward.",
          </motion.p>
        </div>

        {/* RIGHT: Image */}
        <motion.div
          variants={image}
          className="flex justify-center md:justify-end"
        >
          <img
            src={myImage} // replace with your image path
            alt="Your profile"
            className="rounded-2xl shadow-lg w-72 md:w-96 object-cover"
          />
        </motion.div>
      </div>
    </motion.section>
  );
}
