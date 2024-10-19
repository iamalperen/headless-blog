import { Metadata } from "next";

import { TagContainer } from "@/containers/tag/TagContainer";
import { createMetadata } from "@/lib/createMetadata";
import { fetchPostsByTag } from "@/services/posts";
import { fetchTagBySlug } from "@/services/tags";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const tag = await fetchTagBySlug(slug);

  return createMetadata({
    title: `${tag?.fields?.name} Posts`,
    description: `Explore the posts tagged with ${tag?.fields?.name}.`,
    image: "https://yoursite.com/images/placeholder.png",
    url: `https://yoursite.com/tag/${slug}`,
  });
}

export default async function Tag({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const tag = await fetchTagBySlug(slug);
  const posts = tag ? await fetchPostsByTag(tag.sys.id) : [];

  return <TagContainer tag={tag} posts={posts} />;
}
