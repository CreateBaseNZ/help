import { ReactElement } from "react";

export type Article = {
  title: string;
  url: string;
  blurb: string;
  content: ReactElement;
};
