import { EntryFieldTypes } from "contentful";

export type AuthorSkeleton = {
  contentTypeId: "author";
  fields: {
    name: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    bio: EntryFieldTypes.Text;
    avatar: EntryFieldTypes.AssetLink;
    twitter: EntryFieldTypes.Text;
    linkedin: EntryFieldTypes.Text;
    instagram: EntryFieldTypes.Text;
  };
};
