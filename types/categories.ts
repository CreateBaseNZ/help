import { Article } from "./article";

export type SubCategory = {
  title: string;
  articles: Article[];
};

export type Category = {
  title: string;
  icon: string;
  url: string;
  description: string;
  featured: Article[];
  subcategories: SubCategory[];
};
