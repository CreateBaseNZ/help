import { IArticle } from "./Article";
import { Crumb } from "./Crumb";

export interface IFuseResult extends IArticle {
  plain: string;
  trail: Crumb[];
}
