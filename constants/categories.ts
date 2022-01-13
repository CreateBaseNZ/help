type Category = {
  label: string;
  icon: string;
  url: string;
};

const CATEGORIES: Category[] = [
  {
    label: "Managing groups & classes",
    icon: "groups",
    url: "/managing-groups-&-classes",
  },
  {
    label: "Teaching & learning tools",
    icon: "auto_fix_high",
    url: "/teaching-&-learning-tools",
  },
  {
    label: "Privacy & security",
    icon: "verified_user",
    url: "/privacy-&-security",
  },
];

export default CATEGORIES;
