import { EntryFieldTypes } from "contentful";

import { BlogPostSkeleton } from "./Post";

export type CommentSkeleton = {
  contentTypeId: "comment";
  fields: {
    author: EntryFieldTypes.Text;
    email: EntryFieldTypes.Text;
    content: EntryFieldTypes.Text;
    post: EntryFieldTypes.EntryLink<BlogPostSkeleton>;
    publishedDate: EntryFieldTypes.Date;
  };
};
