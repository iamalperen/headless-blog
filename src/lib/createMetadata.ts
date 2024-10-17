import { Metadata } from "next";

interface MetadataParams {
  title: string;
  description?: string;
  image?: string;
  url?: string;
}

export function createMetadata({
  title,
  description = "Default description",
  image,
  url,
}: MetadataParams): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [
        {
          url: image || "/default-image.jpg",
          width: 800,
          height: 600,
          alt: title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image || "/default-image.jpg"],
    },
  };
}
