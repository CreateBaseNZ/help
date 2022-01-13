import WHAT_ARE_GROUPS from "../articles/what-are-groups";

type Category = {
  label: string;
  icon: string;
  url: string;
  articles: any[]; // TODO
};

const CATEGORIES: Category[] = [
  {
    label: "Managing groups & classes",
    icon: "groups",
    url: "/managing-groups-&-classes",
    articles: [WHAT_ARE_GROUPS],
  },
  {
    label: "Teaching & learning tools",
    icon: "auto_fix_high",
    url: "/teaching-&-learning-tools",
    articles: [],
  },
  {
    label: "Privacy & security",
    icon: "verified_user",
    url: "/privacy-&-security",
    articles: [],
  },
];

export default CATEGORIES;
