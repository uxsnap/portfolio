import cn from "classnames";
import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectCard.module.scss";
import { useState } from "react";

type Project = {
  name: string;
  description: string[];
  img: string;
  link: string;
};

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  const [active, setActive] = useState(false);

  return (
    <div
      onClick={() => setActive(!active)}
      className={cn(styles.root, active && styles.active)}
    >
      <div className={styles.img}>
        <Image fill alt={project.name} src={project.img} />
      </div>

      <div className={styles.name}>{project.name}</div>

      <ul className={styles.description}>
        {project.description.map((desc) => (
          <li key={desc}>{desc}</li>
        ))}
      </ul>

      <div onClick={(e) => e.stopPropagation()} className={styles.linkWrapper}>
        <Link href={project.link}>Ссылка</Link>
      </div>
    </div>
  );
};

export default ProjectCard;
