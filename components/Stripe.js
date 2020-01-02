import React from "react";

const Stripe = () => {
  return (
    <div className="stripe-background">
      <div className="stripe s0"></div>
      <div className="stripe s2"></div>
      <div className="stripe s3"></div>
      <div className="stripe s4"></div>

      <style jsx>
        {`
          .stripe-background {
            position: absolute;
            left: 0;
            top: 50%;
            right: 0;
            transform: skewY(-12deg);
            pointer-events: none;

            top: 0;
            height: 608px;
            height: calc(190px * 3.2);
            z-index: -1;
          }

          .stripe-background .stripe {
            position: absolute;
            top: auto;
            left: 0;
            right: 0;
            height: 190px;
          }

          .stripe-background .s0 {
            bottom: 0;
            height: 1000px;
            background: -webkit-gradient(
              linear,
              left top,
              left bottom,
              from(rgba(230, 235, 241, 0.45)),
              to(rgba(246, 249, 252, 0.5))
            );
            background: linear-gradient(
              180deg,
              rgba(230, 235, 241, 0.45),
              rgba(246, 249, 252, 0.5)
            );
          }

          .stripe-background .s2 {
            bottom: 190px;
            bottom: calc(190px * 1);
            background: hsla(0, 0%, 100%, 0.45);
            right: 70%;
          }

          .stripe-background .s3 {
            bottom: 380px;
            bottom: calc(190px * 2);
            background: #f6f9fc;
          }

          .stripe-background .s4 {
            bottom: 570px;
            bottom: calc(190px * 3);
            background: -webkit-gradient(
              linear,
              left top,
              right top,
              from(#f6f9fc),
              to(#e6ebf1)
            );
            background: linear-gradient(90deg, #f6f9fc, #e6ebf1);
          }
        `}
      </style>
    </div>
  );
};

export default Stripe;
