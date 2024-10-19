import { TagSkeleton } from "@/models/Tag";

import { client } from "./contentfulClient";

export const fetchLatestTags = async () => {
  const entries = await client.getEntries<TagSkeleton>({
    content_type: "tag",
    order: ["-sys.createdAt"],
    limit: 10,
  });

  return entries.items || [];
};

export const fetchTagBySlug = async (slug: string) => {
  const entries = await client.getEntries<TagSkeleton>({
    content_type: "tag",
    "fields.slug": slug,
    limit: 1,
  });

  if (!entries.items.length) {
    return null;
  }

  return entries.items[0];
};
