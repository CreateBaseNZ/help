import SCHOOL_GROUP_ROLES from "../articles/school-group-roles";
import MANAGE_USERS_IN_YOUR_SCHOOL from "../articles/manage-users-in-your-school";
import WHAT_ARE_GROUPS from "../articles/what-are-groups";
import { ICategory } from "../types/Category";
import REGISTER_OR_JOIN_YOUR_SCHOOL from "../articles/register-or-join-your-school";
import ADDING_STUDENTS from "../articles/adding-students";

// TODO descriptions
const BARE = [
  {
    title: "Managing groups & classes",
    icon: "groups",
    url: "/managing-groups-&-classes",
    description:
      "Learn about all the features enabled by groups and classes—from registration to class integration.",
    featured: [
      WHAT_ARE_GROUPS,
      REGISTER_OR_JOIN_YOUR_SCHOOL,
      ADDING_STUDENTS,
      MANAGE_USERS_IN_YOUR_SCHOOL,
    ],
    subcategories: [
      {
        title: "Introduction to groups",
        articles: [WHAT_ARE_GROUPS],
      },
      {
        title: "School groups",
        articles: [
          SCHOOL_GROUP_ROLES,
          REGISTER_OR_JOIN_YOUR_SCHOOL,
          ADDING_STUDENTS,
          MANAGE_USERS_IN_YOUR_SCHOOL,
        ],
      },
    ],
  },
];

const CATEGORIES: ICategory[] = BARE.map((category) => ({
  ...category,
  subcategories: category.subcategories.map((subcategory) => ({
    ...subcategory,
    articles: subcategory.articles.map((article) => ({
      ...article,
      md: `# What are groups?\n\n> Find out how groups work on the CreateBase platform.\n\nTo use the CreateBase platform you need to be part of a group. From the "My Account" tab, you can view all the groups your account has joined. A single CreateBase account can belong to multiple groups.\n\nGroups can either be a learning institution (school/other) or a family (coming soon). School groups are managed by [admin accounts](/managing-groups-&-classes/school-group-roles) and must contain all of the teachers and students in your school who wish to use the platform.\n\nIf you’re a **teacher**, learn how to register or join a school group [here](/managing-groups-&-classes/register-or-join-your-school) and how to add students to your group [here](/managing-groups-&-classes/adding-students).\n\nIf you’re a **student**, learn how to join a school group [here](/managing-groups-&-classes/register-or-join-your-school).`,
    })),
  })),
}));

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
