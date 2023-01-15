import { useState } from "react";
import { useOutletContext } from "react-router-dom";
import text from "../TextObjects/Projects";
import ProjectCard from "./ProjectCard";

const Projects = () => {
    const { isToggled } = useOutletContext<{isToggled: boolean}>();
  const projectListEng = [
    text.english.roboRecipies,
    text.english.world,
    text.english.blog,
    text.english.thesaurace,
    text.english.profile,
    text.english.finder,
  ];
  const projectListJap = [
    text.japanese.roboRecipies,
    text.japanese.world,
    text.japanese.blog,
    text.japanese.thesaurace,
    text.japanese.profile,
    text.japanese.finder,
  ];
  return (
    <div className="hero max-h-screen bg-base-200 overflow-y-scroll">
      <div className="hero-content text-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-24 max-w-7xl">
            {isToggled ? projectListEng.map((project, key) => (
            <ProjectCard
              title={project.title}
              text={project.text}
              tags={project.tags}
              image={project.image}
              website={project.website}
              github={project.github}
            />
          )) : projectListJap.map((project, key) => (
            <ProjectCard
              title={project.title}
              text={project.text}
              tags={project.tags}
              image={project.image}
              website={project.website}
              github={project.github}
            />
          )) }
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
