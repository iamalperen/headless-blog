import { EntryFieldTypes } from "contentful";

import { AuthorSkeleton } from "@/models/Author";
import { CategorySkeleton } from "@/models/Category";

import { TagSkeleton } from "./Tag";

export type BlogPostSkeleton = {
  contentTypeId: "post";
  fields: {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    excerpt: EntryFieldTypes.Text;
    content: EntryFieldTypes.RichText;
    featuredImage: EntryFieldTypes.AssetLink;
    author: EntryFieldTypes.EntryLink<AuthorSkeleton>;
    tags: EntryFieldTypes.Array<EntryFieldTypes.EntryLink<TagSkeleton>>;
    category: EntryFieldTypes.EntryLink<CategorySkeleton>;
    publishedDate: EntryFieldTypes.Date;
    isPopular: EntryFieldTypes.Boolean;
    views: EntryFieldTypes.Integer;
  };
};
