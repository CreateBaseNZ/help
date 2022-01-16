import { ArticleT } from "./Article";

export type ISubCategory = {
  title: string;
  articles: ArticleT[];
};

export type CategoryT = {
  title: string;
  icon: string;
  slug: string;
  description: string;
  featured: ArticleT[];
  subcategories: ISubCategory[];
};
