import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

import styles from "./ContactsModal.module.scss";
import Cancel from "../Cancel";
import { useRef } from "react";

const LINKS = [
  {
    name: "Email",
    link: "mailto:evgeniy.agafonov98@gmail.com",
    icon: "/static/email.svg",
  },
  {
    name: "Telegram",
    link: "https://t.me/here_it_goes",
    icon: "/static/telegram.svg",
  },
  {
    name: "GitHub",
    link: "https://github.com/uxsnap",
    icon: "/static/github.svg",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/eugene-agafonov-6295881b2",
    icon: "/static/linkedin.webp",
  },
  {
    name: "Резюме",
    link: "/static/resume.pdf",
    icon: "/static/hh.svg",
  },
];

type Props = {
  onClose: () => void;
  active: boolean;
};

const ContactsModal = ({ active, onClose }: Props) => (
    <>
      <div className={cn(styles.root, active && styles.active)}>
        <div className={styles.wrapper}>
          <header>
            <h1>Контакты</h1>
            <div onClick={onClose} className={styles.icon}>
              <Cancel />
            </div>
          </header>

          <ul className={styles.list}>
            {LINKS.map(({ name, link, icon }) => (
              <Link key={link} className={styles.item} href={link}>
                <Image src={icon} alt={name} width={24} height={24} />
                <span>{name}</span>
              </Link>
            ))}
          </ul>
        </div>
      </div>

      <div className={cn(styles.overlay, active && styles.active)} />
    </>
  );

export default ContactsModal;
