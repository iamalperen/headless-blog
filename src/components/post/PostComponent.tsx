import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { parseContentfulContentImage } from "@/lib/parseContentfulImageAsset";

import styles from "./PostComponent.module.css";

interface PostProps {
  title: string;
  content: any;
  featuredImage?: any;
  publishedDate: string;
}

export const PostComponent = (props: PostProps) => {
  const { title, content, featuredImage, publishedDate } = props;
  const parsedImage = parseContentfulContentImage(featuredImage);

  return (
    <div className={styles.post}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.date}>{publishedDate}</p>
      {featuredImage && (
        <img
          src={parsedImage?.src}
          alt={title}
          style={{ width: "100%", height: "auto" }}
        />
      )}
      <div className={styles.content}>{documentToReactComponents(content)}</div>
    </div>
  );
};
