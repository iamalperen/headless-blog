import { Document } from "@contentful/rich-text-types";
import { Entry, Asset, EntrySkeletonType } from "contentful";

import { AuthorFields } from "./Author";
import { CategoryFields } from "./Category";
import { CommentFields } from "./Comment";
import { TagFields } from "./Tag";

export interface PostFields extends EntrySkeletonType {
  title: string;
  slug: string;
  excerpt?: string;
  content: Document;
  featuredImage?: Asset;
  author: Entry<AuthorFields>;
  tags?: Entry<TagFields>[];
  category?: Entry<CategoryFields>;
  publishedDate: string;
  isPopular?: boolean;
  views: number;
  comments?: Entry<CommentFields>[];
}

export type Post = Entry<PostFields>;
