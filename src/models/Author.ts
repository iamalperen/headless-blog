import { Entry, Asset, EntrySkeletonType } from "contentful";

export interface AuthorFields extends EntrySkeletonType {
  fields: {
    name: string;
    slug: string;
    bio?: string;
    avatar?: Asset;
    twitter?: string;
    linkedin?: string;
    instagram?: string;
  };
}

export type Author = Entry<AuthorFields>;
