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
              {category.title}
            </a>
          </Link>
        ))}
        <a target="_blank" href="https://createbase.co.nz" rel="noreferrer">
          <BorderButton
            label="Website"
            leftIcon="language"
            className={`${classes.subdomain} ${classes.website}`}
          />
        </a>
        <a target="_blank" href="https://app.createbase.co.nz" rel="noreferrer">
          <BorderButton
            label="App"
            leftIcon="launch"
            className={`${classes.subdomain} ${classes.app}`}
          />
        </a>
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
