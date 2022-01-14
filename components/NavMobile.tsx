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
          {CATEGORIES.map((category) => (
            <Link key={category.url} href={category.url}>
              <a
                className={`${classes.link} ${
                  router.asPath === category.url ? classes.active : ""
                }`}
                title={category.title}
              >
                <i className="material-icons-outlined">{category.icon}</i>
                {category.title}
              </a>
            </Link>
          ))}
          <div className={classes.subheading}>Resources</div>
          {RESOURCES.map((resource) => (
            <Link key={resource.url} href={resource.url}>
              <a className={classes.resource} title={resource.title}>
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
