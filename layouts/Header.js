import React from "react";
import Link from "next/link";
import Navigation from "./Navigation";
import logo from "../assets/josh.png";

const Header = () => {
  return (
    <header>
      <Link href="/">
        <a className="logo">
          <img src={logo} alt="Josh Soileau" className="logo__image" />
          <span className="logo__text">Joshua Soileau</span>
        </a>
      </Link>
      <Navigation />

      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 0;
        }

        .logo {
          display: flex;
          align-items: center;
          cursor: pointer;
        }

        .logo__text {
          font-family: "Roboto", sans-serif;
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
