import ArticleImage from "../components/ArticleImage";

const ADDING_STUDENTS = {
  title: "Adding students",
  url: "/adding-students",
  blurb: "Add students to your school group in just a few steps.",
  content: (
    <>
      <p>
        Adding students to your group is a requirement to teach on the platform.
        To do this students must:
      </p>
      <ol>
        <li>
          Create their own account
          <ArticleImage
            src="https://raw.githubusercontent.com/CreateBaseNZ/public/dev/support/join-school-student.jpg"
            alt="Create an account"
          />
        </li>
        <li>
          Open the My Groups tab and select &ldquo;Join a group&rdquo;
          <ArticleImage
            src="https://raw.githubusercontent.com/CreateBaseNZ/public/dev/support/join-school-students.gif"
            alt="Join a group on the My Groups tab"
          />
        </li>
        <li>Enter the student code</li>
      </ol>
      <p>
        You can find the student code for your group by clicking
        &ldquo;Add&rdquo; on the Manage Group page.
      </p>
      <ArticleImage
        src="https://raw.githubusercontent.com/CreateBaseNZ/public/dev/support/add-students-school.jpg"
        alt="Student codes can be found in the Manage Group page"
      />
    </>
  ),
};

export default ADDING_STUDENTS;
