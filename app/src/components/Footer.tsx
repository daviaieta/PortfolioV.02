import Link from "next/link";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-100 border-t">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8 md:flex md:items-center md:justify-between">
          <div className="text-center md:text-left">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} Davi Carvalho. All rights
              reserved.
            </p>
            <p className="mt-2 text-sm text-gray-500">
              Fullstack Developer Student
            </p>
          </div>
          <div className="mt-4 flex justify-center md:mt-0">
            <Link
              href="https://github.com/daviaieta"
              className="text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">GitHub</span>
              <Github className="h-6 w-6" />
            </Link>
            <Link
              href="https://linkedin.com/in/davi-aieta"
              className="ml-6 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">LinkedIn</span>
              <Linkedin className="h-6 w-6" />
            </Link>
            <Link
              href="mailto:aieta.davi@gmail.com"
              className="ml-6 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Email</span>
              <Mail className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
