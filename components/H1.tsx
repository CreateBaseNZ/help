import { ReactNode } from "react";
import classes from "./H1.module.scss";

interface Props {
  children: ReactNode;
}

const H1 = ({ children }: Props): JSX.Element => {
  return <h1 className={classes.h1}>{children}</h1>;
};

export default H1;
