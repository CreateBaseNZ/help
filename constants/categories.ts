type Categories = {
  [key: string]: {
    title: string;
    icon: string;
    description: string;
    featured: string[];
    subcategories: {
      title: string;
      articles: string[];
    }[];
  };
};

const CATEGORIES: Categories = {
  "managing-groups-&-classes": {
    title: "Managing groups & classes",
    icon: "groups",
    description:
      "Learn about all the features enabled by groups and classes—from registration to class integration.",
    featured: ["what-are-groups"],
    subcategories: [
      {
        title: "Introduction to groups",
        articles: ["what-are-groups"],
      },
      {
        title: "School groups",
        articles: [
          "school-group-roles",
          "register-or-join-your-school",
          "adding-students",
          "manage-users-in-your-school",
        ],
      },
    ],
  },
};

// const CATEGORIES: ICategory[] = [
//   {
//     title: "Managing groups & classes",
//     icon: "groups",
//     url: "/managing-groups-&-classes",
//     description:
//       "Learn about all the features enabled by groups and classes—from registration to class integration.",
//     featured: [
//       WHAT_ARE_GROUPS,
//       REGISTER_OR_JOIN_YOUR_SCHOOL,
//       ADDING_STUDENTS,
//       MANAGE_USERS_IN_YOUR_SCHOOL,
//     ],
//     subcategories: [
//       {
//         title: "Introduction to groups",
//         articles: [WHAT_ARE_GROUPS],
//       },
//       {
//         title: "School groups",
//         articles: [
//           SCHOOL_GROUP_ROLES,
//           REGISTER_OR_JOIN_YOUR_SCHOOL,
//           ADDING_STUDENTS,
//           MANAGE_USERS_IN_YOUR_SCHOOL,
//         ],
//       },
//     ],
//   },
//   {
//     title: "Teaching & learning tools",
//     icon: "auto_fix_high",
//     url: "/teaching-&-learning-tools",
//     description: "",
//     featured: [],
//     subcategories: [],
//   },
//   {
//     title: "Privacy & security",
//     icon: "verified_user",
//     url: "/privacy-&-security",
//     description: "",
//     featured: [],
//     subcategories: [],
//   },
// ];

export default CATEGORIES;
