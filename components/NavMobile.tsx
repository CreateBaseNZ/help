import Link from "next/link";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import CATEGORIES from "../constants/categories";
import RESOURCES from "../resources/resources";
import BorderButton from "./BorderButton";
import classes from "./NavMobile.module.scss";

interface Props {
  showNavMobile: boolean;
  setShowNavMobile: Dispatch<SetStateAction<boolean>>;
}

const NavMobile = ({ showNavMobile, setShowNavMobile }: Props): JSX.Element => {
  const router = useRouter();

  console.log(router.asPath);

  return (
    <div
      className={`${classes.container} ${showNavMobile ? classes.show : ""}`}
    >
      <div
        className={classes.overlay}
        onClick={() => setShowNavMobile(false)}
      />
      <nav className={classes.nav}>
        <button className={classes.close}>
          <i
            className="material-icons-outlined"
            onClick={() => setShowNavMobile(false)}
            title="Close navigation menu"
          >
            close
          </i>
        </button>
        <div className={classes.wrapper}>
          {Object.entries(CATEGORIES).map(([key, val]) => (
            <Link key={key} href={`/${key}`}>
              <a
                className={`${classes.link} ${
                  router.query.category === key ? classes.active : ""
                }`}
                title={val.title}
                onClick={() => setShowNavMobile(false)}
              >
                <i className="material-icons-outlined">{val.icon}</i>
                {val.title}
              </a>
            </Link>
          ))}
          <div className={classes.subheading}>Resources</div>
          {RESOURCES.map((resource) => (
            <Link key={resource.url} href={resource.url}>
              <a
                className={classes.resource}
                title={resource.title}
                onClick={() => setShowNavMobile(false)}
              >
                {resource.title}
                <i className="material-icons-outlined">arrow_forward</i>
              </a>
            </Link>
          ))}
        </div>
        <a
          className={classes.websiteContainer}
          target="_blank"
          href="https://app.createbase.co.nz"
          rel="noreferrer"
        >
          <BorderButton
            label="Website"
            className={classes.website}
            leftIcon="language"
          />
        </a>
      </nav>
    </div>
  );
};

export default NavMobile;
