"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

export const Hero = () => {
  return (
    <section className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-7 space-y-6"
          >
            <h1 className="text-4xl lg:text-6xl font-extrabold">
              Hello, I'm{" "}
              <span className="text-primary">
                <TypeAnimation
                  sequence={["Davi Carvalho", 1000, "a Developer 💻", 1000]}
                  wrapper="span"
                  speed={25}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <p className="text-muted-foreground text-lg lg:text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
              laborum, tenetur omnis eius nulla ratione repellat quibusdam
              corporis culpa blanditiis quaerat molestiae nemo! Voluptas
              suscipit perspiciatis quibusdam commodi molestiae odit!
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="col-span-5 place-self-center"
          >
            <div className="relative w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]">
              <Image
                src="/images/daviaieta.png"
                alt="Davi Carvalho"
                fill
                className="rounded-full object-cover border-4 border-primary shadow-lg"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
