import React from "react";
import Link from "next/link";
import allPosts from "../../_post-list";

const BlogList = () => {
  return (
    <ul>
      {allPosts.map(post => (
        <li key={post.slug}>
          <Link href={`/blog/${post.slug}`}>
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default BlogList;
