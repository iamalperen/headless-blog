import { Entry } from "contentful";

import client from "./contentfulClient";

export const fetchCategories = async (): Promise<Entry<any>[]> => {
  const entries = await client.getEntries({
    content_type: "category",
  });
  return entries.items;
};

export const fetchPostsByCategory = async (
  categorySlug: string,
): Promise<Entry<any>[]> => {
  const entries = await client.getEntries({
    content_type: "post",
    "fields.category.fields.slug": categorySlug,
    order: "-fields.publishedDate",
  });
  return entries.items;
};
