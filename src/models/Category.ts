import { Entry, EntrySkeletonType } from "contentful";

export interface CategoryFields extends EntrySkeletonType {
  name: string;
  slug: string;
  description?: string;
}

export type Category = Entry<CategoryFields>;
