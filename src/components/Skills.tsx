import { useState } from "react";
import { motion } from "motion/react"; // Correct import – ensure this is used
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiRedux,
  SiGithub,
} from "react-icons/si";
import { IoLogoFirebase } from "react-icons/io5";
import { BiLogoPostgresql } from "react-icons/bi";

type TabType = "frontend" | "backend" | "database" | "utility";

const techStack = {
  frontend: [
    { name: "React", icon: <FaReact size={28} className="text-cyan-400" /> },
    {
      name: "Next.js",
      icon: <SiNextdotjs size={28} className="text-gray-900 dark:text-white" />,
    },
    {
      name: "TailwindCSS",
      icon: <SiTailwindcss size={28} className="text-sky-500" />,
    },
    {
      name: "Typescript",
      icon: <SiTypescript size={28} className="text-sky-500" />,
    },
    {
      name: "Javascript",
      icon: <SiJavascript size={28} className="text-yellow-500" />,
    },
    {
      name: "Redux",
      icon: <SiRedux size={28} className="text-violet-500" />,
    },
  ],
  backend: [
    {
      name: "Node.js",
      icon: <FaNodeJs size={28} className="text-green-600" />,
    },
    {
      name: "Express.js",
      icon: <SiExpress size={28} className="text-gray-700 dark:text-white" />,
    },
  ],
  database: [
    {
      name: "MongoDB",
      icon: <SiMongodb size={28} className="text-green-500" />,
    },

    {
      name: "PostgreSQL",
      icon: <BiLogoPostgresql size={28} className="text-violet-900" />,
    },
  ],
  utility: [
    {
      name: "Firebase",
      icon: <IoLogoFirebase size={28} className="text-yellow-500" />,
    },
    { name: "Github", icon: <SiGithub size={28} /> },
  ],
};

export default function TechTabs() {
  const [activeTab, setActiveTab] = useState<TabType>("frontend");

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 py-20  bg-black text-white"
      id="skills"
    >
      {/* Tabs */}
      <h3 className="text-4xl md:text-5xl font-bold mb-8">My SKills</h3>
      <div className="flex gap-3 mb-12">
        {(["frontend", "backend", "database", "utility"] as TabType[]).map(
          (tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 text-sm p-1 lg:py-2 rounded-full font-semibold transition ${
                activeTab === tab
                  ? "bg-black border border-slate-50 text-white"
                  : "bg-gray-100 text-black"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          )
        )}
      </div>

      {/* Icons */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="flex flex-wrap gap-6 justify-center"
      >
        {techStack[activeTab].map((tech) => (
          <HoverIcon key={tech.name} name={tech.name}>
            {tech.icon}
          </HoverIcon>
        ))}
      </motion.div>
    </section>
  );
}

function HoverIcon({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      variants={{
        initial: { width: "3.5rem", backgroundColor: "transparent" },
        hover: { width: "9rem", backgroundColor: "rgba(99, 102, 241, 0.15)" },
      }}
      initial="initial"
      whileHover="hover"
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className="flex items-center rounded-full px-3 py-2 overflow-hidden cursor-pointer"
      layout
    >
      {/* Icon */}
      <div className="flex-shrink-0">{children}</div>

      {/* Label */}
      <motion.span
        variants={{
          initial: { opacity: 0, maxWidth: 0, x: -10 },
          hover: { opacity: 1, maxWidth: 100, x: 0 },
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="ml-3 text-sm font-medium text-gray-700 dark:text-gray-200 whitespace-nowrap overflow-hidden "
      >
        {name}
      </motion.span>
    </motion.div>
  );
}
