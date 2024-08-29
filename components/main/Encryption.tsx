
"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          About Me
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            👋{" "}
          </span>
          
        </motion.div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-right group cursor-pointer w-auto h-auto">
          <Image
            src="/Photo.jpeg"
            alt="Lock top"
            width={300}
            height={300}
            className="w-[300px] translate-y-5 transition-all duration-200 group-hover:translate-y-15 items-center"
          />
          
        </div>

        <div className="Welcome-box px-[15px] py-[2px] z-[10] border my-[20px] border-[#7042f88b] opacity-[0.9] break-words">
          <h1 className="Welcome-text text-[20px] justify-center break-words">My Name is Pariyashi Sahu, I am a final year student at Jaypee Institute of Information Technology, Noida, majoring in Computer Science And Engineering.  <br/>
          I am looking forward to opportunities in the field of Data Analytics and Web development, I look forward to work in various projects that involves sustainability and innovation. </h1>
        </div>
      </div>
      <div className="absolute z-[20] bottom-[10px] px-[5px]">
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
          Looking forward to work with you!
        </div>
      </div>

      <div className="w-full flex items-start justify-center absolute">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="false"
          className="w-full h-auto"
          src="/encryption.webm/"
        />
      </div>
    </div>
  );
};

export default Encryption;
