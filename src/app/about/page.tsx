"use client";

import cn from "classnames";

import { useState } from "react";
import styles from "./About.module.scss";
import PetProjects from "@/components/PetProjects";
import Experience from "@/components/Experience";

export default function AboutMe() {
  const [rightSide, setRightSide] = useState(false);

  return (
    <div className={cn(styles.root, rightSide && styles.right)}>
      <div className={styles.main}>
        <PetProjects onClick={() => setRightSide(!rightSide)} />

        <Experience onClick={() => setRightSide(!rightSide)} />
      </div>
    </div>
  );
}
