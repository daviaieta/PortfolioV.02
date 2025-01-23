"use client";

import React from "react";
import { motion } from "framer-motion";

export const About = () => {
  const skills = [
    "ts",
    "js",
    "python",
    "nodejs",
    "aws",
    "mysql",
    "react",
    "nextjs",
    "tailwind",
  ];

  return (
    <section id="about-me" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl space-y-6 text-center"
          >
            <h2 className="text-3xl lg:text-5xl font-bold font-Ovo text-gray-800">
              About Me
            </h2>
            <p className="text-muted-foreground text-lg font-Ovo text-gray-800">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores beatae possimus eos architecto tempora saepe excepturi
              provident? Recusandae, tempore nam sapiente quo sit ducimus,
              commodi debitis repellendus facere voluptatum cumque?
            </p>
            <div>
              <h3 className="text-xl lg:text-2xl font-semibold font-Ovo mb-3 text-gray-800">
                Learning
              </h3>
              <motion.div
                className="flex flex-wrap justify-center gap-4"
                initial="hidden"
                animate="visible"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
              >
                {skills.map((skill) => (
                  <motion.div
                    key={skill}
                    className="group relative"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <img
                      src={`https://skillicons.dev/icons?i=${skill}`}
                      alt={`${skill} icon`}
                      className="w-12 h-12 transition-transform duration-300 ease-in-out group-hover:scale-110 group-hover cursor-pointer"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
