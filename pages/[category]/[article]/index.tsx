import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { IArticle } from "../../../types/Article";
import { useRouter } from "next/router";
import CATEGORIES from "../../../constants/categories";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Crumbs from "../../../components/Crumbs";
import { ICategory } from "../../../types/Category";
import H1 from "../../../components/H1";
import Review from "../../../components/Review";

import classes from "../../../styles/article.module.scss";

const findArticle = (object: Object, string: string) => {
  let result;
  if (!object || typeof object !== "object") return;
  Object.values(object).some((v) => {
    if (v === string) return (result = object);
    return (result = findArticle(v, string));
  });
  return result;
};

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Article: NextPage = () => {
  const router = useRouter();
  const [articleData, setArticleData] = useState<IArticle>();
  const [category, setCategory] = useState<ICategory>();

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
        setArticleData(article);
        return;
      }
    }

    router.push("/404");
  }, [router]);

  if (!articleData || !category) return null;

  return (
    <div className={classes.page}>
      <Head>
        <title>{articleData.title}</title>
        <meta
          name="description"
          content={`${articleData.blurb} CreateBase Help Center.`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={classes.main}>
        <Crumbs
          crumbs={[
            { url: category.url, title: category.title },
            {
              url: `${category.url}${articleData.url}`,
              title: articleData.title,
            },
          ]}
        />
        <H1>{articleData.title}</H1>
        <div className={classes.blurb}>{articleData.blurb}</div>
        <article className={classes.article}>{articleData.content}</article>
        <Review />
      </main>
      <Footer />
    </div>
  );
};

export default Article;
