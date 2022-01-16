import Fuse from "fuse.js";
import type { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Resources from "../components/Resources";
import FUSE_DATA from "../constants/fuse_data";
import Results from "../components/Results";
import { IFuseResult } from "../types/FuseResult";

import classes from "../styles/index.module.scss";

const Home: NextPage = () => {
  const router = useRouter();
  const searchRef = useRef<HTMLInputElement>(null);
  const [fuse] = useState(
    new Fuse(FUSE_DATA, {
      keys: ["title", "blurb", "plain"],
    })
  );
  const [results, setResults] = useState<Fuse.FuseResult<IFuseResult>[] | null>(
    null
  );

  useEffect(() => {
    if (!router.isReady) return;
    if (router.query.search) {
      const res = fuse.search(router.query.search as string);
      setResults(res);
    } else {
      setResults(null);
    }
  }, [router, fuse]);

  return (
    <div className={classes.home}>
      <Head>
        <title>Help Center</title>
        <meta
          name="description"
          content="Find answers to commonly asked questions. A library of resources to help you use CreateBase in and out of the classrooom."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={classes.main}>
        <Banner searchRef={searchRef} results={results !== null} />
        {!results && <Categories />}
        {!results && <Resources />}
        {results && <Results searchRef={searchRef} results={results} />}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
