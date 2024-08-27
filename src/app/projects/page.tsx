"use client";

import styles from "./Projects.module.scss";
import ProjectCard from "@/components/ProjectCard";

const PROJECTS = [
  {
    name: "Wildberries",
    img: "/static/global_wb.png",
  },
  {
    name: "Scriptive",
    img: "/static/scriptive.png",
  },
  {
    name: "IT_One",
    img: "/static/it_one_bg.png",
  },
  {
    name: "Sdelka",
    img: "/static/sdelka.png",
  },
  {
    name: "Sber",
    img: "/static/sber.png",
  },
];

export default function Projects() {
  return (
    <div className={styles.root}>
      <h1>Мои проекты:</h1>

      <ul className={styles.list}>
        {PROJECTS.map((project) => (
          <li key={project.name}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}
