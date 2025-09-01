"use client";

import { motion } from "motion/react";
import { useInView } from "react-intersection-observer";
import {
  LuMail,
  LuPhone,
  LuGithub,
  LuLinkedin,
  LuTwitter,
} from "react-icons/lu";

const Footer = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <footer
      ref={ref}
      className="relative bg-black text-white px-6 py-16 lg:px-24 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.15),transparent_70%)]" />

      <motion.div
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        variants={fadeUp}
        className="relative z-10 max-w-5xl mx-auto text-center"
      >
        <h2 className="text-3xl lg:text-4xl font-bold mb-6">
          Let’s Build Something Together
        </h2>
        <p className="text-gray-300 mb-12">
          Have an idea or a project in mind? Drop me a message and I’ll get back
          to you as soon as possible.
        </p>

        {/* Form */}
        <motion.form variants={fadeUp} className="space-y-6 text-left">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-semibold transition"
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Contact Info */}
        <div className="mt-12 space-y-4">
          <div className="flex justify-center items-center gap-3 text-gray-300">
            <LuMail className="w-5 h-5 text-blue-400" />
            <span>ratul@example.com</span>
          </div>
          <div className="flex justify-center items-center gap-3 text-gray-300">
            <LuPhone className="w-5 h-5 text-green-400" />
            <span>+880 123 456 7890</span>
          </div>
        </div>

        {/* Social Links */}
        <motion.ul
          variants={fadeUp}
          className="flex justify-center gap-6 mt-10"
        >
          <li>
            <a
              href="https://github.com/"
              target="_blank"
              className="hover:text-blue-400 transition-colors"
            >
              <LuGithub className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/"
              target="_blank"
              className="hover:text-blue-400 transition-colors"
            >
              <LuLinkedin className="w-6 h-6" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/"
              target="_blank"
              className="hover:text-blue-400 transition-colors"
            >
              <LuTwitter className="w-6 h-6" />
            </a>
          </li>
        </motion.ul>
      </motion.div>

      {/* Bottom Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="relative z-10 mt-16 text-gray-400 text-sm text-center"
      >
        © {new Date().getFullYear()} Ratul. All Rights Reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
