import Link from "next/link";
import ArticleImage from "../components/ArticleImage";
import { Article } from "../types/article";

const MANAGE_USERS_IN_YOUR_SCHOOL: Article = {
  title: "Manage users in your school",
  url: "/manage-users-in-your-school",
  blurb:
    "Learn how to add users to and remove users from your school group, including both teachers and students.",
  content: (
    <>
      <p>
        To use the Manage Users tab, please note that you need to be an{" "}
        <Link href={`/managing-groups-&-classes/school-group-roles`}>
          admin
        </Link>{" "}
        or a{" "}
        <Link href={`/managing-groups-&-classes/school-group-roles`}>
          teacher
        </Link>{" "}
        in a{" "}
        <Link href={`/managing-groups-&-classes/school-group-roles`}>
          group
        </Link>
        .
      </p>
      <p>
        In the Manage Users tab, you can view all the accounts that have joined
        your group.
      </p>
      <p>
        Users are grouped based on their role within the group: admin, teacher
        or student.
      </p>
      <ArticleImage
        src="https://raw.githubusercontent.com/CreateBaseNZ/public/dev/support/manage-users.gif"
        alt="Manage users in the Manage Group tab"
      />
      <p>
        For all users, you can view their first name, last name, email and who
        invited them.
      </p>
      <p>On this page admins can:</p>
      <ul>
        <li>Remove teacher accounts</li>
        <li>Remove student accounts</li>
        <li>Promote teacher accounts to admins</li>
      </ul>
      <p>On this page teachers can:</p>
      <ul>
        <li>Remove student accounts.</li>
      </ul>
    </>
  ),
};

export default MANAGE_USERS_IN_YOUR_SCHOOL;
