import { motion } from "motion/react";

const projects = [
  {
    title: "Project One",
    summary: "A short summary about project one. Explain what it does.",
    image: "/projects/project1.png",
    link: "#",
  },
  {
    title: "Project Two",
    summary: "A short summary about project two. Highlight its features.",
    image: "/projects/project2.png",
    link: "#",
  },
  {
    title: "Project Three",
    summary: "A short summary about project three. Explain tech used.",
    image: "/projects/project3.png",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-20 px-6 md:px-20 bg-black text-white"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
        My <span className="text-indigo-500">Projects</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }} // trigger once, when 30% visible
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
          >
            {/* Image */}
            <div className="overflow-hidden">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-t-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between h-48">
              <div>
                <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-300 text-sm">{project.summary}</p>
              </div>

              <motion.a
                href={project.link}
                className="mt-4 inline-block px-5 py-2 bg-indigo-500 text-white rounded-full font-semibold text-sm shadow-md hover:bg-indigo-600 hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05 }}
              >
                Project Details
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
