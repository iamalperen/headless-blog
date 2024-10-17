import { Entry, EntrySkeletonType } from "contentful";

export interface TagFields extends EntrySkeletonType {
  name: string;
  slug: string;
}

export type Tag = Entry<TagFields>;
