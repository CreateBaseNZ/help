import SCHOOL_GROUP_ROLES from "../articles/school-group-roles";
import MANAGE_USERS_IN_YOUR_SCHOOL from "../articles/manage-users-in-your-school";
import WHAT_ARE_GROUPS from "../articles/what-are-groups";
import { Category } from "../types/Category";
import REGISTER_OR_JOIN_YOUR_SCHOOL from "../articles/register-or-join-your-school";
import ADDING_STUDENTS from "../articles/adding-students";

// TODO descriptions

const CATEGORIES: Category[] = [
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
  {
    title: "Teaching & learning tools",
    icon: "auto_fix_high",
    url: "/teaching-&-learning-tools",
    description: "",
    featured: [],
    subcategories: [],
  },
  {
    title: "Privacy & security",
    icon: "verified_user",
    url: "/privacy-&-security",
    description: "",
    featured: [],
    subcategories: [],
  },
];

export default CATEGORIES;
