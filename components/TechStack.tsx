import IconCloud from "./ui/icon-cloud";

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
    <div>
      <div className=" font-bold text-5xl flex justify-center">
        <h1>Tech Stack</h1>
      </div>
      <div className="flex justify-between items-end">
        <IconCloud iconSlugs={slugs} />
      </div>
    </div>
  );
};
