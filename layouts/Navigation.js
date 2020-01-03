import React from "react";
import Link from "next/link";

const Navigation = () => {
  return (
    <ul>
      <li>
        <Link href="/blog">Blog</Link>
      </li>
      <li>
        <Link href="/about">About</Link>
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
