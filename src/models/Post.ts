import { Document } from "@contentful/rich-text-types";
import { Entry, Asset } from "contentful";

import { Author } from "./Author";
import { Category } from "./Category";
import { Tag } from "./Tag";

export interface PostFields {
  title: string;
  slug: string;
  excerpt?: string;
  content: Document;
  featuredImage?: Asset;
  author: Entry<Author>;
  tags?: Entry<Tag>[];
  category?: Entry<Category>;
  publishedDate: string;
  isPopular?: boolean;
  views: number;
}

export type Post = Entry<PostFields>;
