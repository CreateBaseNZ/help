import Fuse from "fuse.js";
import { FuseResult } from "../types/FuseResult";
import classes from "./Results.module.scss";

interface Props {
  results: Fuse.FuseResult<FuseResult>[];
}

const Results = ({ results }: Props): JSX.Element => {
  return <div className={classes.container}></div>;
};

export default Results;
