"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useInView, Variants } from "framer-motion";
import { ExternalLink, Github, X, Code, Globe, ImageIcon } from "lucide-react";
import bkj1 from "../assets/bkj/Screenshot 2025-12-30 103942.png";
import bkj2 from "../assets/bkj/Screenshot 2025-12-30 104004.png";
import bkj3 from "../assets/bkj/Screenshot 2025-12-30 104026.png";
import tapovan1 from "../assets/tapovan/Screenshot 2025-12-30 104158.png";

import travelexp1 from "../assets/trip=expense/Screenshot (98).png";
import travelexp2 from "../assets/trip=expense/Screenshot 2025-12-30 124034.png";
import travelexp3 from "../assets/trip=expense/Screenshot 2025-12-30 124058.png";

import pte1 from "../assets/pte/Screenshot 2025-12-30 124840.png";
import pte2 from "../assets/pte/Screenshot 2025-12-30 124953.png";
import pte3 from "../assets/pte/Screenshot 2025-12-30 125019.png";
import pte4 from "../assets/pte/Screenshot 2025-12-30 125106.png";
import pte5 from "../assets/pte/Screenshot 2025-12-30 125125.png";

import paste1 from "../assets/paste/Screenshot 2025-12-30 125654.png";
import paste2 from "../assets/paste/Screenshot 2025-12-30 125713.png";
import paste3 from "../assets/paste/Screenshot 2025-12-30 125742.png";

import sone1 from "../assets/sonnect/Screenshot 2025-12-30 131342.png";
import sone2 from "../assets/sonnect/Screenshot 2025-12-30 131407.png";
import sone3 from "../assets/sonnect/Screenshot 2025-12-30 131428.png";
import sone4 from "../assets/sonnect/Screenshot 2025-12-30 131453.png";
import sone5 from "../assets/sonnect/Screenshot 2025-12-30 131517.png";

