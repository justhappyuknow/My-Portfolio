import React from "react";
import ProjectCard from "../sub/ProjectCard";

// Define a type for project data
interface Project {
  src: string;
  title: string;
  description: string;
}

// Create an array of projects
const projectData: Project[] = [
  {
    src: "/labourlink.jpeg",
    title: "LabourLink- A portal for labourers",
    description: "A website built using Reactjs for labourers to get work by simply registring themselves on the portal, it uses APIs of Razorpay, Firebase and EmailJS.",
  },
  {
    src: "/insightify.jpeg",
    title: "PDF summariser and Comprehension solver",
    description: "It is built using the Natural Language Processing model based on Chatgpt for summarizing and chatting with multiple PDFs at a time.",
  },
  {
    src: "/weather.png",
    title: "Weather forecast- API",
    description: "It is a weather forecasting website which includes Cities from around the world.",
  },
  {
    src: "/yogawings.jpeg", // You might want to update this image
    title: "Yoga-Wings",
    description: "Website for yoga practitioners to book classes and get to know about yoga.",
  },
  {
    src: "/yogawings.jpeg", // You might want to update this image
    title: "Yoga-Wings",
    description: "Website for yoga practitioners to book classes and get to know about yoga.",
  },
];

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="w-full overflow-x-auto px-4 pb-4">
        <div className="flex flex-row gap-8 min-w-min">
          {projectData.map((project, index) => (
            <div key={index} className="w-[330px] flex-shrink-0">
              <ProjectCard
                src={project.src}
                title={project.title}
                description={project.description}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;