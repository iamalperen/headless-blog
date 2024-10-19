import { Metadata } from "next";

import { CategoryContainer } from "@/containers/category/CategoryContainer";
import { createMetadata } from "@/lib/createMetadata";
import { fetchCategoryBySlug } from "@/services/categories";
import { fetchPostsByCategory } from "@/services/posts";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const category = await fetchCategoryBySlug(slug);

  return createMetadata({
    title: `${category?.fields?.name} Category`,
    description: `Explore the ${category?.fields?.name} category and its content.`,
    image: "https://yoursite.com/images/placeholder.png",
    url: `https://yoursite.com/category/${slug}`,
  });
}

export default async function Category({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  const category = await fetchCategoryBySlug(slug);
  const posts = category ? await fetchPostsByCategory(category.sys.id) : [];

  return <CategoryContainer category={category} posts={posts} />;
}
