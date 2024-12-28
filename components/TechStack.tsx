"use client";

import IconCloud from "./ui/icon-cloud";
import TechCard from "./TechCard";

const skills = [
  { name: "HTML"},
  { name: "CSS" },
  { name: "Javascript" },
  { name: "Typescript" },
  { name: "Tailwind CSS" },
  { name: "Moongo DB" },
  { name: "Posgress SQL" },
  { name: "Prisma" },
  { name: "Next.js" },
  { name: "Python" },
  { name: "Generative AI" },
];

const slugs = [
  "typescript",
  "javascript",
  "dart",
  "java",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "prisma",
  "amazonaws",
  "postgresql",
  "firebase",
  "nginx",
  "vercel",
  "testinglibrary",
  "jest",
  "cypress",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "visualstudiocode",
  "androidstudio",
  "sonarqube",
  "figma",
];

export const TechStack = () => {
  return (
    <div className="min-h-screen  bg-gray-50 flex-col ">
      <div className="bg-black text-white text-center py-8 font-bold shadow-md w-full flex justify-center">
        <h1 className="text-5xl font-bold">Tech Stack</h1>
      </div>
      <div className="flex flex-row justify-center items-center h-1/2 pt-10 pb-10">
      <div className="flex justify-between items-end">
        <IconCloud iconSlugs={slugs} />
      </div>
      <div className="container mx-auto max-w-[70%] sm:max-w-[75%] md:max-w-[60%] flex items-center justify-center">
        {/* Cards for tech stack */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 gap-y-2 px-4 mt-8 mb-auto">
        {skills.map((skill) => (
          <TechCard  key={skill.name} skill={skill} />
        ))}
        </div>
      
      </div>
      </div>
    </div>
  );
};
