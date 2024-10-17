import React from "react";

import { Category } from "@/models/Category";
import { Post } from "@/models/Post";

interface HomeContainerProps {
  posts: Post[];
  popularPosts: Post[];
  categories: Category[];
}

export default function HomeContainer({
  posts,
  popularPosts,
  categories,
}: HomeContainerProps) {
  return (
    <div>
      <section>
        <h2>Recent Posts</h2>
        {posts.map((post) => (
          <div key={post.sys.id}>
            <h3>{post.fields.title as string}</h3>
            <p>{post.fields.excerpt as string}</p>
            <a href={`/posts/${post.fields.slug as string}`}>Read more</a>
          </div>
        ))}
      </section>

      <aside>
        <section>
          <h2>Categories</h2>
          <ul>
            {categories.map((category) => (
              <li key={category.sys.id}>
                <a href={`/category/${category.fields.slug as string}`}>
                  {category.fields.name as string}
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Popular Posts</h2>
          {popularPosts.map((post) => (
            <div key={post.sys.id}>
              <h3>{post.fields.title as string}</h3>
              <a href={`/posts/${post.fields.slug as string}`}>Read more</a>
            </div>
          ))}
        </section>
      </aside>
    </div>
  );
}
