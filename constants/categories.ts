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
  description: string;
  featured: Article[];
  subcategories: SubCategory[];
};

// TODO descriptions

const CATEGORIES: Category[] = [
  {
    title: "Managing groups & classes",
    icon: "groups",
    url: "/managing-groups-&-classes",
    description: "",
    featured: [WHAT_ARE_GROUPS, WHAT_ARE_GROUPS, WHAT_ARE_GROUPS],
    subcategories: [
      {
        title: "Introduction to groups",
        articles: [WHAT_ARE_GROUPS, WHAT_ARE_GROUPS, WHAT_ARE_GROUPS],
      },
      {
        title: "School groups",
        articles: [WHAT_ARE_GROUPS, WHAT_ARE_GROUPS],
      },
    ],
  },
  {
    title: "Teaching & learning tools",
    icon: "auto_fix_high",
    url: "/teaching-&-learning-tools",
    description: "",
    featured: [WHAT_ARE_GROUPS, WHAT_ARE_GROUPS],
    subcategories: [],
  },
  {
    title: "Privacy & security",
    icon: "verified_user",
    url: "/privacy-&-security",
    description: "",
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
