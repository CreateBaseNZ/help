import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import CATEGORIES from "../constants/categories";

const articlesDirectory = join(process.cwd(), "_articles");

export const getArticleSlugs = () => {
  return fs.readdirSync(articlesDirectory);
};

// TODO
type Items = {
  [key: string]: string;
};

export const getArticleBySlug = (slug: string, fields: string[] = []) => {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(articlesDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = realSlug;
    }
    if (field === "content") {
      items[field] = content;
    }
    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
};

export const getAllSlugs = (fields: string[] = []) => {
  return getArticleSlugs().map((slug) => getArticleBySlug(slug, fields));
};

export const getCategoryBySlug = (slug: string, fields: string[] = []) => {
  const slugs = getAllSlugs(fields);

  return {
    ...CATEGORIES[slug],
    slug: slug,
    featured: CATEGORIES[slug].featured.map((article) =>
      getArticleBySlug(article, ["title", "slug"])
    ),
    subcategories: CATEGORIES[slug].subcategories.map((subcategory) => ({
      title: subcategory,
      articles: slugs.filter((slug) => slug.subcategory === subcategory),
    })),
  };
};
