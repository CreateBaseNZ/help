import Head from "next/head";
import { ArticleT } from "../../../types/Article";
import { useRouter } from "next/router";
import CATEGORIES from "../../../constants/categories";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Crumbs from "../../../components/Crumbs";
import H1 from "../../../components/H1";
import Review from "../../../components/Review";
import ReactMarkdown from "react-markdown";
import { getAllSlugs, getArticleBySlug } from "../../../lib/api";

import classes from "../../../styles/article.module.scss";
import Link from "next/link";
import ArticleImage from "../../../components/ArticleImage";
import remarkUnwrapImages from "remark-unwrap-images";

interface Props {
  article: ArticleT;
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
        <ReactMarkdown
          className={classes.article}
          components={{
            a: ({ children, href }) =>
              href?.startsWith("/") ? (
                <Link href={`${href}`}>
                  <a title={href}>{children}</a>
                </Link>
              ) : (
                <a href={href} title={href} target="_blank" rel="noreferrer">
                  {children}
                </a>
              ),
            img: ({ alt, src }) => (
              <ArticleImage src={src as string} alt={alt as string} />
            ),
          }}
          remarkPlugins={[remarkUnwrapImages]}
        >
          {article.content}
        </ReactMarkdown>
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

  return {
    props: {
      article: article,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: getAllSlugs(["category", "slug"]).map((article) => {
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
