"use client";

import styles from "./Projects.module.scss";
import ProjectCard from "@/components/ProjectCard";

const PROJECTS = [
  {
    name: "Wildberries",
    description: [
      `
      Полностью разработал страницу товара на домене global.
      Были учтены все пожелания заказчиков и дизайнеров. 
    `,
      `Также, была
      переработана кнопка "В корзину" для наиболее быстрого внедрения
      на новые страницы, организована система нотификации по всему приложению`,
      `В настоящий момент работаю над проектом складом - WMS, участвую в разработке
    модуля "Сортировка", внедряю глобальные модули и функционал, которыми пользуются 
    все остальные разработчики.`,
    ],
    img: "/static/global_wb.png",
    link: "https://global.wildberries.ru",
  },
  {
    name: "Scriptive",
    description: [
      `Курировал код других разработчиков, тщательно просмотатривал Pull Request'ы.`,
      `Разработал 4-х крупных сервиса огромного приложения на Next.js в связке с TypeScript.,
      разработал админку и произвел редизайн core-сервиса.`,
      `Взаимодействую с клиентом, предлагаю новые фичи.`,
    ],
    img: "/static/scriptive.png",
    link: "https://www.scriptive.com.au/",
  },
  {
    name: "IT One",
    description: [
      `Участвовал в разработке модуля 214-ФЗ для CRM Газпромбанка.`,
      `Помог в создании на React, Redux, Typescript приложения с нуля.`,
      `Оптимизировал код, работал с огромным количеством форм на устаревшем API (ReduxForm).`,
    ],
    img: "/static/it_one_bg.png",
    link: "https://www.it-one.ru/",
  },
  {
    name: "Sdelka CRM",
    description: [
      `Разработал 6 крупных модулей крупной CRM по недвижимости.`,
      `Курировал работу других разработчиков, включая и Backend-разработчика для реализации Rest-архитектуры серверной части приложения.`,
      `Исправил и оптимизировал код после junior-разработчиков.`,
    ],
    img: "/static/sdelka.png",
    link: "https://sdelka.estate/",
  },
  {
    name: "Sber Tech",
    description: [
      `Разработал клиентскую и серверную части 3 микросервисов банковского ПО.`,
      `Работал Backend'а на Java Spring, реализовывал архитектуру БД на Oracle Database.`,
      `Курировал стажера Frontend-разработчика.`,
    ],
    img: "/static/sber.png",
    link: "https://sbertech.ru/",
  },
];

export default function Projects() {
  return (
    <div className={styles.root}>
      <h1>Мои проекты:</h1>

      <ul className={styles.list}>
        {PROJECTS.map((project) => (
          <li key={project.link}>
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
  );
}
