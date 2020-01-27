import React from "react";
import Link from "next/link";
import Navigation from "./Navigation";
import Image from "../components/Image";

const Header = () => {
  return (
    <header>
      <Link href="/">
        <a className="logo">
          <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path
                d="M0 0h40v9.6H24.8V40H0V20h9.6v10.4h5.6V9.6H0V0z"
                fillOpacity=".429"
                fill="#1E58FF"
              />
              <path
                d="M27.6 0H40v20h-9.6V9.6h-5.6V40H0V20h9.6v10.4h5.6V0h12.4z"
                fillOpacity=".415"
                fill="#C316FF"
              />
            </g>
          </svg>
        </a>
      </Link>
      <Navigation />

      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
        }

        .logo {
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        .logo__text {
          font-size: 28px;
          font-weight: bold;
          margin-left: 20px;
        }

        .logo__image {
          width: 60px;
          height: 60px;
          border-radius: 80px;
        }
      `}</style>
    </header>
  );
};

export default Header;
