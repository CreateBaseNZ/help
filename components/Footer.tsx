import Link from "next/link";
import FOOTER_LINKS from "../constants/footer";
import classes from "./Footer.module.scss";

const Footer = (): JSX.Element => {
  return (
    <footer className={classes.container}>
      <div className={classes.wrapper}>
        {FOOTER_LINKS.map((section) => (
          <div key={section.title} className={classes.section}>
            <span>{section.title}</span>
            {section.links.map((link) => (
              <Link key={link.url} href={link.url}>
                <a title={link.url}>
                  {link.icon && (
                    <i className="material-icons-outlined">{link.icon}</i>
                  )}
                  {link.label}
                </a>
              </Link>
            ))}
          </div>
        ))}
        <div className={classes.copyright}>&copy; 2022 CreateBase, Ltd.</div>
      </div>
    </footer>
  );
};

export default Footer;
