import PRIMARY_FIELDS from "../constants/primary_fields";

export type ArticleT = {
  [K in typeof PRIMARY_FIELDS[number]]: string;
};
