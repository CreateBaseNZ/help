type NavLink = {
  label: string;
  icon: string;
  url: string;
};

export const NAV_LINKS: NavLink[] = [
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
