import React from "react";
import Link from "next/link";
import allPosts from "../../pages/blog/_post-list";

const BlogList = () => {
  return (
    <ul>
      {allPosts.map(post => (
        <li>
          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default BlogList;
