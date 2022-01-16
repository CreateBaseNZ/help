import { IArticle } from "./Article";

export type ISubCategory = {
  title: string;
  articles: IArticle[];
};

export type ICategory = {
  title: string;
  icon: string;
  url: string;
  description: string;
  featured: IArticle[];
  subcategories: ISubCategory[];
};
