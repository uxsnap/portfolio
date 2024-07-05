import { memo } from "react";

import { SandboxFrame } from "../SanboxFrame";
import Divider from "../Divider";

import styles from "./PetProjects.module.scss";

type Props = {
  onClick: () => void;
};

const PetProjects = ({ onClick }: Props) => (
  <div className={styles.petProjects}>
    <h2>Мои хобби</h2>

    <div>
      В свободное время занимаюсь английским, сдал Кэмбриджский экзамен на B2
    </div>
    <div>Люблю читать книги, изучать что-то новое</div>
    <div>
      В свободное время пишу pet-проекты, написал платформу для написания
      собственной Frontend-библиотеки, по типу React
    </div>

    <div className={styles.project}>
      <SandboxFrame />
    </div>

    <Divider onClick={onClick} className={styles.divider} />
  </div>
);

export default memo(PetProjects);
