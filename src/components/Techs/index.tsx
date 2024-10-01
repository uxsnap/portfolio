import Image from "next/image";
import styles from "./Techs.module.scss";

const items = [
  {
    name: "React",
    logo: "/static/react.webp",
  },
  {
    name: "TypeScript",
    logo: "/static/ts.webp",
  },
  {
    name: "JavaScript",
    logo: "/static/js.webp",
  },
  {
    name: "CSS",
    logo: "/static/css.webp",
  },
  {
    name: "HTML",
    logo: "/static/html.webp",
  },
  {
    name: "Tan Stack",
    logo: "/static/tanStack.webp",
  },
  {
    name: "React Hook Form",
    logo: "/static/react-hook-form.webp",
  },
  {
    name: "GraphQL",
    logo: "/static/graphql.webp",
  },
  {
    name: "Next.js",
    logo: "/static/next.svg",
  },
  {
    name: "Node.js",
    logo: "/static/node.webp",
  },
  {
    name: "Sass",
    logo: "/static/sass.webp",
  },
  {
    name: "Vue",
    logo: "/static/vue.webp",
  },
  {
    name: "Go",
    logo: "/static/go.webp",
  },
];

const Techs = () => (
  <div className={styles.root}>
    {items.map(({ name, logo }) => (
      <div key={name} className={styles.card}>
        <Image
          width={50}
          height={50}
          src={logo}
          alt={name}
        />
        <div>{name}</div>
      </div>
    ))}
  </div>
);

export default Techs;
