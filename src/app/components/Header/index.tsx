import Link from "next/link";
import styles from "./Header.module.scss";

const links = [
  { name: "Главная", link: "/" },
  { name: "Обо мне", link: "/about" },
  { name: "Проекты", link: "/projects" },
  { name: "Контакты", link: "/contacts" },
];

const Header = () => (
  <ul className={styles.root}>
    {links.map(({ name, link }) => (
      <li className={styles.item}>
        <Link className={styles.link} href={link}>
          {name}
        </Link>
      </li>
    ))}
  </ul>
);

export default Header;
