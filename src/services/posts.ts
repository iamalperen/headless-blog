import { BlogPostSkeleton } from "@/models/Post";

import { client } from "./contentfulClient";

export const fetchPosts = async () => {
  const entries = await client.getEntries<BlogPostSkeleton>({
    content_type: "post",
    order: ["-fields.publishedDate"],
    limit: 10,
  });
  return entries.items || [];
};

export const fetchPostsByCategory = async (categoryId: string) => {
  const entries = await client.getEntries<BlogPostSkeleton>({
    content_type: "post",
    order: ["-fields.publishedDate"],
    limit: 10,
    "fields.category.sys.id": categoryId,
  });
  return entries.items || [];
};
