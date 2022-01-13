import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavMobile from "./NavMobile";
import classes from "./Header.module.scss";

const Header = (): JSX.Element => {
  const [showNavMobile, setShowNavMobile] = useState(false);

  console.log(showNavMobile);

  return (
    <header className={classes.header}>
      <Link href="/" passHref>
        <a className={classes.icon} title="Help Center">
          <Image
            src="/logo-icon.svg"
            alt="Help Center"
            height={32}
            width={27}
          />
          <div>Help Center</div>
        </a>
      </Link>
      <button
        className={classes.menu}
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
