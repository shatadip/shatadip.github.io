// ProjectsSection.tsx

"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tag: string[];
  gitUrl: string;
  previewUrl: string;
}

const projectsData: Project[] = [
  {
    id: 1,
    title: "Postmann Chrome Extension",
    description: "Perform API testing with Postmann, inspired by Postman. Handle GET, POST, PUT, PATCH, DELETE HTTP requests with precision.",
    image: "/images/chrome-extensions/7.png",
    tag: ["All", "Chrome Extensions"],
    gitUrl: "https://github.com/shatadip/Postmann",
    previewUrl: "https://chromewebstore.google.com/detail/postmann/okonkfbibmnmlpcookfdplminfemfhgf",
  },
  {
    id: 2,
    title: "Emoji Keyboard 1999 Chrome Extension",
    description: "Lets you [Insert] and [Copy] Emojis. It's Fast, Reliable, Open Source, and Free!",
    image: "/images/chrome-extensions/10.png",
    tag: ["All", "Chrome Extensions"],
    gitUrl: "https://github.com/shatadip/Emoji-Keyboard-1999",
    previewUrl: "https://chrome.google.com/webstore/detail/igaghopjhplffamlgcaenidboejilmca",
  },
  {
    id: 3,
    title: "CatNote Chrome Extension",
    description: "A No-Login Feature-rich Notes App, powered by IndexedDB.",
    image: "/images/chrome-extensions/2.png",
    tag: ["All", "Chrome Extensions"],
    gitUrl: "https://github.com/shatadip/CatNote",
    previewUrl: "https://chromewebstore.google.com/detail/catnote/acdggeipfifogjpidepmofmpkifhgfef",
  },
  {
    id: 4,
    title: "TubeIt Chrome Extension",
    description: "Instantly open YouTube using the current search term, tab title, or selected text with the right-click context menu / Alt+Y shortcut.",
    image: "/images/chrome-extensions/5.png",
    tag: ["All", "Chrome Extensions"],
    gitUrl: "https://github.com/shatadip/YouTube-It",
    previewUrl: "https://chromewebstore.google.com/detail/tube-it/nappkhapnblmmjhhainmjheeilgkmgjg",
  },
  {
    id: 5,
    title: "Launch your Website for free with GitHub Pages",
    description: "A course that breaks down each step to host your own website with GitHub Pages, which will be FREE forever.",
    image: "/images/sc1280720/12.png",
    tag: ["All", "Courses"],
    gitUrl: "https://www.skillshare.com/en/classes/Launch-your-Website-for-free-with-GitHub-Pages/1942079283?via=user-profile",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Time Management & Productivity Deep Dive",
    description: "A course to help you build your own time management/productivity framework that works exclusively for you.",
    image: "/images/sc1280720/7.png",
    tag: ["All", "Courses"],
    gitUrl: "https://www.udemy.com/course/time-management-and-productivity-deep-dive/?referralCode=135DE20E4FABEE99F097",
    previewUrl: "/",
  },
  {
    id: 7,
    title: "CV / Resume for Experienced & Freshers",
    description: "A course on how you can prepare a professional resume whether you are a fresher or an experienced candidate.",
    image: "/images/sc1280720/1.png",
    tag: ["All", "Courses"],
    gitUrl: "https://www.udemy.com/course/cv-resume-for-experienced-freshers/?referralCode=EE7CD8431422C202601B",
    previewUrl: "/",
  },
  {
    id: 8,
    title: "Happiness Secrets",
    description: "A Happiness Course, broken down into 7 simple steps, to help you achieve everlasting happiness and rapid growth.",
    image: "/images/sc1280720/hs.png",
    tag: ["All", "Courses"],
    gitUrl: "https://www.skillshare.com/en/classes/Happiness-Secrets-7-Secrets-For-Everlasting-Happiness-and-Rapid-Growth/1070076682?via=user-profile",
    previewUrl: "/",
  },
];

const ProjectsSection: React.FC = () => {
  const [tag, setTag] = useState<string>("All");
  const ref = useRef<HTMLUListElement>(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag: string) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Chrome Extensions"
          isSelected={tag === "Chrome Extensions"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Courses"
          isSelected={tag === "Courses"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              projectId={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
