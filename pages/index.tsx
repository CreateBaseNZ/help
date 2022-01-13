import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

import classes from "../styles/index.module.scss";

const Home: NextPage = () => {
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

      {/* <main className={styles.main}></main> */}

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer> */}
    </div>
  );
};

export default Home;
