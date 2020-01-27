import React from "react";

const Section = ({ children }) => {
  return (
    <section>
      {children}
      <style jsx>{`
        section {
          padding: 2em 13em;
          display: flex;
          justify-content: center;
          flex-direction: column;
          min-height: 100vh;
        }
      `}</style>
    </section>
  );
};

export default Section;
