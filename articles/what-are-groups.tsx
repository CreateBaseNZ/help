import Link from "next/link";
import { Article } from "../types/article";

// TODO fix this file

const WHAT_ARE_GROUPS: Article = {
  title: "What are groups?",
  url: "/what-are-groups?",
  content: (
    <>
      <p>
        To use the CreateBase platform you need to be part of a group. From the
        &ldquo;My Account&rdquo; tab, you can view all the groups your account
        has joined. A single CreateBase account can belong to multiple groups.
      </p>
      <p>
        Groups can either be a learning institution (school/other) or a family
        (coming soon). School groups are managed by{" "}
        <Link href="/support/admins/group-roles">admin accounts</Link> and must
        contain all of the teachers and students in your school who wish to use
        the platform.
      </p>
      <p>
        If you&apos;re a <b>teacher</b>, learn how to register or join a school
        group{" "}
        <Link href={`/support/admins/register-or-join-your-school`}>here</Link>{" "}
        and how to add students to your group{" "}
        <Link href="/support/admins/adding-students">here</Link>
      </p>
      <p>
        If you&apos;re a <b>student</b>, learn how to join a school group{" "}
        <Link href="/support/students/join-a-school">here</Link>.
      </p>
    </>
  ),
};

export default WHAT_ARE_GROUPS;