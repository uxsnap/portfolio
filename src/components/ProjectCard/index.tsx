import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectCard.module.scss";

type Project = {
  name: string;
  img: string;
};

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => (
  <Link href={`/projects/${project.name}`} className={styles.root}>
    <div className={styles.img}>
      <Image fill alt={project.name} src={project.img} />
    </div>

    <div className={styles.name}>{project.name}</div>
  </Link>
);

export default ProjectCard;
