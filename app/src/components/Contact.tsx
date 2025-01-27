"use client";

import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { BsArrowRight } from "react-icons/bs";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import emailjs from "emailjs-com";
import dotenv from "dotenv";
import sendEmail from "../../actions/sendEmail";

dotenv.config();

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setIsSending(true);
    try {
      await sendEmail(name, email, message);
      setIsSuccess(true);
    } catch (error) {
      setIsSuccess(false);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact" className="py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto space-y-8"
        >
          <div className="text-center">
            <h2 className="text-4xl lg:text-5xl font-extrabold font-Ovo text-gray-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-muted-foreground text-lg lg:text-xl font-Ovo text-gray-600 max-w-2xl mx-auto">
              Have a question or want to work together? I'm always open to
              discussing new projects, creative ideas or opportunities to be
              part of your visions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Mail className="w-8 h-8 text-gray-800 mb-2" />
              <p className="text-gray-600">aieta.davi@gmail.com</p>
            </div>
            <div className="flex flex-col items-center">
              <Phone className="w-8 h-8 text-gray-800 mb-2" />
              <p className="text-gray-600">+1 (385) 209-8195</p>
            </div>
            <div className="flex flex-col items-center">
              <MapPin className="w-8 h-8 text-gray-800 mb-2" />
              <p className="text-gray-600">Salt Lake City, USA</p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6 bg-white p-8 rounded-lg shadow-md"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Name
                </Label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                  required
                />
              </div>
              <div>
                <Label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Email
                </Label>
                <Input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                  required
                />
              </div>
            </div>
            <div>
              <Label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Message
              </Label>
              <Textarea
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                className="w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                required
              ></Textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-gray-900 text-white px-7 py-3 flex items-center justify-center gap-2 rounded-full outline-none focus:scale-105 hover:scale-105 hover:bg-gray-950 active:scale-100 transition duration-300"
            >
              Send Message
              <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
            </button>
          </form>

          <div className="flex justify-center items-center gap-6">
            <a
              href="https://www.linkedin.com/in/davi-aieta"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-3 hover:bg-gray-100 transition shadow-md"
            >
              <Linkedin className="w-6 h-6 text-gray-800" />
            </a>
            <a
              href="https://github.com/daviaieta"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-full p-3 hover:bg-gray-100 transition shadow-md"
            >
              <Github className="w-6 h-6 text-gray-800" />
            </a>
            <a
              href="mailto:aieta.davi@gmail.com?subject=Contact%20from%20Portfolio&body=Hello%20Davi,%20I%20would%20like%20to%20get%20in%20touch%20with%20you!"
              className="bg-white rounded-full p-3 hover:bg-gray-100 transition shadow-md"
            >
              <Mail className="w-6 h-6 text-gray-800" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
