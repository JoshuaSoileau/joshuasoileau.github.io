import React, { Fragment } from "react";
import Header from "./Header";

const Primary = ({ children }) => {
  return (
    <div className="outer">
      <Header />
      <div className="main" role="main">
        <div className="main__content">{children}</div>
      </div>
      <style jsx>{`
        .outer {
          display: flex;
          flex-direction: column;
          width: 100vw;
          height: 100vh;
          font-family: "Roboto", sans-serif;
          max-width: 840px;
          margin: 0 auto;
          padding: 0 20px;
        }
      `}</style>
    </div>
  );
};

export default Primary;
