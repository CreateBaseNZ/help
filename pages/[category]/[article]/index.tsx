import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Article } from "../../../types/article";

import classes from "../../../styles/article.module.scss";
import { useRouter } from "next/router";
import CATEGORIES from "../../../constants/categories";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Crumbs from "../../../components/Crumbs";
import { Category } from "../../../types/categories";
import H1 from "../../../components/H1";
import Review from "../../../components/Review";

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
  const [category, setCategory] = useState<Category>();

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
      if (article) {
        setCategory(category);
        setData(article);
        return;
      }
    }

    router.push("/404");
  }, [router]);

  if (!data || !category) return null;

  return (
    <div className={classes.page}>
      <Head>
        <title>{data.title}</title>
        <meta name="description" content={data.blurb} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={classes.main}>
        <Crumbs
          crumbs={[
            { url: category.url, title: category.title },
            { url: data.url, title: data.title },
          ]}
        />
        <H1>{data.title}</H1>
        <div className={classes.blurb}>{data.blurb}</div>
        <article className={classes.article}>{data.content}</article>
        <Review />
      </main>
      <Footer />
    </div>
  );
};

export default Article;
