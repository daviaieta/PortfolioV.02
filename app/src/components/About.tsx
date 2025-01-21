"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export const About = () => {
  return (
    <section className="py-16 lg:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-7 space-y-6"
          >
            <h2 className="text-3xl lg:text-5xl font-bold font-Ovo">
              About Me
            </h2>
            <p className="text-muted-foreground text-lg font-Ovo">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores beatae possimus eos architecto tempora saepe excepturi
              provident? Recusandae, tempore nam sapiente quo sit ducimus,
              commodi debitis repellendus facere voluptatum cumque?
            </p>
            <div>
              <h3 className="text-xl lg:text-2xl font-semibold font-Ovo mb-3">
                My Skills
              </h3>
              <div className="flex flex-wrap gap-4">
                <img src="https://skillicons.dev/icons?i=ts,js,python,nodejs,aws,mysql,react,nextjs,tailwind" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
