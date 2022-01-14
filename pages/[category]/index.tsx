import { useEffect, useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import CATEGORIES, { Category } from "../../constants/categories";

import classes from "../../styles/category.module.scss";
import Footer from "../../components/Footer";

const Category: NextPage = () => {
  const router = useRouter();
  const [data, setData] = useState<Category>();

  useEffect(() => {
    if (!router.isReady) return;
    const data = CATEGORIES.find((category) => category.url === router.asPath);
    if (data) {
      setData(data);
    } else {
      router.push("/404");
    }
  }, [router]);

  console.log("re-rendered");

  return (
    <div className={classes.page}>
      <Head>
        <title>{data?.title}</title>
        <meta
          name="description"
          content="Find answers to commonly asked questions. A library of resources to help you use CreateBase in and out of the classrooom."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={classes.main}></main>
      <Footer />
    </div>
  );
};

export default Category;
