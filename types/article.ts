import { ReactElement } from "react";

export interface Article {
  title: string;
  url: string;
  blurb: string;
  content: ReactElement;
}