import mark1 from "../assets/marks/Screenshot 2025-12-30 131907.png";
import mark2 from "../assets/marks/Screenshot 2025-12-30 131920.png";
import mark3 from "../assets/marks/Screenshot 2025-12-30 131945.png";
import mark4 from "../assets/marks/Screenshot 2025-12-30 132008.png";


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
    screenshots: [
      bkj1,
      bkj2,
      bkj3, 
    ],
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
    screenshots: [
      "https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1326947/pexels-photo-1326947.jpeg?auto=compress&cs=tinysrgb&w=800",
    ],
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
    screenshots: [
      paste1,
      paste2,
      paste3,
    ],
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
    liveUrl: "https://ms-pte.vercel.app/",
    githubUrl: "#",
    image:
      "https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&w=800",
    screenshots: [
      pte1,
      pte2,
      pte3,
      pte4,
      pte5,
    ],
    category: "Education",
  },
  {
    id: 5,
    title: "Student Marks Portal",
    shortDescription: "Academic performance tracking system",
    fullDescription:
      "A centralized portal for educational institutions to manage and publish student results. It allows teachers to upload marks securely and enables students to view their performance history through interactive visualizations.",
    technologies: ["React.js", "Node.js", "MongoDB", "Recharts"],
    features: [
      "Secure result publishing",
      "Student performance graphs",
      "PDF Report generation",
      "Bulk data upload",
    ],
    liveUrl: "https://studentmarks-theta.vercel.app/",
    githubUrl: "#",
    image:
      "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
    screenshots: [
      mark1,
      mark2,
      mark3,
      mark4,
    ],
    category: "Education",
  },
  {
    id: 6,
    title: "Trip Expense Manager",
    shortDescription: "Smart budget tracking for group travel",
    fullDescription:
      "An intuitive application designed to solve the chaos of splitting bills during group trips. It tracks shared expenses, calculates 'who owes who' in real-time, and supports multiple currencies for international travel.",
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    features: [
      "Group expense splitting",
      "Multi-currency support",
      "Offline functionality",
      "Expense categorization",
    ],
    liveUrl: "https://trip-expense-app.vercel.app/",
    githubUrl: "#",
    image:
      "https://images.pexels.com/photos/346796/pexels-photo-346796.jpeg?auto=compress&cs=tinysrgb&w=800",
    screenshots: [
      travelexp1,
      travelexp2,
      travelexp3,
    ],
    category: "Finance",
  },
  {
    id: 7,
    title: "SConnect Website",
    shortDescription: "Interactive 3D Solar Rath experience",
    fullDescription:
      "A cutting-edge 3D website built to showcase the 'Solar Rath'. This project utilizes WebGL technologies to render an interactive 3D model directly in the browser, allowing users to explore the solar vehicle's features in an immersive environment.",
    technologies: ["React.js", "Three.js", "React Three Fiber", "Tailwind CSS"],
    features: [
      "Interactive 3D Model",
      "360-degree view control",
      "Smooth animations",
      "Performance optimized rendering",
    ],
    liveUrl: "https://sconnect-mu.vercel.app/",
    githubUrl: "#",
    image:
      "https://images.pexels.com/photos/356036/pexels-photo-356036.jpeg?auto=compress&cs=tinysrgb&w=800",
    screenshots: [
      sone1,
      sone2,
      sone3,
      sone4,
      sone5,
    ],
    category: "3D Web",
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
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="projects"
      className="py-20 section-padding bg-surface/50"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            full-stack and creative development
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              className="glass-effect border border-border/50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col h-full"
              variants={cardVariants}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedProject(project.id)}
            >
              <div className="relative overflow-hidden h-48 flex-shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide shadow-sm">
                  {project.category}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-text-primary group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-muted mb-4 text-sm leading-relaxed flex-grow">
                  {project.shortDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-primary/5 text-primary text-xs rounded-md border border-primary/10"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs rounded-md">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border/50">
                  <span className="text-primary text-sm font-medium group-hover:text-primary/80 flex items-center gap-1">
                    Details{" "}
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </span>
                  <div className="flex space-x-3">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-primary transition-colors p-1"
                      whileHover={{ scale: 1.1 }}
                      onClick={(e) => e.stopPropagation()}
                      title="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-text-muted hover:text-primary transition-colors p-1"
                      whileHover={{ scale: 1.1 }}
                      onClick={(e) => e.stopPropagation()}
                      title="Source Code"
                    >
                      <Github className="w-4 h-4" />
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
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = projects.find((p) => p.id === selectedProject);
                if (!project) return null;

                return (
                  <div>
                    {/* Header Image */}
                    <div className="relative h-64 md:h-80">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors backdrop-blur-md"
                      >
                        <X className="w-5 h-5" />
                      </button>

                      <div className="absolute bottom-6 left-6 md:left-8 text-white">
                        <span className="bg-primary px-3 py-1 rounded-full text-xs font-semibold mb-2 inline-block">
                          {project.category}
                        </span>
                        <h3 className="text-3xl md:text-4xl font-bold shadow-sm">
                          {project.title}
                        </h3>
                      </div>
                    </div>

                    <div className="p-6 md:p-8">
                      {/* Action Buttons */}
                      <div className="flex flex-col sm:flex-row gap-4 mb-8">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center space-x-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl transition-all shadow-md hover:shadow-lg font-medium"
                        >
                          <Globe className="w-5 h-5" />
                          <span>View Live Demo</span>
                        </a>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 flex items-center justify-center space-x-2 bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-xl transition-all font-medium border border-gray-200"
                        >
                          <Code className="w-5 h-5" />
                          <span>View Source Code</span>
                        </a>
                      </div>

                      {/* Content Grid */}
                      <div className="grid md:grid-cols-3 gap-8 mb-8">
                        <div className="md:col-span-2">
                          <h4 className="text-lg font-semibold mb-3 text-gray-900">
                            Project Overview
                          </h4>
                          <p className="text-gray-600 leading-relaxed text-base mb-6">
                            {project.fullDescription}
                          </p>

                          <h4 className="text-lg font-semibold mb-3 text-gray-900">
                            Key Features
                          </h4>
                          <ul className="grid sm:grid-cols-2 gap-3">
                            {project.features.map((feature) => (
                              <li
                                key={feature}
                                className="flex items-start space-x-2 text-gray-600 bg-gray-50 p-3 rounded-lg"
                              >
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                                <span className="text-sm">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="md:col-span-1">
                          <div className="bg-gray-50 rounded-xl p-5 border border-gray-100 sticky top-4">
                            <h4 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">
                              Tech Stack
                            </h4>
                            <div className="flex flex-wrap gap-2">
                              {project.technologies.map((tech) => (
                                <span
                                  key={tech}
                                  className="bg-white text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-gray-200 shadow-sm"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Project Gallery / Screenshots Section */}
                      {project.screenshots &&
                        project.screenshots.length > 0 && (
                          <div className="border-t border-gray-100 pt-8">
                            <h4 className="text-xl font-bold mb-6 text-gray-900 flex items-center gap-2">
                              <ImageIcon className="w-5 h-5 text-primary" />
                              Project Gallery
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {project.screenshots.map((shot, index) => (
                                <motion.div
                                  key={index}
                                  className="group relative rounded-xl overflow-hidden cursor-pointer shadow-md border border-gray-100"
                                  initial={{ opacity: 0, y: 20 }}
                                  whileInView={{ opacity: 1, y: 0 }}
                                  viewport={{ once: true }}
                                  transition={{ delay: index * 0.1 }}
                                  whileHover={{ y: -4 }}
                                  onClick={() => window.open(shot, "_blank")}
                                >
                                  <div className="aspect-video bg-gray-100">
                                    <img
                                      src={shot}
                                      alt={`${project.title} screenshot ${
                                        index + 1
                                      }`}
                                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                  </div>
                                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                    <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity font-medium bg-black/50 px-3 py-1 rounded-full text-sm backdrop-blur-sm">
                                      View Full Image
                                    </span>
                                  </div>
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        )}
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