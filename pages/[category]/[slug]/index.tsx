import Head from "next/head";
import { IArticle } from "../../../types/Article";
import { useRouter } from "next/router";
import CATEGORIES from "../../../constants/categories";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Crumbs from "../../../components/Crumbs";
import H1 from "../../../components/H1";
import Review from "../../../components/Review";
import markdownToHtml from "../../../lib/markdownToHtml";
import { getAllSlugs, getArticleBySlug } from "../../../lib/api";

import classes from "../../../styles/article.module.scss";

interface Props {
  article: IArticle;
}

const Article = ({ article }: Props) => {
  const router = useRouter();

  if (!router.isFallback && !article?.slug) {
    router.replace("/404");
    return null;
  }

  return (
    <div className={classes.page}>
      <Head>
        <title>{article.title}</title>
        <meta
          name="description"
          content={`${article.excerpt} CreateBase Help Center.`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={classes.main}>
        <Crumbs
          crumbs={[
            {
              url: `/${article.category}`,
              title: CATEGORIES[article.category].title,
            },
            {
              url: `/${article.category}/${article.slug}`,
              title: article.title,
            },
          ]}
        />
        <H1>{article.title}</H1>
        <div className={classes.blurb}>{article.excerpt}</div>
        <article className={classes.article}>{article.content}</article>
        <Review />
      </main>
      <Footer />
    </div>
  );
};

export default Article;

interface Params {
  params: {
    slug: string;
  };
}

export async function getStaticProps({ params }: Params) {
  const article = getArticleBySlug(params.slug, [
    "title",
    "category",
    "slug",
    "content",
  ]);
  const content = await markdownToHtml(article.content || "");

  console.log("from get static props");
  console.log(article);

  return {
    props: {
      article: {
        ...article,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: getAllSlugs(["category", "slug"]).map((article) => {
      console.log(article);
      return {
        params: {
          category: article.category,
          slug: article.slug,
        },
      };
    }),
    fallback: false,
  };
}
