"use client";
import React from "react";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

interface Certification {
  title: string;
  issuedBy: string;
  date: string;
  credentialLink: string;
  skills: string[];
  image: string;
}

const certificationData: Certification[] = [
  {
    title: "Data Analytics Professional Certificate",
    issuedBy: "Cisco Networking Academy",
    date: "2023",
    credentialLink: "https://www.credly.com/badges/8069ea93-5864-406c-a893-d72bf17d8b4b/linked_in_profile",
    skills: ["Data Analysis", "Python Programming", "SQL", "Tableau"],
    image: "/data.jpeg" // Add your certificate image
  },
  {
    title: "Data Structure and Algorithms in C++",
    issuedBy: "Udemy",
    date: "2023",
    credentialLink: "https://your-credential-link.com",
    skills: ["Data Structure", "C++", "OOPs"],
    image: "/dsa.jpeg" // Add your certificate image
  },
  {
    title: "Web Development Bootcamp",
    issuedBy: "Skolar",
    date: "2022",
    credentialLink: "https://your-credential-link.com",
    skills: ["React", "MongoDB", "Express", "Nodejs"],
    image: "/web.jpeg" // Add your certificate image
  },
  // Add more certifications as needed
];

const CertificationCard = ({ cert }: { cert: Certification }) => {
  return (
    <div className="flex flex-col bg-[#0300145e] backdrop-blur-sm border border-[#7042f88b] rounded-xl p-6 hover:scale-[1.02] transition-all duration-300">
      <div className="relative w-full h-48 mb-4">
        <Image
          src={cert.image}
          alt={cert.title}
          fill
          className="rounded-lg object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-200 mb-2">{cert.title}</h3>
      <p className="text-gray-400 mb-2">Issued by {cert.issuedBy} • {cert.date}</p>
      <div className="flex flex-wrap gap-2 mt-2 mb-4">
        {cert.skills.map((skill, index) => (
          <span
            key={index}
            className="px-2 py-1 bg-[#7042f81c] rounded-full text-xs text-purple-400 border border-[#7042f88b]"
          >
            {skill}
          </span>
        ))}
      </div>
      <a
        href={cert.credentialLink}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-auto text-center py-2 px-4 bg-[#7042f81c] hover:bg-[#7042f83b] border border-[#7042f88b] rounded-lg text-purple-400 transition-colors duration-300"
      >
        View Credential
      </a>
    </div>
  );
};

const Certifications = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20" id="certifications">
      {/* Title */}
      <motion.div
        variants={slideInFromTop}
        className="text-[40px] font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-12"
      >
        Certifications & Achievements
      </motion.div>

      {/* Certifications Grid */}
      <div className="w-full max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationData.map((cert, index) => (
            <CertificationCard key={index} cert={cert} />
          ))}
        </div>
      </div>

      {/* Additional Achievements Section */}
      <div className="mt-16 w-full max-w-4xl px-4">
        <div className="bg-[#0300145e] backdrop-blur-sm border border-[#7042f88b] rounded-xl p-8">
          <h3 className="text-2xl font-semibold text-gray-200 mb-4">Additional Achievements</h3>
          <ul className="list-disc list-inside space-y-3 text-gray-300">
            <li>Semi-finalist in Tata Imagination Challenge 2024- imaginethat idea pitch</li>
            <li>Myntra Hackerramp: Qualified for Implementation phase among 3000+ teams</li>
            <li>Top 125th team in ZS campus beat’s technical challenge, among a total of 4000+ teams</li>
            {/* Add more achievements as needed */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Certifications; 