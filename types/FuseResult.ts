import { Crumb } from "../components/Crumbs";
import { Article } from "./Article";

export interface FuseResult extends Article {
  plain: string;
  trail: Crumb[];
}
