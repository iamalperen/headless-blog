import { Entry } from "contentful";

import client from "./contentfulClient";

export const searchPosts = async (query: string): Promise<Entry<any>[]> => {
  const entries = await client.getEntries({
    content_type: "post",
    query,
    order: "-fields.publishedDate",
  });
  return entries.items;
};
