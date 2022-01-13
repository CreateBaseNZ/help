import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavMobile from "./NavMobile";
import classes from "./Header.module.scss";
import { NAV_LINKS } from "../constants/nav";
import BorderButton from "./BorderButton";
import { useRouter } from "next/router";

const Header = (): JSX.Element => {
  const router = useRouter();
  const [showNavMobile, setShowNavMobile] = useState(false);

  console.log(router.asPath);

  return (
    <header className={classes.header}>
      <Link href="/" passHref>
        <a className={classes.icon} title="Help Center">
          <div className={classes.logoContainer}>
            <Image src="/logo-icon.svg" alt="Help Center" layout="fill" />
          </div>
          <span>Help Center</span>
        </a>
      </Link>
      <nav className={classes.nav}>
        {NAV_LINKS.map((link) => (
          <Link key={link.url} href={link.url}>
            <a
              className={`${classes.link} ${
                router.asPath === link.url ? classes.active : ""
              }`}
            >
              {link.label}
            </a>
          </Link>
        ))}
        <BorderButton
          label="Website"
          icon="language"
          className={`${classes.subdomain} ${classes.website}`}
        />
        <BorderButton
          label="App"
          icon="launch"
          className={`${classes.subdomain} ${classes.app}`}
        />
      </nav>
      <button
        className={classes.mobileMenu}
        onClick={() => setShowNavMobile(true)}
        title="Open navigation menu"
      >
        <i className="material-icons-outlined">menu</i>
      </button>
      <NavMobile
        showNavMobile={showNavMobile}
        setShowNavMobile={setShowNavMobile}
      />
    </header>
  );
};

export default Header;
