import Link from "next/link";
import RightArrow from "@/components/RightArrow";

import styles from "./ProjectPage.module.scss";
import { Slider } from "@/components/Slider";

type Props = {
  params: {
    name: string;
  };
};

const PROJECTS: Record<
  string,
  { description: string[]; img: string; link: string }
> = {
  Wildberries: {
    description: [
      `• Курировал 2 junior-разработчиков и 1 middle разработчика`,
      `• Разрабатывал приложение сабдомена global на чистом JavaScript`,
      `• Переносил старый функционал на новый`,
      `• Взаимодействовал с дизайнерами, предлагал более гибкие UI/UX решения`,
      `• Улучших архитектуру приложения, примененял Design Patterns на проекте`,
    ],
    img: "/static/global_wb.png",
    link: "https://global.wildberries.ru",
  },
  Scriptive: {
    description: [
      `• Курировал код других разработчиков, тщательно просматривал Pull Request'ы`,
      `• Разработал 4-х крупных сервиса огромного приложения на Next.js в связке с TypeScript, включая админку и редизайн core-сервиса`,
      `• Рефакторил и оптимизировал код, переводил устаревшый код на более новые решения`,
      `• Взаимодействовал с клиентом, предлагал новые фичи`,
      `• Разрабатывал как мобильную, так и десктопную части приложения на TypeScript, Next.js, React`,
      `• Довел Core-сервис до PWA`,
      `• Составлял документацию в виде JSDoc`,
    ],
    img: "/static/scriptive.png",
    link: "https://www.scriptive.com.au/",
  },
  IT_One: {
    description: [
      `• Участвовал в разработке модуля 214-ФЗ для CRM Газпромбанка`,
      `• Помог в создании на React, Redux, Typescript приложения с нуля`,
      `• Оптимизировал код, работал с огромным количеством форм на устаревшем API (ReduxForm)`,
      `• Доводил код приложения до Flux-архитектуры`,
    ],
    img: "/static/it_one_bg.png",
    link: "https://www.it-one.ru/",
  },
  Sdelka: {
    description: [
      `• Разработал 6 крупных модулей крупной CRM по недвижимости`,
      `• Работал на стеке React, Redux, Typescript`,
      `• Курировал работу других разработчикам`,
      `• Курировал Backend-разработчика в правильной реазиации Rest-архитектуры серверной части приложения`,
      `• Исправил и оптимизировал код после junior-разработчиков`,
    ],
    img: "/static/sdelka.png",
    link: "https://sdelka.estate/",
  },
  Sber: {
    description: [
      `• Разработал клиентскую и серверную части 3 микросервисов банковского ПО`,
      `• Работал на React, Redux, Typescript`,
      `• Работал Backend'а на Java Spring`,
      `• Работал с базой данных Oracle Database`,
      `• Курировал стажера Frontend-разработчика`,
    ],
    img: "/static/sber.png",
    link: "https://sbertech.ru/",
  },
};

export default function Project({ params }: Props) {
  const { name = "" } = params;
  const { description, img, link } = PROJECTS[name];

  return (
    <div className={styles.root}>
      <Link href="/projects" className={styles.back}>
        <RightArrow />
      </Link>

      <div className={styles.body}>
        <Slider imgs={[img]} />

        <ul className={styles.description}>
          {description.map((desc) => (
            <li key={desc}>{desc}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
