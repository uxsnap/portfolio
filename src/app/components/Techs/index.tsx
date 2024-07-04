import styles from './Techs.module.scss'

const items = [
  {
    name: "React",
    logo: "/static/react.png",
  },
  {
    name: "TypeScript",
    logo: "/static/ts.png",
  },
  {
    name: "JavaScript",
    logo: "/static/js.png",
  },
  {
    name: "CSS",
    logo: "/static/css.png",
  },
  {
    name: "HTML",
    logo: "/static/html.png",
  },
  {
    name: "Tan Stack",
    logo: "/static/tanStack.png",
  },
  {
    name: "React Hook Form",
    logo: "/static/react-hook-form.png",
  },
  {
    name: "GraphQL",
    logo: "/static/graphql.png",
  },
  {
    name: "Next.js",
    logo: "/static/next.svg",
  },
  {
    name: "Node.js",
    logo: "/static/node.png",
  },
  {
    name: "Sass",
    logo: "/static/sass.png",
  },
  {
    name: "Vue",
    logo: "/static/vue.png",
  },
  {
    name: "Go",
    logo: "/static/go.png",
  },
];

const Techs = () => (
  <marquee className={styles.root}>
    {items.map(({ name, logo }) => (
      <div key={name} className={styles.card}>
        <img src={logo} alt={name} />
        <div>{name}</div>
      </div>
    ))}
  </marquee>
);

export default Techs;
