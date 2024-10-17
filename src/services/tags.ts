import { Entry } from "contentful";

import { client } from "./contentfulClient";

export const fetchTags = async (): Promise<Entry<any>[]> => {
  const entries = await client.getEntries({
    content_type: "tag",
  });
  return entries.items;
};

export const fetchPostsByTag = async (
  tagSlug: string,
): Promise<Entry<any>[]> => {
  const entries = await client.getEntries({
    content_type: "post",
    "fields.tags.fields.slug": tagSlug,
    order: ["-fields.publishedDate"],
  });
  return entries.items;
};
