import React from "react";

const Section = ({ children }) => {
  return (
    <section>
      {children}
      <style jsx>{`
        section {
          padding: 120px 0;
        }
      `}</style>
    </section>
  );
};

export default Section;
