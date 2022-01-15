import Link from "next/link";
import classes from "./Crumbs.module.scss";

export type Crumb = {
  url: string;
  title: string;
};

interface Props {
  crumbs: Crumb[];
  className?: string;
}

const Crumbs = ({ crumbs, className }: Props): JSX.Element => {
  return (
    <div className={`${classes.trail} ${className}`}>
      <div className={classes.crumbWrapper}>
        <Link href="/">
          <a className={classes.crumb} title="Help Center">
            Help Center
          </a>
        </Link>
      </div>
      {crumbs.map((crumb) => (
        <div key={crumb.url} className={classes.crumbWrapper}>
          <i className="material-icons-outlined">chevron_right</i>
          <Link href={crumb.url}>
            <a className={classes.crumb} title={crumb.title}>
              {crumb.title}
            </a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Crumbs;
