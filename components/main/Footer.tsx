import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";
import { HiMail } from "react-icons/hi";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0300145e] backdrop-blur-sm border-t border-[#7042f88b] py-8 mt-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Social Links */}
        <div className="flex flex-col items-center justify-center gap-6">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Connect With Me
          </h2>
          
          {/* Social Icons */}
          <div className="flex gap-8 mb-8">
            <a
              href="https://github.com/justhappyuknow/My-Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-125 transition-transform duration-300"
            >
              <RxGithubLogo className="text-3xl text-white hover:text-purple-500" />
            </a>
            <a
              href="https://www.linkedin.com/in/pariyashi-sahu-b91614243/"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-125 transition-transform duration-300"
            >
              <RxLinkedinLogo className="text-3xl text-white hover:text-purple-500" />
            </a>
            <a
              href="https://twitter.com/PariyashiS"
              target="_blank"
              rel="noopener noreferrer"
              className="transform hover:scale-125 transition-transform duration-300"
            >
              <RxTwitterLogo className="text-3xl text-white hover:text-purple-500" />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex gap-8 text-white mb-8">
            <a 
              href="#projects" 
              className="hover:text-purple-500 transition-colors duration-300"
            >
              Projects
            </a>
            <a 
              href="#skills" 
              className="hover:text-purple-500 transition-colors duration-300"
            >
              Skills
            </a>
            <a 
              href="#certifications" 
              className="hover:text-purple-500 transition-colors duration-300"
            >
              Certifications
            </a>
          </div>

          {/* Contact */}
          <div className="text-center">
            <a
              href="mailto:manpari1979@gmail.com"
              className="flex items-center justify-center gap-2 text-white hover:text-purple-500 transition-colors duration-300"
            >
              <HiMail className="text-2xl" />
              manpari1979@gmail.com
            </a>
            <p className="text-gray-400 mt-2">
              Open to new opportunities
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8 pt-4 border-t border-gray-800">
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Pariyashi Sahu. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;