import { Entry } from "contentful";

import { PostPreview } from "@/components/post-preview/PostPreview";
import { parseContentfulContentImage } from "@/lib/parseContentfulImageAsset";
import { BlogPostSkeleton } from "@/models/Post";
import { TagSkeleton } from "@/models/Tag";

import styles from "./TagContainer.module.css";

interface TagContainerProps {
  tag: Entry<TagSkeleton> | null;
  posts: Array<Entry<BlogPostSkeleton, undefined, string>>;
}

export const TagContainer = ({ tag, posts }: TagContainerProps) => {
  if (!tag) {
    return null;
  }

  return (
    <div className={styles.tag}>
      <h1 className={styles.tagTitle}>
        {tag.fields.name as string} tagged Blog Posts
      </h1>
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
