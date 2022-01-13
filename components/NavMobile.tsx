import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import { NAV_LINKS } from "../constants/nav";
import RESOURCES from "../resources/resources";
import BorderButton from "./BorderButton";
import classes from "./NavMobile.module.scss";

interface Props {
  showNavMobile: boolean;
  setShowNavMobile: Dispatch<SetStateAction<boolean>>;
}

const NavMobile = ({ showNavMobile, setShowNavMobile }: Props): JSX.Element => {
  return (
    <div
      className={`${classes.container} ${showNavMobile ? classes.show : ""}`}
    >
      <div className={classes.overlay} />
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
          {NAV_LINKS.map((link) => (
            <Link key={link.url} href={link.url}>
              <a className={classes.link} title={link.label}>
                <i className="material-icons-outlined">{link.icon}</i>
                {link.label}
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
        <div className={classes.websiteContainer}>
          <BorderButton
            label="Website"
            className={classes.website}
            icon="language"
          />
        </div>
      </nav>
    </div>
  );
};

export default NavMobile;
