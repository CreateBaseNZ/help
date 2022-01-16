import Link from "next/link";
import CATEGORIES from "../constants/categories";
import { CategoryT } from "../types/Category";
import BorderButton from "./BorderButton";

import classes from "./Categories.module.scss";

interface Props {
  categories: CategoryT[];
}

const Categories = ({ categories }: Props): JSX.Element => {
  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        {categories.map((category) => (
          <section key={category.slug} className={classes.category}>
            <h3>
              <i className="material-icons-outlined">{category.icon}</i>
              {category.title}
            </h3>
            {category.featured.map((article) => (
              <Link
                key={article.slug}
                href={`/${category.slug}/${article.slug}`}
              >
                <a className={classes.article} title={article.title}>
                  {article.title}
                </a>
              </Link>
            ))}
            <Link href={`/${category.slug}`}>
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
