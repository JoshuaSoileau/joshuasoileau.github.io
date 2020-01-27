import React, { Fragment } from "react";
import Header from "./Header";

const Primary = ({ children }) => {
  return (
    <div className="outer">
      <Header />
      <div className="main" role="main">
        <div className="main__content">{children}</div>
      </div>
    </div>
  );
};

export default Primary;
