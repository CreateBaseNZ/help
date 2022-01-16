import { ArticleT } from "./Article";

type SubcategoryT = {
  title: string;
  articles: ArticleT[];
};

export type CategoryT = {
  title: string;
  icon: string;
  slug: string;
  description: string;
  featured: ArticleT[];
  subcategories: SubcategoryT[];
};
