import Link from "next/link";
import ArticleImage from "../components/ArticleImage";

const REGISTER_OR_JOIN_YOUR_SCHOOL = {
  title: "Register or join your school",
  url: "/register-or-join-your-school",
  blurb:
    "Follow the simple steps below to register your school on the CreateBase app, or join an existing school group.",
  content: (
    <>
      <h2>Register</h2>
      <p>
        Registering your school starts by completing the registration form on
        the My Groups page.
      </p>
      <p>
        Each form is individually verified by our team to ensure that bad actors
        can&apos;t make fake schools on our Platform. Once a form is submitted,
        our team will get in touch via email within 24 hours to notify you of
        your School&apos;s registration. Upon positive confirmation, your school
        group will be formed and you will automatically become the{" "}
        <Link href={`/managing-groups-&-classes/school-group-roles`}>
          admin user
        </Link>
        .
      </p>
      <p>
        In these 24 hours, please feel free to learn more about our platform
        from the Support tab or complete our Platform Onboarding. You can also
        experience the non-teaching aspects of Projects from the Browse tab.
      </p>
      <h2>Join</h2>
      <p>
        If your school has already been registered, you simply join the school
        instead!
      </p>
      <p>
        From the My Groups page click &ldquo;Join&rdquo; and then send a message
        to the admin (the user who registered the school).
      </p>
      <p>The admin can then accept your request.</p>
      <ArticleImage
        src="https://raw.githubusercontent.com/CreateBaseNZ/public/dev/support/join-school.jpg"
        alt="Join a School button on the My Groups tab"
      />
      <ArticleImage
        src="https://raw.githubusercontent.com/CreateBaseNZ/public/dev/support/join-school-teacher.gif"
        alt="Join a school as a teacher"
      />
      <p>For students to join a school, they must use a student code.</p>
      <p>
        Learn how to add students to your school{" "}
        <Link href={`/managing-groups-&-classes/add-students`}>here</Link>.
      </p>
    </>
  ),
};

export default REGISTER_OR_JOIN_YOUR_SCHOOL;
