import Link from "next/link";
import CATEGORIES from "../constants/categories";
import BorderButton from "./BorderButton";

import classes from "./Categories.module.scss";

const Categories = (): JSX.Element => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        {CATEGORIES.map((category) => (
          <section key={category.url} className={classes.category}>
            <h3>
              <i className="material-icons-outlined">{category.icon}</i>
              {category.title}
            </h3>
            {category.featured.map((article) => (
              <Link key={article.url} href={`${category.url}${article.url}`}>
                <a className={classes.article} title={article.title}>
                  {article.title}
                </a>
              </Link>
            ))}
            <Link href={category.url}>
              <a>
                <BorderButton
                  label="See all articles"
                  rightIcon="arrow_forward"
                  className={classes.seeAll}
                />
              </a>
            </Link>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Categories;
