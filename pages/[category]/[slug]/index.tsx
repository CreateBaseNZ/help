import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkUnwrapImages from "remark-unwrap-images";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import Footer from "../../../components/Footer";
import Header from "../../../components/Header";
import Crumbs from "../../../components/Crumbs";
import H1 from "../../../components/H1";
import Review from "../../../components/Review";
import ArticleImage from "../../../components/ArticleImage";

import { getAllSlugs, getArticleBySlug } from "../../../lib/api";
import { ArticleT } from "../../../types/Article";
import CATEGORIES from "../../../constants/categories";
import PRIMARY_FIELDS from "../../../constants/primary_fields";
import classes from "../../../styles/article.module.scss";
import remarkToc from "remark-toc";

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
        <div className={classes.excerpt}>{article.excerpt}</div>
        <ReactMarkdown
          className={classes.article}
          components={{
            a: ({ children, href, tabIndex, node }) => {
              if (tabIndex === -1)
                return (
                  <a href={node?.properties?.href as string}>
                    <i className="material-icons-outlined">link</i>
                  </a>
                );
              if (href?.startsWith("#"))
                return (
                  <a href={node?.properties?.href as string}>{children}</a>
                );
              if (href?.startsWith("/"))
                return (
                  <Link href={`${href}`}>
                    <a title={href}>{children}</a>
                  </Link>
                );
              return (
                <a href={href} title={href} target="_blank" rel="noreferrer">
                  {children}
                </a>
              );
            },
            img: ({ alt, src }) => (
              <ArticleImage src={src as string} alt={alt as string} />
            ),
            table: ({ children }) => (
              <div className={`${classes.tableContainer} roundScrollbar`}>
                <div className={classes.table}>{children}</div>
              </div>
            ),
            thead: ({ children }) => (
              <div className={classes.thead}>{children}</div>
            ),
            tbody: ({ children }) => (
              <div className={classes.tbody}>{children}</div>
            ),
            tr: ({ children, ...rest }) => (
              <div className={classes.tr}>{children}</div>
            ),
            th: ({ children, style, ...rest }) => (
              <div className={classes.th} style={style}>
                {children}
              </div>
            ),

            td: ({ children, style }) => (
              <div className={classes.td} style={style}>
                {children}
              </div>
            ),
          }}
          remarkPlugins={[
            remarkUnwrapImages,
            [remarkGfm, { singleTilde: false }],
            remarkToc,
          ]}
          rehypePlugins={[rehypeSlug, rehypeAutolinkHeadings]}
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
  const article = getArticleBySlug(params.slug, PRIMARY_FIELDS);

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
