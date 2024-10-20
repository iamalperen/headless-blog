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

export const fetchPopularPosts = async () => {
  const entries = await client.getEntries<BlogPostSkeleton>({
    content_type: "post",
    order: ["-fields.views"],
    limit: 10,
  });
  return entries.items || [];
};

export const fetchPostBySlug = async (slug: string) => {
  const entries = await client.getEntries<BlogPostSkeleton>({
    content_type: "post",
    limit: 1,
    "fields.slug": slug,
  });

  if (!entries.items.length) {
    return null;
  }

  return entries.items[0];
};

export const fetchPostsByTag = async (tagId: string) => {
  const entries = await client.getEntries<BlogPostSkeleton>({
    content_type: "post",
    order: ["-fields.publishedDate"],
    limit: 10,
    "fields.tags.sys.id": tagId,
  });

  return entries.items || [];
};
