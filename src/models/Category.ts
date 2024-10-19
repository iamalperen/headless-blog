import { EntryFieldTypes } from "contentful";

export type CategorySkeleton = {
  contentTypeId: "category";
  fields: {
    name: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
  };
};
