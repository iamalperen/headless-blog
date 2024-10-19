import { Metadata } from "next";

import { PostComponent } from "@/components/post/PostComponent";
import { createMetadata } from "@/lib/createMetadata";
import { fetchPostBySlug } from "@/services/posts";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const { slug } = params;
  const post = await fetchPostBySlug(slug);

  return createMetadata({
    title: post?.fields?.title || "PostComponent Details",
    description: post?.fields?.excerpt || "PostComponent Details",
    image: "https://yoursite.com/images/placeholder.png",
    url: `https://yoursite.com/category/${slug}`,
  });
}

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const post = await fetchPostBySlug(slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <PostComponent
      title={post.fields.title}
      content={post.fields.content}
      featuredImage={post.fields.featuredImage}
      publishedDate={post.fields.publishedDate}
    />
  );
}
