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

  console.log(results);

  const clearHandler = () => {
    router.push("/");
    if (searchRef.current) searchRef.current.value = "";
  };

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <span className={classes.numResults}>
          {results.length} result{results.length === 1 ? "" : "s"} for &ldquo;
          {router.query.search}&rdquo;
        </span>
        <button
          className={classes.clear}
          title="Clear results"
          onClick={clearHandler}
        >
          <i className="material-icons-outlined">clear</i>Clear
        </button>
      </div>
      {results.map((result) => (
        <div className={classes.result} key={result.item.url}>
          <h2>{result.item.title}</h2>
          <p>{result.item.blurb}</p>
        </div>
      ))}
    </div>
  );
};

export default Results;
