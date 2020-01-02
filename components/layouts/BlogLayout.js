import React from "react";
import Stripe from "../Stripe";

export default ({ children }) => (
  <div className="blog-layout">
    <Stripe />
    {children}
    <style jsx>{`
      margin: auto;
    `}</style>
  </div>
);
