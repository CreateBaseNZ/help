import { ReactElement } from "react";

export interface IArticle {
  title: string;
  url: string;
  blurb: string;
  content: ReactElement;
}
