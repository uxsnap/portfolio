import Divider from "../Divider";
import Techs from "../Techs";
import WorkList from "../WorkList";

import styles from "./Experience.module.scss";

type Props = {
  onClick: () => void;
};

const Experience = ({ onClick }: Props) => (
  <div className={styles.experienceContainer}>
    <div>
      <h2>Мой опыт</h2>

      <div className={styles.experience}>
        Я опытный программист с более чем 7-летним стажем, из которых более 6
        лет работаю с JavaScript. Всегда стремлюсь к новым вызовам и сложным
        задачам. Никогда не перекладываю ответственность на других, готов взять
        дополнительные задачи. Тщательно проверяю свой код для обеспечения его
        качества и надежности.
      </div>
      <div className={styles.experience}>
        Я придерживаюсь баланса между эффективностью и читаемостью кода, активно
        использую React и TypeScript в коммерческих и pet-проектах. У меня также
        есть опыт работы с Backend и смежными фреймворками.
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

    <Divider onClick={onClick} className={styles.divider} />
  </div>
);

export default Experience;
