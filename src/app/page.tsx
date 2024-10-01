import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <h1>Инженер</h1>
        <h2>Программист</h2>
      </div>

      <div className={styles.me}>
        <img src="/static/me.webp" alt="_me" />
      </div>
    </div>
  );
}
