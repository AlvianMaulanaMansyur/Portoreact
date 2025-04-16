// src/constants/techStack.ts
import { SiReact, SiJavascript, SiTailwindcss, SiHtml5, SiCss3, SiPhp, SiLaravel, SiBootstrap, } from "react-icons/si";
import { IconType } from "react-icons";

export type Tech = {
  name: string;
  icon: IconType;
  color?: string;
  
};

export const techStack: Tech[] = [
  { name: "HTML", icon:  SiHtml5, color: "#E34F26" },
  { name: "CSS", icon: SiCss3, color: "#1572B6" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Bootstrap", icon: SiBootstrap, color: "#7952B3" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "PHP", icon: SiPhp, color: "#4F5B93" },
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
];
