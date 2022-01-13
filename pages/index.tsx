import type { NextPage } from "next";
import Head from "next/head";
import { useRef, useState } from "react";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";

import classes from "../styles/index.module.scss";

const Home: NextPage = () => {
  const searchRef = useRef();
  const [results, setResults] = useState(null);

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
        <Banner
          searchRef={searchRef}
          results={results}
          setResults={setResults}
        />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
