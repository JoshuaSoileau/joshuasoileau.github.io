import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
      </li>
      <li>
        <Link href="/about">
          <a>About</a>
        </Link>
      </li>

      <style jsx>{`
        ul {
          display: flex;
          align-items: center;
          list-style: none;
        }

        li {
          padding: 8px;
        }
      `}</style>
    </ul>
  );
};

export default Navigation;
