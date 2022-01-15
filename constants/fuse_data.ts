import { ReactElement } from "react";
import { FuseResult } from "../types/FuseResult";
import CATEGORIES from "./categories";

const extractText = (elem: ReactElement | string): string => {
  if (!elem) {
    return "";
  }
  if (typeof elem === "string") {
    return elem;
  }
  const children = elem.props && elem.props.children;
  if (children instanceof Array) {
    return children.map(extractText).join(" ");
  }
  return extractText(children);
};

const FUSE_DATA: FuseResult[] = CATEGORIES.map((category) =>
  category.subcategories.map((subcategory) =>
    subcategory.articles.map((article) => ({
      ...article,
      plain: extractText(article.content),
      trail: [
        { url: "/", title: "Help Center" },
        { url: category.url, title: category.title },
        { url: `${category.url}${article.url}`, title: article.title },
      ],
    }))
  )
).flat(2);

export default FUSE_DATA;
