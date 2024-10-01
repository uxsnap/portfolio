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
  {
    projectDesc: string;
    description: string[];
    imgs: string[];
    link: string;
    navColor: string;
  }
> = {
  Wildberries: {
    projectDesc: `
      Проект Global от Wildberries — это международная платформа, позволяющая продавцам из разных стран продавать свои товары на маркетплейсе. Она предоставляет доступ к широкой аудитории за пределами России и поддерживает экспортные поставки. Основные функции проекта включают упрощённую регистрацию для иностранных продавцов, локализацию интерфейса, логистическую поддержку и расчёты в удобной валюте. Wildberries стремится расширить своё присутствие на международном рынке и предлагает иностранным предпринимателям выход на крупную аудиторию через свою платформу.
    `,
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
    projectDesc: `
      Scriptive — это австралийская цифровая компания, которая специализируется на разработке программного обеспечения, создании решений для электронной коммерции и веб-разработке. Компания разрабатывает пользовательские сайты и приложения для различных отраслей, уделяя внимание функциональности и индивидуальному дизайну. Scriptive использует современные технологии, такие как React и Next.js, и работает с такими платформами, как Shopify, чтобы создавать адаптивные и удобные для пользователей сайты. Среди её проектов — разработки для крупных компаний, таких как Toyota и Bupa, где они внедряли уникальные функции и повышали производительность сайтов.
    `,
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
    projectDesc: `
      IT_One — это компания, специализирующаяся на предоставлении IT-услуг и решений для корпоративной инфраструктуры. Основанная в 2002 году, она предлагает широкий спектр услуг, включая управление сетями и безопасностью, модернизацию дата-центров, мобильные решения, мониторинг приложений, интеграцию систем и управление проектами.
    `,
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
    projectDesc: `
      Компания Sdelka.Estate — это платформа, специализирующаяся на инвестициях в недвижимость. Она предоставляет возможности для покупки, продажи и аренды коммерческой и жилой недвижимости, а также поддерживает проекты в сфере девелопмента. Компания помогает инвесторам находить выгодные сделки, а владельцам недвижимости — привлекать капитал. Sdelka.Estate нацелена на упрощение процессов инвестирования и управления недвижимостью, предлагая современный подход к работе с объектами на различных стадиях развития.
    `,
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
    projectDesc: `
      SberTech (СберТех) — дочерняя компания Сбербанка, которая занимается разработкой и поддержкой IT-решений для банка. Она отвечает за создание, интеграцию и сопровождение информационных систем, обеспечивающих цифровую трансформацию Сбербанка. Основное направление деятельности — разработка программного обеспечения для банковских операций, включая решения для мобильного банкинга, электронных платежей и автоматизации внутренних процессов. SberTech активно использует передовые технологии, такие как искусственный интеллект, машинное обучение и блокчейн, с целью улучшения клиентского опыта и повышения эффективности работы банка.
    `,
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
  const { description, imgs, navColor, link, projectDesc } = PROJECTS[name];

  return (
    <div className={styles.root}>
      <Link href="/projects" className={styles.back}>
        <RightArrow />
      </Link>

      <div className={styles.body}>
        <Slider imgs={imgs} navColor={navColor} link={link} />

        <div className={styles.info}>
          <h1 className={styles.title}>{name}</h1>

          <p className={styles.projectDesc}>{projectDesc}</p>

          <h2 className={styles.subtitle}>Задачи</h2>

          <ul className={styles.description}>
            {description.map((desc) => (
              <li key={desc}>{desc}</li>
            ))}
          </ul>

          <Link className={styles.link} href={link}>
            Ссылка
          </Link>
        </div>
      </div>
    </div>
  );
}
