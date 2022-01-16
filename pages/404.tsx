import { NextPage } from "next";
import Link from "next/link";
import BorderButton from "../components/BorderButton";
import Footer from "../components/Footer";
import Header from "../components/Header";

import classes from "../styles/404.module.scss";

const Error404: NextPage = () => {
  return (
    <div className={classes.page}>
      <Header />
      <main className={classes.main}>
        <div className={classes.wrapper}>
          <h1>
            404
            <br />
            Page not found
          </h1>
          <p>
            Sorry, the page you were looking for doesn&apos;t exist, has been
            removed, or is unavailable.
          </p>
          <Link href="/">
            <a>
              <BorderButton
                leftIcon="arrow_back"
                label="Home"
                className={classes.home}
              />
            </a>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Error404;
