import React from "react";

const Primary = ({ children }) => {
  return (
    <div className="main" role="main">
      <div className="main__content">{children}</div>

      <style jsx>{`
        .main {
          display: grid;
          grid-template-columns: 1fr fit-content(800px) 1fr;
          grid-template-rows: 1fr fit-content(800px) 1fr;
          width: 100vw;
          height: 100vh;
          background-color: #ededed;
          font-family: "Roboto", sans-serif;
        }

        .main__content {
          grid-area: conversation;
        }

        /* center conversation on screens > 800px wide */
        @media only screen and (min-width: 801px) {
          .main {
            grid-template-areas:
              ". conversation ."
              ". . .";
          }
        }

        /* fill screen with conversation on screens <= 800px wide */
        @media only screen and (max-width: 800px) {
          .main {
            grid-template-areas:
              "conversation conversation conversation"
              "conversation conversation conversation"
              "conversation conversation conversation";
          }
        }
      `}</style>
    </div>
  );
};

export default Primary;
