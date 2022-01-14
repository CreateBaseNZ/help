import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Article } from "../../../types/article";

import classes from "../../../styles/article.module.scss";
import { useRouter } from "next/router";
import CATEGORIES from "../../../constants/categories";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";

const findArticle = (object: Object, string: string) => {
  let result;
  if (!object || typeof object !== "object") return;
  Object.values(object).some((v) => {
    if (v === string) return (result = object);
    return (result = findArticle(v, string));
  });
  return result;
};

const Article: NextPage = () => {
  const router = useRouter();
  const [data, setData] = useState<Article>();

  useEffect(() => {
    if (!router.isReady) return;

    const category = CATEGORIES.find(
      (category) => category.url === `/${router.query.category}`
    );
    if (!category) return;

    for (const subcategory of category.subcategories) {
      const article = subcategory.articles.find(
        (article) => article.url === `/${router.query.article}`
      );
      if (article) return void setData(article);
    }

    router.push("/404");
  }, [router]);

  if (!data) return null;

  return (
    <div className={classes.page}>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.blurb} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Footer />
    </div>
  );
};

export default Article;
