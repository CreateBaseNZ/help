import Fuse from "fuse.js";
import { useRouter } from "next/router";
import { RefObject } from "react";
import { FuseResult } from "../types/FuseResult";
import classes from "./Results.module.scss";

interface Props {
  searchRef: RefObject<HTMLInputElement>;
  results: Fuse.FuseResult<FuseResult>[];
}

const Results = ({ searchRef, results }: Props): JSX.Element => {
  const router = useRouter();

  const clearHandler = () => {
    router.push("/");
    if (searchRef.current) searchRef.current.value = "";
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        {results.length} results for &ldquo;{router.query.search}&rdquo;
        <button title="Clear results" onClick={clearHandler}>
          <i className="material-icons-outlined">clear</i>Clear
        </button>
      </div>
    </div>
  );
};

export default Results;
