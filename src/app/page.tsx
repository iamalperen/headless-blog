import HomeContainer from "@/containers/home/HomeContainer";
import { createMetadata } from "@/lib/createMetadata";
import { Category } from "@/models/Category";
import { Post } from "@/models/Post";
import { fetchCategories } from "@/services/categories";
import { fetchPopularPosts, fetchPosts } from "@/services/posts";

export const metadata = createMetadata({
  title: "Welcome to Headless Blog",
  description: "SEO-friendly headless blog with Next.js",
  image: "https://example.com/featured-image.jpg",
  url: `https://yoursite.com/author/nextjs-blog`,
});

export default async function Home() {
  const posts: Post[] = await fetchPosts();
  const popularPosts: Post[] = await fetchPopularPosts();
  const categories: Category[] = await fetchCategories();

  return (
    <HomeContainer
      posts={posts}
      popularPosts={popularPosts}
      categories={categories}
    />
  );
}
