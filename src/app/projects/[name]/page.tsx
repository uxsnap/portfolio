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
  { description: string[]; imgs: string[]; link: string; navColor: string }
> = {
  Wildberries: {
    description: [
      `• Курировал 2 junior-разработчиков и 1 middle разработчика`,
      `• Разрабатывал приложение сабдомена global на чистом JavaScript`,
      `• Переносил старый функционал на новый`,
      `• Взаимодействовал с дизайнерами, предлагал более гибкие UI/UX решения`,
      `• Улучших архитектуру приложения, примененял Design Patterns на проекте`,
    ],
    imgs: [
      "/static/global_wb.webp",
      "/static/global_wb1.webp",
      "/static/global_wb2.webp",
      "/static/global_wb3.webp",
    ],
    link: "https://global.wildberries.ru",
    navColor: "rgb(167, 58, 253)",
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
    imgs: [
      "/static/scriptive.webp",
      "/static/scriptive1.webp",
      "/static/scriptive2.webp",
      "/static/scriptive3.webp",
    ],
    link: "https://www.scriptive.com.au/",
    navColor: "#000",
  },
  IT_One: {
    description: [
      `• Участвовал в разработке модуля 214-ФЗ для CRM Газпромбанка`,
      `• Помог в создании на React, Redux, Typescript приложения с нуля`,
      `• Оптимизировал код, работал с огромным количеством форм на устаревшем API (ReduxForm)`,
      `• Доводил код приложения до Flux-архитектуры`,
    ],
    imgs: [
      "/static/it_one_bg.webp",
      "/static/it_one_bg1.webp",
      "/static/it_one_bg2.webp",
    ],
    link: "https://www.it-one.ru/",
    navColor: "rgb(170, 230, 50)",
  },
  Sdelka: {
    description: [
      `• Разработал 6 крупных модулей крупной CRM по недвижимости`,
      `• Работал на стеке React, Redux, Typescript`,
      `• Курировал работу других разработчикам`,
      `• Курировал Backend-разработчика в правильной реазиации Rest-архитектуры серверной части приложения`,
      `• Исправил и оптимизировал код после junior-разработчиков`,
    ],
    imgs: [
      "/static/sdelka.webp",
      "/static/sdelka1.webp",
      "/static/sdelka2.webp",
      "/static/sdelka3.webp",
    ],
    link: "https://sdelka.estate/",
    navColor: "#0B36B9",
  },
  Sber: {
    description: [
      `• Разработал клиентскую и серверную части 3 микросервисов банковского ПО`,
      `• Работал на React, Redux, Typescript`,
      `• Работал Backend'а на Java Spring`,
      `• Работал с базой данных Oracle Database`,
      `• Курировал стажера Frontend-разработчика`,
    ],
    imgs: [
      "/static/sber.webp",
      "/static/sber1.webp",
      "/static/sber2.webp",
      "/static/sber3.webp",
    ],
    link: "https://sbertech.ru/",
    navColor: "#000",
  },
};

export default function Project({ params }: Props) {
  const { name = "" } = params;
  const { description, imgs, navColor, link } = PROJECTS[name];

  return (
    <div className={styles.root}>
      <Link href="/projects" className={styles.back}>
        <RightArrow />
      </Link>

      <div className={styles.body}>
        <Slider imgs={imgs} navColor={navColor} link={link} />

        <div className={styles.info}>
          <ul className={styles.description}>
            {description.map((desc) => (
              <li key={desc}>{desc}</li>
            ))}
          </ul>

          <Link className={styles.link} href={link}>Ссылка</Link>
        </div>
      </div>
    </div>
  );
}
