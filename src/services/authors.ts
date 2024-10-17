import { Entry } from "contentful";

import { client } from "./contentfulClient";

export const fetchAuthors = async (): Promise<Entry<any>[]> => {
  const entries = await client.getEntries({
    content_type: "author",
  });
  return entries.items;
};

export const fetchAuthorBySlug = async (
  authorSlug: string,
): Promise<Entry<any> | null> => {
  const entries = await client.getEntries({
    content_type: "author",
    "fields.slug": authorSlug,
    limit: 1,
  });
  return entries.items[0] || null;
};

export const fetchPostsByAuthor = async (
  authorSlug: string,
): Promise<Entry<any>[]> => {
  const entries = await client.getEntries({
    content_type: "post",
    "fields.author.fields.slug": authorSlug,
    order: ["-fields.publishedDate"],
  });
  return entries.items;
};
