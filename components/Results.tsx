import Fuse from "fuse.js";
import Link from "next/link";
import { useRouter } from "next/router";
import { RefObject } from "react";
import CATEGORIES from "../constants/categories";
import { ArticleT } from "../types/Article";
import Crumbs from "./Crumbs";
import classes from "./Results.module.scss";

interface Props {
  searchRef: RefObject<HTMLInputElement>;
  results: Fuse.FuseResult<ArticleT>[];
}

const Results = ({ searchRef, results }: Props): JSX.Element => {
  const router = useRouter();

  console.log(results);
  console.log(CATEGORIES);
  console.log(CATEGORIES[results[0].item.category].title);

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
        <div key={result.item.slug} className={classes.result}>
          <Link href={`/${result.item.category}/${result.item.slug}`}>
            <a
              className={classes.resultTitle}
              title={`Open ${result.item.title}`}
            >
              {result.item.title}
            </a>
          </Link>
          <p>{result.item.excerpt}</p>
          <Crumbs
            crumbs={[
              {
                url: `/${result.item.category}`,
                title: CATEGORIES[result.item.category].title,
              },
              {
                url: `/${result.item.category}/${result.item.slug}`,
                title: result.item.title,
              },
            ]}
            className={classes.trail}
          />
        </div>
      ))}
      {!results.length && (
        <div className={classes.noResults}>
          <h2>
            Sorry, we couldn&apos;t find any results matching{" "}
            <b>{router.query.search}</b>
          </h2>
        </div>
      )}
    </div>
  );
};

export default Results;
