import { useRouter } from "next/router";
import { SyntheticEvent } from "react";
import classes from "./Banner.module.scss";
import H1 from "./H1";
import SearchBar from "./SearchBar";

interface Props {
  searchRef: any; // TODO
  results: any; // TODO
  setResults: any; // TODO
}

const Banner = ({ searchRef, results, setResults }: Props): JSX.Element => {
  const router = useRouter();

  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault();
    router.push({
      pathname: "/",
      query: { search: searchRef.current.value },
    });
  };

  return (
    <div className={`${classes.container} ${results ? classes.collapse : ""}`}>
      <div className={`${classes.shape} ${classes.red}`} />
      <div className={`${classes.shape} ${classes.green}`} />
      <div className={`${classes.shape} ${classes.blue}`} />
      <div className={`${classes.shape} ${classes.yellow}`} />
      <div className={classes.wrapper}>
        <H1 string="How can we help?" />
        <form onSubmit={submitHandler} className={classes.form}>
          <SearchBar
            inputRef={searchRef}
            className={classes.searchBar}
            submitHandler={submitHandler}
            placeholder="Search"
          />
        </form>
      </div>
    </div>
  );
};

export default Banner;
