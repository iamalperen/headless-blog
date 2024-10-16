import { Entry, Asset } from "contentful";

export interface AuthorFields {
  name: string;
  slug: string;
  bio?: string;
  avatar?: Asset;
  twitter?: string;
  linkedin?: string;
  instagram?: string;
}

export type Author = Entry<AuthorFields>;
