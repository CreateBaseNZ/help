import Link from "next/link";
import CATEGORIES from "../constants/categories";
import BorderButton from "./BorderButton";

import classes from "./Categories.module.scss";

const Categories = () => {
  return (
    <div className={classes.container}>
      {CATEGORIES.map((category) => (
        <section key={category.url} className={classes.category}>
          <h3>
            <i className="material-icons-outlined">{category.icon}</i>
            {category.label}
          </h3>
          {category.articles.map((article) => (
            <Link key={article.url} href={`${category.url}${article.url}`}>
              <a className={classes.article}>{article.title}</a>
            </Link>
          ))}
          <BorderButton
            label="See all articles"
            rightIcon="arrow_forward"
            className={classes.seeAll}
          />
        </section>
      ))}
    </div>
  );
};

export default Categories;