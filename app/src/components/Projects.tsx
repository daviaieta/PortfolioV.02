"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsGithub } from "react-icons/bs";

const projects = [
  {
    title: "ConfirmMe",
    description: "System developed for managing free and private events",
    image: "/images/projects/confirmme.png",
    link: "https://github.com/daviaieta/ConfirmMe",
    technologies: ["typescript", "nodejs", "react", "nextjs", "mysql"],
  },
];

export const Projects = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <section id="projects" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold font-Ovo text-gray-800 mb-4">
            My Projects
          </h2>
          <p className="text-muted-foreground text-lg font-Ovo text-gray-600">
            Here are some of my recent works
          </p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              ref={ref}
              style={{
                scale: scaleProgess,
                opacity: opacityProgess,
              }}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <motion.div className="group mb-3 sm:mb-8 last:mb-0">
                <div className="relative h-48">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    layout="fill"
                    objectFit="cover"
                    objectPosition="center top"
                  />
                </div>
              </motion.div>
              <div className="p-6">
                <h3 className="text-xl font-bold font-Ovo text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies?.map((tech) => (
                    <div
                      key={tech}
                      className="flex items-center bg-gray-100 rounded-full px-3 py-1"
                    >
                      <img
                        src={`https://skillicons.dev/icons?i=${tech}`}
                        alt={`${tech} icon`}
                        className="w-4 h-4 mr-2"
                      />
                      <span className="text-xs font-medium text-gray-700">
                        {tech}
                      </span>
                    </div>
                  ))}
                </div>
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all duration-300 py-2 px-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
                >
                  <span>View Project</span>
                  <BsGithub className="w-5 h-5 text-gray-700" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
