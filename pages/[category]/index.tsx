import { useEffect, useState } from "react";
import { NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import CATEGORIES, { Category } from "../../constants/categories";

import classes from "../../styles/category.module.scss";
import Footer from "../../components/Footer";
import H1 from "../../components/H1";
import Link from "next/link";

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

  if (!data) return null;

  return (
    <div className={classes.page}>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={classes.main}>
        <div className={classes.h1}>
          <i className="material-icons-outlined">{data.icon}</i>
          <H1>{data.title}</H1>
        </div>
        {data.subcategories.map((subcategory) => (
          <section key={subcategory.title} className={classes.container}>
            <h2 className={classes.h2}>{subcategory.title}</h2>
            <div className={classes.wrapper}>
              {subcategory.articles.map((article) => (
                <Link key={article.url} href={`${data.url}${article.url}`}>
                  <a className={classes.article} title={article.title}>
                    {article.title}
                  </a>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Category;
