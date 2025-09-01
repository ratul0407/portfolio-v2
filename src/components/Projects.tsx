"use client";
import { motion, type Variants } from "motion/react";
import { Link } from "react-router";
import plantlifeImg from "../assets/images/plantlife.png";
import parcelImg from "../assets/images/Eparcel.png";
import studyCollab from "../assets/images/collabStudy.png";
import { RiExternalLinkFill } from "react-icons/ri";
const projects = [
  {
    id: 1,
    title: "PlantLife",
    description: "E-commerce site made for the modern world",
    image: plantlifeImg,
    liveLink: "https://rplantlife.netlify.app",
    detailsLink: "/projects/1",
  },
  {
    id: 2,
    title: "EParcel",
    description: "A Parcel delivery system to make life easier",
    image: parcelImg,
    liveLink: "https://parcel-delivery-frontend.vercel.app/",
    detailsLink: "/projects/2",
  },
  {
    id: 3,
    title: "Study Collab",
    description: "A course selling platform.",
    image: studyCollab,
    liveLink: "https://bistro-boss-86657.web.app/",
    detailsLink: "/projects/3",
  },
];

const fadeIn = (direction: "left" | "right"): Variants => {
  return {
    hidden: { opacity: 0, x: direction === "left" ? -80 : 80 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };
};

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Featured Projects
        </motion.h2>

        <div className="flex flex-col gap-32">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.3 }}
              className={`grid md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <motion.div
                variants={fadeIn(index % 2 === 0 ? "right" : "left")}
                className="overflow-hidden rounded-2xl shadow-lg"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </motion.div>

              {/* Text */}
              <motion.div
                variants={fadeIn(index % 2 === 0 ? "left" : "right")}
                className="space-y-6"
              >
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p className="text-gray-300 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex gap-4 items-center">
                  <Link to={project.detailsLink}>
                    <button className="bg-white text-black p-2 rounded-lg hover:text-white hover:bg-black  cursor-pointer hover:border-white border border-white">
                      View Details
                    </button>
                  </Link>
                  <Link
                    to={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="px-5 py-2 rounded-xl border border-gray-400 hover:bg-gray-800 transition ">
                      <RiExternalLinkFill />
                    </button>
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
