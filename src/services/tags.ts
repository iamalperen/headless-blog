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
