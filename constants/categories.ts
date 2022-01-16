type Categories = {
  [key: string]: {
    title: string;
    icon: string;
    description: string;
    featured: string[];
    subcategories: string[];
  };
};

const CATEGORIES: Categories = {
  "managing-groups-&-classes": {
    title: "Managing groups & classes",
    icon: "groups",
    description:
      "Learn about all the features enabled by groups and classes—from registration to class integration.",
    featured: ["what-are-groups"],
    subcategories: ["Introduction to groups", "School groups"],
  },
  "teaching-&-learning-tools": {
    title: "Teaching & learning tools",
    icon: "auto_fix_high",
    description: "", // TODO
    featured: [],
    subcategories: [],
  },
  "privacy-&-security": {
    title: "Privacy & security",
    icon: "verified_user",
    description: "", // TODO
    featured: [],
    subcategories: [],
  },
};

export default CATEGORIES;
