import { Entry } from "contentful";

import { PostPreview } from "@/components/post/PostPreview";
import { parseContentfulContentImage } from "@/lib/parseContentfulImageAsset";
import { CategorySkeleton } from "@/models/Category";
import { BlogPostSkeleton } from "@/models/Post";

import styles from "./CategoryContainer.module.css";

interface CategoryContainerProps {
  category: Entry<CategorySkeleton> | null;
  posts: Array<Entry<BlogPostSkeleton, undefined, string>>;
}

export const CategoryContainer = ({
  category,
  posts,
}: CategoryContainerProps) => {
  if (!category) {
    return null;
  }

  return (
    <div className={styles.category}>
      <h1 className={styles.categoryTitle}>{category.fields.name as string}</h1>
      <div className={styles.blogPosts}>
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
      </div>
      {posts.length === 0 && <p>No posts found in this category!</p>}
    </div>
  );
};
