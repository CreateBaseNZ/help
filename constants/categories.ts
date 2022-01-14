import WHAT_ARE_GROUPS from "../articles/what-are-groups";
import { Article } from "../types/article";

export type SubCategory = {
  title: string;
  articles: Article[];
};

export type Category = {
  title: string;
  icon: string;
  url: string;
  featured: Article[];
  subcategories: SubCategory[];
};

const CATEGORIES: Category[] = [
  {
    title: "Managing groups & classes",
    icon: "groups",
    url: "/managing-groups-&-classes",
    featured: [WHAT_ARE_GROUPS, WHAT_ARE_GROUPS, WHAT_ARE_GROUPS],
    subcategories: [
      { title: "Introduction to groups", articles: [WHAT_ARE_GROUPS] },
    ],
  },
  {
    title: "Teaching & learning tools",
    icon: "auto_fix_high",
    url: "/teaching-&-learning-tools",
    featured: [WHAT_ARE_GROUPS, WHAT_ARE_GROUPS],
    subcategories: [],
  },
  {
    title: "Privacy & security",
    icon: "verified_user",
    url: "/privacy-&-security",
    featured: [
      WHAT_ARE_GROUPS,
      WHAT_ARE_GROUPS,
      WHAT_ARE_GROUPS,
      WHAT_ARE_GROUPS,
    ],
    subcategories: [],
  },
];

export default CATEGORIES;
