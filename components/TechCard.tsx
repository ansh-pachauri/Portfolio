"use client";

import { motion } from "framer-motion";
import React from "react";

interface Skill {
  name: string;
}

interface SkillCardProps {
  skill: Skill;
}

export default function TechCard({ skill }: SkillCardProps) {
  return (
    <motion.div
      className="relative bg-black text-white p-4 w-auto max-w-[150px] h-[70px] text-center rounded-lg border border-zinc-800 shadow-glow hover:shadow-intense transition-all duration-500 hover:-translate-y-2 hover:scale-110 cursor-pointer"
      whileHover={{
        scale: 1.1,
      }}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-radial from-transparent to-zinc-900 opacity-0 hover:opacity-100 transition-opacity duration-500"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <h3 className="text-lg font-mono text-white mb-2 transition-all duration-300 hover:text-gradient">
          {skill.name}
        </h3>
      </div>
    </motion.div>
  );
}
