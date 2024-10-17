import { Entry } from "contentful";

import { client } from "./contentfulClient";

export const fetchPosts = async (): Promise<Entry<any>[]> => {
  const entries = await client.getEntries({
    content_type: "post",
    order: ["-fields.publishedDate"],
    limit: 10,
  });
  return entries.items;
};

export const fetchPostBySlug = async (
  slug: string,
): Promise<Entry<any> | null> => {
  const entries = await client.getEntries({
    content_type: "post",
    "fields.slug": slug,
    limit: 1,
  });
  return entries.items[0] || null;
};

export const fetchPopularPosts = async (): Promise<Entry<any>[]> => {
  const entries = await client.getEntries({
    content_type: "post",
    order: ["-fields.views"],
    limit: 5,
  });
  return entries.items;
};
/**
export const updatePostViewCount = async (slug: string): Promise<Entry<any>> => {
    const entries = await client.getEntries({
        content_type: 'post',
        'fields.slug': slug,
        limit: 1,
    });
    const post = entries.items[0];

    if (!post) {
        throw new Error(`Post with slug "${slug}" not found.`);
    }

    const currentViews = post.fields.views || 0;
    post.fields.views = currentViews + 1;

    const updatedPost = await post.update();
    await updatedPost.publish();

    return updatedPost;
};
**/
