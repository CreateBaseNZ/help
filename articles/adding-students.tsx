// TODO fix images

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
          <img
            src="https://raw.githubusercontent.com/CreateBaseNZ/public/dev/support/join-school-student.jpg"
            style={{ maxWidth: 800 }}
          />
        </li>
        <li>
          Open the My Groups tab and select join a group
          <img
            src="https://raw.githubusercontent.com/CreateBaseNZ/public/dev/support/join-school-students.gif"
            style={{ maxWidth: 800 }}
          />
        </li>
        <li>Enter the student code</li>
      </ol>
      <p>
        You can find the student code for your group by clicking
        &ldquo;Add&rdquo; on the Manage Group page.
      </p>
      <img
        src="https://raw.githubusercontent.com/CreateBaseNZ/public/dev/support/add-students-school.jpg"
        style={{ maxWidth: 800 }}
      />
    </>
  ),
};

export default ADDING_STUDENTS;
