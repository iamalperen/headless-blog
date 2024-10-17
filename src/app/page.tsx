import HomeContainer from "@/containers/home/HomeContainer";
import { createMetadata } from "@/lib/createMetadata";

export const metadata = createMetadata({
  title: "Welcome to Headless Blog",
  description: "SEO-friendly headless blog with Next.js",
  image: "https://example.com/featured-image.jpg",
  url: `https://yoursite.com/author/nextjs-blog`,
});

export default function Home() {
  return <HomeContainer />;
}
