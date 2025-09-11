"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { ExternalLink, Github, X, Code, Globe } from "lucide-react";
import image from "../assets/Screenshot (237).png";

const projects = [
  {
    id: 1,
    title: "Balkrushna Jewellers",
    shortDescription: "E-commerce website for jewelry business",
    fullDescription:
      "Independently sourced and delivered a comprehensive e-commerce website for Balkrushna Jewellers. The project involved creating a user-friendly interface for showcasing jewelry products, implementing shopping cart functionality, and ensuring mobile responsiveness.",
    technologies: [
      "React.js",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Stripe API",
    ],
    features: [
      "Product catalog",
      "Ring measurment tool",
      "Digital gold",
      "Admin dashboard",
    ],
    liveUrl: "https://www.balkrushnajewellers.com/",
    githubUrl: "#",
    image:
      "https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "E-commerce",
  },
  {
    id: 2,
    title: "Tapovan School",
    shortDescription: "Educational platform for school management",
    fullDescription:
      "Developed a school stock management system for Tapovan School to handle inventory tracking, procurement, and distribution of resources. The platform provided real-time stock updates, reduced manual record-keeping, and improved accountability in managing school supplies.",
    technologies: ["React.js", "PostgreSQL", "Material-UI", "Node.js"],
    features: [
      "Inventory management",
      "Stock tracking and reporting",
      "Role-based access control",
      "Automated alerts for low stock",
    ],
    liveUrl: "#",
    githubUrl: "#",
    image:
      "https://images.pexels.com/photos/289737/pexels-photo-289737.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Education",
  },
  {
    id: 3,
    title: "Paste App",
    shortDescription: "Modern clipboard and note-sharing application",
    fullDescription:
      "Created a modern paste and note-sharing application with real-time collaboration features. Users can create, share, and collaborate on text documents with syntax highlighting and expiration settings.",
    technologies: ["React.js", "Express.js", "PostgreSQL"],
    features: [
      "Real-time collaboration",
      "Syntax highlighting",
      "Expiration settings",
      "Share links",
    ],
    liveUrl: "https://paste-app-nine-beta.vercel.app/",
    githubUrl: "#",
    image:
      "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Productivity",
  },
  {
    id: 4,
    title: "PTE Preparation",
    shortDescription: "Online platform for PTE exam preparation",
    fullDescription:
      "Developed a comprehensive PTE (Pearson Test of English) preparation platform featuring practice tests, speaking exercises, and performance analytics. The platform helped students improve their English proficiency through structured learning modules.",
    technologies: ["React.js", "Web Audio API", "Chart.js", "Firebase"],
    features: [
      "Practice tests",
      "Speaking exercises",
      "Performance analytics",
      "Progress tracking",
    ],
    liveUrl: "#",
    githubUrl: "#",
    image: image,
    category: "Education",
  },
];

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 section-padding bg-surface/50"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-text-muted text-lg max-w-2xl mx-auto">
            A showcase of live projects that demonstrate my expertise in
            full-stack development
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="glass-effect border border-border/50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group"
              variants={cardVariants}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-text-primary group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-muted mb-4 leading-relaxed">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-3 py-1 bg-gray-200 text-gray-600 text-sm rounded-full">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-primary font-medium group-hover:text-primary/80">
                    View Details →
                  </span>
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.liveUrl}
                      className="text-text-muted hover:text-primary transition-colors"
                      whileHover={{ scale: 1.2 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      className="text-text-muted hover:text-primary transition-colors"
                      whileHover={{ scale: 1.2 }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = projects.find((p) => p.id === selectedProject);
                if (!project) return null;

                return (
                  <div>
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover"
                      />
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="absolute top-4 right-4 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full transition-colors"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>

                    <div className="p-8">
                      <div className="flex items-center justify-between mb-6">
                        <h3 className="text-3xl font-bold text-gray-800">
                          {project.title}
                        </h3>
                        <div className="flex flex-col sm:flex-row gap-3 w-full">
                          <a
                            href={project.liveUrl}
                            className="flex items-center justify-center space-x-2 bg-primary hover:bg-primary/80 text-white px-4 py-2 rounded-lg transition-colors w-full sm:w-auto"
                          >
                            <Globe className="w-4 h-4" />
                            <span>Live Demo</span>
                          </a>
                          <a
                            href={project.githubUrl}
                            className="flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-900 text-white px-4 py-2 rounded-lg transition-colors w-full sm:w-auto"
                          >
                            <Code className="w-4 h-4" />
                            <span>Source Code</span>
                          </a>
                        </div>
                      </div>

                      <p className="text-gray-600 leading-relaxed mb-8 text-lg">
                        {project.fullDescription}
                      </p>

                      <div className="grid md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-xl font-semibold mb-4 text-gray-800">
                            Technologies Used
                          </h4>
                          <div className="flex flex-wrap gap-3">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="bg-primary/10 text-primary px-4 py-2 rounded-lg font-medium border border-primary/20"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="text-xl font-semibold mb-4 text-gray-800">
                            Key Features
                          </h4>
                          <ul className="space-y-2">
                            {project.features.map((feature) => (
                              <li
                                key={feature}
                                className="flex items-center space-x-2 text-gray-600"
                              >
                                <div className="w-2 h-2 bg-primary rounded-full" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
