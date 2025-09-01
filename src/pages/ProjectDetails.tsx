import { Link, useParams } from "react-router";
import projectsData from "../data/projects.json";
import { motion } from "motion/react";
import plantLife from "../assets/images/plantlife.png";
import Eparcel from "../assets/images/Eparcel.png";
import studyCollab from "../assets/images/collabStudy.png";
import { SiGithub } from "react-icons/si";
export default function ProjectDetails() {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id.toString() === id);

  if (!project) return <p className="text-white p-6">Project not found!</p>;
  const getImage = (id: string) => {
    if (id === "1") {
      return plantLife;
    } else if (id === "2") {
      return Eparcel;
    } else {
      return studyCollab;
    }
  };
  return (
    <section className="min-h-screen bg-black text-white px-6 md:px-20 py-12">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center md:text-left mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-2">{project.title}</h1>
        <h2 className="text-xl md:text-2xl text-gray-400">
          {project.subtitle}
        </h2>
        <p className="mt-2 text-gray-500">
          Tech Stack: {project.stacks.join(", ")}
        </p>
        <div className="mt-3 flex items-center gap-3">
          <Link
            target="_blank"
            to={project.github}
            className="flex items-center bg-gray-800 px-4 py-1 rounded-full gap-3"
          >
            <SiGithub /> View Code
          </Link>
          <Link
            target="_blank"
            to={project["live-site"]}
            className="flex items-center bg-gray-800 px-4 py-1 rounded-full gap-3"
          >
            <SiGithub /> View Live Site
          </Link>
        </div>
      </motion.div>

      {/* Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="w-full mb-12 flex justify-center md:justify-start"
      >
        <img
          src={getImage(id as string)}
          alt={project.title}
          className="rounded-2xl shadow-lg w-full md:w-3/4 lg:w-2/3 object-cover"
        />
      </motion.div>

      {/* Overview */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-semibold mb-4">Overview</h3>
        <p className="text-gray-300 leading-relaxed">{project.overview}</p>
      </motion.div>

      {/* Features */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-semibold mb-4">Core Features</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          {project.features.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </motion.div>

      {/* Challenges */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-semibold mb-4">Challenges Faced</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          {project.challenges.map((challenge, i) => (
            <li key={i}>{challenge}</li>
          ))}
        </ul>
      </motion.div>

      {/* Future Features */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mb-12"
      >
        <h3 className="text-2xl font-semibold mb-4">Future Features</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          {project.futureFeatures.map((feature, i) => (
            <li key={i}>{feature}</li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
