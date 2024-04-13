import React from "react";
import ProjectCard from "./sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/labourlink.jpeg"
          title="LabourLink- A portal for labourers"
          description="A website built using Reactjs for labourers to get work by simply registring themselves on the portal, it uses APIs of Razorpay, Firebase and EmailJS. "
          
        />
        <ProjectCard
    
          src="/insightify.jpeg"
          title="PDF summariser and Comprehension solver"
          description="It is built using the Natural Language Processing model based on Chatgpt for summarizing and chatting with multiple PDFs at a time."
          
        />
        
        <ProjectCard
           src="/weather.png" 
          title="Weather forecast- API"
          description="It is a weather forecasting website which includes Cities from around the world."
        />
      </div>
    </div>
  );
};

export default Projects;