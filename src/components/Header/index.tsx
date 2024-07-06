"use client";
import cn from "classnames";

import Link from "next/link";
import styles from "./Header.module.scss";
import { RefObject, useEffect, useRef, useState } from "react";
import ContactsModal from "../ContactsModal";
import Menu from "../Menu";

const useOutsideClick = (ref: RefObject<HTMLElement>, callback: () => void) => {
  const handleClick = (event: MouseEvent) => {
    if (event.target && !ref.current?.contains(event.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, [ref]);
};

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const links = [
    { name: "Главная", link: "/" },
    { name: "Обо мне", link: "/about" },
    { name: "Проекты", link: "/projects" },
    { name: "Контакты", link: "", onClick: () => setIsModalOpen(true) },
  ];

  useOutsideClick(menuRef, () => setIsMenuOpen(false));

  return (
    <>
      <div className={styles.root}>
        <div className={styles.wrapper} ref={menuRef}>
          <div
            className={styles.icon}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu />
          </div>

          <ul className={cn(styles.list, isMenuOpen && styles.active)}>
            {links.map(({ name, link, onClick }) => (
              <li key={link} className={styles.item}>
                <Link className={styles.link} href={link} onClick={onClick}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <ContactsModal
        active={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default Header;
