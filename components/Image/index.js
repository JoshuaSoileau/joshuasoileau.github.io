import React from "react";

const index = ({ src, alt, className }) => {
  return (
    <picture className={className}>
      <source srcSet={`/assets/${src}.webp`} type="image/webp" />
      <source srcSet={`/assets/${src}.jpg`} type="image/jpeg" />
      <img src={`/assets/${src}.jpg`} alt={alt} />
    </picture>
  );
};

export default index;
