import Fuse from "fuse.js";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Resources from "../components/Resources";
import Results from "../components/Results";

import classes from "../styles/index.module.scss";
import { getAllSlugs, getCategoryBySlug } from "../lib/api";
import CATEGORIES from "../constants/categories";
import { CategoryT } from "../types/Category";
import { ArticleT } from "../types/Article";
import PRIMARY_FIELDS from "../constants/primary_fields";

interface Props {
  categories: CategoryT[];
  fuseData: ArticleT[];
}

const Home = ({ categories, fuseData }: Props) => {
  const router = useRouter();
  const searchRef = useRef<HTMLInputElement>(null);
  const [fuse] = useState(
    new Fuse(fuseData, {
      keys: PRIMARY_FIELDS,
    })
  );
  const [results, setResults] = useState<Fuse.FuseResult<ArticleT>[] | null>(
    null
  );

  console.log(categories);
  console.log(fuseData);

  useEffect(() => {
    if (!router.isReady) return;
    if (router.query.search) {
      const res = fuse.search(router.query.search as string);
      setResults(res);
    } else {
      setResults(null);
    }
  }, [router, fuse]);

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
      <main className={classes.main}>
        <Banner searchRef={searchRef} results={results !== null} />
        {!results && <Categories categories={categories} />}
        {!results && <Resources />}
        {results && <Results searchRef={searchRef} results={results} />}
      </main>
      <Footer />
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      categories: Object.keys(CATEGORIES).map((key) =>
        getCategoryBySlug(key, ["title", "slug", "subcategory"])
      ),
      fuseData: getAllSlugs(PRIMARY_FIELDS),
    },
  };
}
