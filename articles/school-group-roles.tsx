import { IArticle } from "../types/Article";

const SCHOOL_GROUP_ROLES: IArticle = {
  title: "School group roles",
  blurb: "A short explanation of the three roles within school groups.",
  url: "/school-group-roles",
  content: (
    <>
      <p>
        Within groups, there are different types of roles. For schools, there
        are three types:
      </p>
      <ul>
        <li>
          <b>Admins</b>—the admin role has access to the entire group. They are
          responsible for managing teachers and students. For example, this
          include approving teacher&apos;s join requests and updating billing
          information for the group.
        </li>
        <li>
          <b>Teachers</b>—the teacher role has access to most of the platform.
          Teachers are mainly responsible for teaching and managing their
          classes.
        </li>
        <li>
          <b>Students</b>—the student role has the most restricted access. They
          can only use the learning content of Projects.
        </li>
      </ul>
      <p>
        Each student in a class needs their own account to access the platform
        for tracking, management, and administrative purposes.
      </p>
    </>
  ),
};

export default SCHOOL_GROUP_ROLES;
