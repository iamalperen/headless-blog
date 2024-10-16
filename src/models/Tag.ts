import { Entry } from "contentful";

export interface TagFields {
  name: string;
  slug: string;
}

export type Tag = Entry<TagFields>;
