import { Entry } from "contentful";

export interface CategoryFields {
  name: string;
  slug: string;
  description?: string;
}

export type Category = Entry<CategoryFields>;
