import React from "react";

import styles from "./Post.module.css";

interface PostProps {
  title: string;
  date: string;
  summary?: string;
  imageUrl?: string;
  slug: string;
}

export const PostPreview: React.FC<PostProps> = ({
  title,
  date,
  summary,
  imageUrl,
  slug,
}) => {
  return (
    <div className={styles.post}>
      <img src={imageUrl} alt={title} className={styles.postImage} />
      <div className={styles.postContent}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.date}>{date}</p>
        <p className={styles.summary}>{summary}</p>
        <a href={`/posts/${slug}`} className={styles.readMoreButton}>
          Read More
        </a>
      </div>
    </div>
  );
};
