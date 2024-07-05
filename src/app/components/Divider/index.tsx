import cn from "classnames";
import RightArrow from "../SanboxFrame/RightArrow";

import styles from "./Divider.module.scss";
import { memo } from "react";

type Props = {
  onClick: () => void;
  className: string;
};

const Divider = ({ onClick, className }: Props) => (
  <div className={cn(styles.divider, className)} onClick={onClick}>
    <RightArrow />
  </div>
);

export default memo(Divider);
