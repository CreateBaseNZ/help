import Link from "next/link";
import { Article } from "../types/article";

// TODO fix image and links

const MANAGE_USERS_IN_YOUR_SCHOOL: Article = {
  title: "Manage users in your school",
  url: "/manage-users-in-your-school",
  blurb:
    "Learn how to add users to and remove users from your school group, including both teachers and students",
  content: (
    <>
      <p>
        To use the Manage Users tab, please note that you need to be an{" "}
        <Link href="/support/admins/group-roles">admin</Link> or a{" "}
        <Link href="/support/teachers/group-roles">teacher</Link> in a{" "}
        <Link href="/support/admins/what-are-groups">group</Link>.
      </p>
      <p>
        In the Manage Users tab, you can view all the accounts that have joined
        your group.
      </p>
      <p>
        Users are grouped based on their role within the group: admin, teacher
        or student.
      </p>
      <img
        src="https://raw.githubusercontent.com/CreateBaseNZ/public/dev/support/manage-users.gif"
        style={{ maxWidth: 800 }}
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
