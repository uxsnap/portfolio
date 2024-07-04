import { SandboxFrame } from "../components/SanboxFrame";
import Techs from "../components/Techs";
import WorkList from "../components/WorkList";
import styles from "./About.module.scss";

const TECHS = [];

export default function AboutMe() {
  return (
    <div className={styles.root}>
      <div className={styles.main}>
        <div className={styles.petProjects}>
          <h2>Мои хобби</h2>

          <div>
            В свободное время занимаюсь английским, сдал Кэмбриджский экзамен на
            B2
          </div>
          <div>Люблю читать книги, изучать что-то новое</div>
          <div>
            В свободное время пишу pet-проекты, написал платформу для написания
            собственной Frontend-библиотеки, по типу React
          </div>

          <div className={styles.project}>
            <SandboxFrame />
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.experienceContainer}>
          <div>
            <h2>Мой опыт</h2>

            <div className={styles.experience}>
              Я опытный программист с более чем 7-летним стажем, из которых
              более 6 лет работаю с JavaScript. Всегда стремлюсь к новым вызовам
              и сложным задачам. Никогда не перекладываю ответственность на
              других, готов взять дополнительные задачи. Тщательно проверяю свой
              код для обеспечения его качества и надежности.
            </div>
            <div className={styles.experience}>
              Я придерживаюсь баланса между эффективностью и читаемостью кода,
              активно использую React и TypeScript в коммерческих и
              pet-проектах. У меня также есть опыт работы с Backend и смежными
              фреймворками.
            </div>
          </div>

          <div className={styles.jobs}>
            <h2>Успел поработать в:</h2>

            <div className={styles.list}>
              <WorkList />
            </div>
          </div>

          <div className={styles.techs}>
            <h2>Технологии, с которыми работал:</h2>

            <Techs />
          </div>
        </div>
      </div>
    </div>
  );
}
