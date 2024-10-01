import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.root}>
      <div className={styles.title}>
        <div className={styles.titleWrapper}>
          <div>
            <h3>Инженер</h3>
            <h4>Программист</h4>
          </div>

          <div>
            <h1>Агафонов</h1>
            <h2>Евгений</h2>
          </div>
        </div>
      </div>

      <div className={styles.me}>
        <img src="/static/me.webp" alt="_me" />
      </div>
    </div>
  );
}
