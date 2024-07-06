import styles from "./WorkList.module.scss";

const items = [
  {
    name: "Wildberries",
    logo: "/static/wildberries.png",
  },
  {
    name: "Scriptive",
    logo: "/static/scriptive.svg",
  },
  {
    name: "Сбербанк",
    logo: "/static/sberbank.png",
  },
  {
    name: "IT_ONE",
    logo: "/static/it_one.svg",
  },
  {
    name: "Газпромбанк",
    logo: "/static/gaz.jpg",
  },
];

const WorkList = () => {
  return (
    <div className={styles.root}>
      {items.map(({ name, logo }) => (
        <div key={name} className={styles.card}>
          <img src={logo} alt={name} />
          <div>{name}</div>
        </div>
      ))}
    </div>
  );
};

export default WorkList;
