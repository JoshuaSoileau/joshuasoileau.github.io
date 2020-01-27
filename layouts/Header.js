import React from "react";
import Link from "next/link";
import Navigation from "./Navigation";
import Image from "../components/Image";

const Header = () => {
  return (
    <header>
      <Link href="/">
        <a className="logo">
          {/* <svg width="40" height="40" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path
                d="M0 0h40v9.6H24.8v17.2c0 8.8-4.133 13.2-12.4 13.2S0 35.6 0 26.8V20h9.6v6.8c-.08 2.4.834 3.6 2.74 3.6 1.907 0 2.86-1.2 2.86-3.6V9.6H0V0z"
                fillOpacity=".429"
                fill="#1E58FF"
              />
              <path
                d="M27.6 0C35.867 0 40 4.4 40 13.2V20h-9.6v-6.8c0-2.4-.933-3.6-2.8-3.6-2.8 0-2.8 2.092-2.8 3.602V26.8c0 8.8-4.133 13.2-12.4 13.2S0 35.6 0 26.8V20h9.6v6.8c-.08 2.4.834 3.6 2.74 3.6 1.907 0 2.86-1.2 2.86-3.6V13.2C15.2 4.4 19.333 0 27.6 0z"
                fillOpacity=".415"
                fill="#C316FF"
              />
            </g>
          </svg> */}
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
          <span className="logo__text">Joshua Soileau</span>
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
