import { CategorySkeleton } from "@/models/Category";

import { client } from "./contentfulClient";

export const fetchCategories = async () => {
  const entries = await client.getEntries<CategorySkeleton>({
    content_type: "category",
  });
  return entries.items || [];
};

export const fetchCategoryBySlug = async (slug: string) => {
  const entries = await client.getEntries<CategorySkeleton>({
    content_type: "category",
    "fields.slug": slug,
    limit: 1,
  });

  if (entries.items.length > 0) {
    return entries.items[0];
  }

  return null;
};
