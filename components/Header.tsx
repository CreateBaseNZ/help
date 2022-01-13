import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavMobile from "./NavMobile";
import classes from "./Header.module.scss";
import BorderButton from "./BorderButton";
import { useRouter } from "next/router";
import CATEGORIES from "../constants/categories";

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
        {CATEGORIES.map((category) => (
          <Link key={category.url} href={category.url}>
            <a
              className={`${classes.link} ${
                router.asPath === category.url ? classes.active : ""
              }`}
            >
              {category.label}
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
