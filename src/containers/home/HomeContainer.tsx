import { Entry } from "contentful";
import Link from "next/link";
import React from "react";

import { PostPreview } from "@/components/post/PostPreview";
import { parseContentfulContentImage } from "@/lib/parseContentfulImageAsset";
import { CategorySkeleton } from "@/models/Category";
import { BlogPostSkeleton } from "@/models/Post";

import styles from "./HomeContainer.module.css";

interface HomeContainerProps {
  posts: Array<Entry<BlogPostSkeleton, undefined, string>>;
  popularPosts: Array<Entry<BlogPostSkeleton, undefined, string>>;
  categories: Array<Entry<CategorySkeleton, undefined, string>>;
}

export default function HomeContainer({
  posts,
  popularPosts,
  categories,
}: HomeContainerProps) {
  return (
    <div className={styles.home}>
      <section className={styles.homeBlogPosts}>
        {posts.map((post) => (
          <PostPreview
            key={post.fields.slug}
            title={post.fields.title}
            date={post.fields.publishedDate}
            summary={post.fields.excerpt}
            imageUrl={
              parseContentfulContentImage(post.fields.featuredImage)?.src
            }
            slug={post.fields.slug}
          />
        ))}
        {posts.length === 0 && <p>No posts found.</p>}
      </section>
      <aside className={styles.homeAside}>
        <section className={styles.categories}>
          <h3 className={styles.categoriesTitle}>Categories</h3>
          <ul>
            {categories?.map((category) => (
              <li key={category.sys.id} className={styles.categoryContainer}>
                <Link
                  href={`/category/${category.fields.slug}`}
                  className={styles.category}
                >
                  {category.fields.name}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.popularPosts}>
          <h3 className={styles.popularPostsTitle}>Popular Posts</h3>
          <ul className={styles.popularPostsList}>
            {popularPosts.map((post) => (
              <li key={post.fields.slug} className={styles.popularPost}>
                <Link
                  href={`/post/${post.fields.slug}`}
                  className={styles.popularPostUrl}
                >
                  {post.fields.title}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </aside>
    </div>
  );
}
