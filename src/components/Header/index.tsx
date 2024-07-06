"use client";

import Link from "next/link";
import styles from "./Header.module.scss";
import { useState } from "react";
import ContactsModal from "../ContactsModal";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const links = [
    { name: "Главная", link: "/" },
    { name: "Обо мне", link: "/about" },
    { name: "Проекты", link: "/projects" },
    { name: "Контакты", link: "", onClick: () => setIsModalOpen(true) },
  ];

  return (
    <>
      <ul className={styles.root}>
        {links.map(({ name, link, onClick }) => (
          <li key={link} className={styles.item}>
            <Link className={styles.link} href={link} onClick={onClick}>
              {name}
            </Link>
          </li>
        ))}
      </ul>

      <ContactsModal
        active={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Header;
