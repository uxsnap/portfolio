"use client";

import styles from "./Projects.module.scss";
import ProjectCard from "@/components/ProjectCard";

const PROJECTS = [
  {
    name: "Wildberries",
    img: "/static/global_wb.webp",
  },
  {
    name: "Scriptive",
    img: "/static/scriptive.webp",
  },
  {
    name: "IT_One",
    img: "/static/it_one_bg.webp",
  },
  {
    name: "Sdelka",
    img: "/static/sdelka.webp",
  },
  {
    name: "Sber",
    img: "/static/sber.webp",
  },
];

export default function Projects() {
  return (
    <div className={styles.root}>
      <h1>Проекты</h1>

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
