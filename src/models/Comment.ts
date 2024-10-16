import { Entry } from "contentful";

import { Post } from "./Post";

export interface CommentFields {
  author: string;
  email: string;
  content: string;
  post: Entry<Post>;
  publishedDate: string;
}

export type Comment = Entry<CommentFields>;
