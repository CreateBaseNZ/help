import classes from "./H1.module.scss";

interface Props {
  string: string;
}

const H1 = ({ string }: Props): JSX.Element => {
  return <h1 className={classes.h1}>{string}</h1>;
};

export default H1;
