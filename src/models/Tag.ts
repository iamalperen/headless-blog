import { EntryFieldTypes } from "contentful";

export type TagSkeleton = {
  contentTypeId: "tag";
  fields: {
    name: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
  };
};
