import Head from "next/head";
import { useRouter } from "next/router";
import Link from "next/link";
import Header from "../../components/Header";
import CATEGORIES from "../../constants/categories";
import Footer from "../../components/Footer";
import H1 from "../../components/H1";
import Crumbs from "../../components/Crumbs";

import classes from "../../styles/category.module.scss";
import { getCategoryBySlug } from "../../lib/api";

type BasicArticle = {
  title: string;
  slug: string;
};

interface Props {
  category: {
    title: string;
    description: string;
    icon: string;
    slug: string;
    featured: BasicArticle[];
    subcategories: {
      title: string;
      articles: BasicArticle[];
    }[];
  };
}

const Category = ({ category }: Props) => {
  const router = useRouter();

  if (!router.isFallback && !category?.slug) {
    router.replace("/404");
    return null;
  }

  return (
    <div className={classes.page}>
      <Head>
        <title>{category.title}</title>
        <meta
          name="description"
          content={`${category.description} Read ${category.featured
            .map((article) => article.title)
            .join(", ")}. CreateBase Help Center.`}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={classes.main}>
        <Crumbs
          crumbs={[{ url: `/${category.slug}`, title: category.title }]}
        />
        <div className={classes.h1}>
          <i className="material-icons-outlined">{category.icon}</i>
          <H1>{category.title}</H1>
        </div>
        {category.subcategories.map((subcategory) => (
          <section key={subcategory.title} className={classes.container}>
            <h2 className={classes.h2}>{subcategory.title}</h2>
            <div className={classes.wrapper}>
              {subcategory.articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/${category.slug}/${article.slug}`}
                >
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

interface Params {
  params: {
    category: string;
  };
}

export async function getStaticProps({ params }: Params) {
  return {
    props: {
      category: getCategoryBySlug(params.category, [
        "title",
        "slug",
        "subcategory",
      ]),
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: Object.keys(CATEGORIES).map((key) => {
      return {
        params: {
          category: key,
        },
      };
    }),
    fallback: false,
  };
}
