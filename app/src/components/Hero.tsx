"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { Github, GithubIcon, Linkedin } from "lucide-react";

export const Hero = () => {
  return (
    <section id="home" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="col-span-7 space-y-6"
          >
            <h1 className="text-4xl lg:text-6xl font-extrabold font-Ovo text-gray-800">
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
            <p className="text-muted-foreground text-lg lg:text-xl font-Ovo text-gray-800">
              Tenho 15 anos e sou um estudante de programação fullstack,
              explorando e aprendendo constantemente sobre o mundo da tecnologia
              para construir um futuro inovador.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-start gap-5 text-center">
              <Link
                href="#contact"
                className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition duration-300"
              >
                Contact me{" "}
                <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
              </Link>
              <a
                href="https://www.linkedin.com/in/davi-aieta/"
                target="_blank"
                className="bg-white rounded-full p-2"
              >
                <Linkedin className="w-5" />
              </a>
              <a
                href="https://github.com/daviaieta"
                target="_blank"
                className="bg-white rounded-full"
              >
                <GithubIcon className="w-5" />
              </a>
            </div>
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
                className="rounded-full object-cover border-2 shadow-sm"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
