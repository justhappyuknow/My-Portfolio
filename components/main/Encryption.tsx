"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="flex flex-col relative items-center justify-center min-h-screen w-full h-full">
      {/* Background Video */}
      <div className="w-full h-full absolute top-0 left-0 z-[1]">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-full object-cover"
          src="/encryption.webm/"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-[20] flex flex-col items-center max-w-4xl w-full px-4">
        {/* Title */}
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-bold text-center text-gray-200 mb-8"
        >
          About Me
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            👋{" "}
          </span>
        </motion.div>

        {/* Profile Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 bg-[#0300145e] backdrop-blur-sm p-8 rounded-xl border border-[#7042f88b]">
          {/* Image */}
          <div className="flex-shrink-0">
            <Image
              src="/Photo.jpeg"
              alt="Profile Picture"
              width={300}
              height={300}
              className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Text Content */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-2xl font-semibold text-gray-200">
              Hi, I&apos;m Pariyashi Sahu
            </h2>
            <p className="text-gray-300 leading-relaxed">
            Hey there! I am evolving into a data-driven professional, passionate about analytics and uncovering insights from vast amounts of data. My expertise lies in big data technologies, data analytics, and applying machine learning algorithms to transform raw data into meaningful solutions.
With hands-on experience in tools like the ELK stack, Tableau, and Power BI, I specialize in converting complex datasets into actionable intelligence. I am deeply intrigued by the strategies and innovations behind every technology, constantly brainstorming to explore new possibilities.


            </p>
            <p className="text-gray-300 leading-relaxed">
          
I am currently interning at Cognida.ai, gaining invaluable exposure to AI-driven solutions. Previously, I interned at DRDO, where I explored data analytics and cybersecurity, enhancing my knowledge in these critical domains.
Let&apos;s talk data and innovation! 🚀

            </p>
            
            {/* Skills or Interests Tags */}
            <div className="flex flex-wrap gap-2 mt-4">
              {["Data Analytics", "Web Development", "Sustainability", "Innovation"].map((tag, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-[#7042f81c] rounded-full text-sm text-purple-400 border border-[#7042f88b]"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Text */}
        <div className="mt-8 text-xl font-medium text-gray-300 italic">
          "Looking forward to creating amazing things together!"
        </div>
      </div>
    </div>
  );
};

export default Encryption;
