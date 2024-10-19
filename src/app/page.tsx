import HomeContainer from "@/containers/home/HomeContainer";
import { createMetadata } from "@/lib/createMetadata";
import { fetchCategories } from "@/services/categories";
import { fetchPopularPosts, fetchPosts } from "@/services/posts";
import { fetchLatestTags } from "@/services/tags";

export const metadata = createMetadata({
  title: "Welcome to Headless Blog",
  description: "SEO-friendly headless blog with Next.js",
  image: "https://example.com/featured-image.jpg",
  url: `https://yoursite.com/author/nextjs-blog`,
});

export default async function Home() {
  const posts = await fetchPosts();
  const categories = await fetchCategories();
  const popularPosts = await fetchPopularPosts();
  const tags = await fetchLatestTags();

  return (
    <HomeContainer
      posts={posts}
      categories={categories}
      popularPosts={popularPosts}
      tags={tags}
    />
  );
}
