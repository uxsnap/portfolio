import Image from "next/image";
import Link from "next/link";
import styles from "./ProjectCard.module.scss";

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
  return (
    <div className={styles.root}>
      <div className={styles.img}>
        <Image height={150} width={385} alt={project.name} src={project.img} />
      </div>

      <div className={styles.name}>{project.name}</div>
      <ul className={styles.description}>
        {project.description.map((desc) => (
          <li key={desc}>{desc}</li>
        ))}
      </ul>

      <div className={styles.linkWrapper}>
        <Link href={project.link}>Ссылка</Link>
      </div>
    </div>
  );
};

export default ProjectCard;
