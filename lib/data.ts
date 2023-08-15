import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Hem",
    hash: "#home",
  },
  {
    name: "Lucas",
    hash: "#about",
  },
  {
    name: "Projekt",
    hash: "#projects",
  },
  {
    name: "Kunskaper",
    hash: "#skills",
  },
  {
    name: "Erfarenhet",
    hash: "#experience",
  },
  {
    name: "Kontakt",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Gjorde klart Webbutveckling 1",
    location: "Trelleborg, Sverige",
    description:
      "Jag studerade på distans inom Webbutveckling där vi fick lära oss grunderna om hemsidor, detta var på starten av Corona och jag gick ut med ett D.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Självstudier",
    location: "Trelleborg, Sverige",
    description:
      "Dessa 2 åren lärde jag mig HTML, CSS, JavaScript och att skapa UI/UX Designs till hemsidor och appar med Photoshop och Figma",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Utvecklare",
    location: "Kristianstad, Sverige",
    description:
      "Sen 2 år tillbaka har jag fokuserat på att lära mig React, Node.js, Next.js och Express. Inom backend har jag lärt mig MongoDB, Prisma och Sanity för o nämna några få.",
    icon: React.createElement(FaReact),
    date: "2021 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "3D T-Shirt Customizer",
    description:
      "Detta är ett projekt jag avslutade för 2 månader.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "DALL-E Clone",
    description:
      "Detta är en hemsida som är kopplad till OPENAIs API och kan generera AI bilder",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "OPENAI"],
    imageUrl: rmtdevImg,
  },
  {
    title: "5in1 AI Tools",
    description:
      "Detta är en hemsida som är kopplad till OpenAI som kan generera kod, text, bilder, ljud och video.",
    tags: ["React", "Next.js", "OpenAI", "Tailwind", "Framer", "API"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "Photoshop",
  "AI",
  "Express",
  "Sanity",
  "ThreeJS",
  "Django",
  "Framer Motion",
] as const;
