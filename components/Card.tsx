import React from "react";
interface CardProps {
  title: string;
  description: string;
  imageSrc: string;
  gitLink: string;
  demoLink: string;
}

export const Card:React.FC<CardProps> = ({title,description,imageSrc, gitLink,demoLink}) => {
  return <div>
    <div className="relative group max-w-sm bg-gray-800 rounded-lg overflow-hidden shadow-md">
  <img
    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
    src={imageSrc}
    alt="Project Screenshot"
  />
  <div className="p-4 text-white">
    <h3 className="text-lg font-bold">{title}</h3>
    <p className="text-gray-400 mt-2">{description}</p>
    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <a
        href={gitLink}
        className="text-blue-500"
        target="_blank"
      >
        View Code
      </a>
      <span className="mx-2">|</span>
      <a
        href={demoLink}
        className="text-blue-500"
        target="_blank"
      >
        Live Demo
      </a>
    </div>
  </div>
</div>

  </div>;
};