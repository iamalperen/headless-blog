import { Entry, EntrySkeletonType } from "contentful";

import { PostFields } from "./Post";

export interface CommentFields extends EntrySkeletonType {
  author: string;
  email: string;
  content: string;
  post: Entry<PostFields>;
  publishedDate: string;
}

export type Comment = Entry<CommentFields>;
