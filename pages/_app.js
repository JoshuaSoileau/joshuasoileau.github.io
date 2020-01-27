import Layout from "../layouts/Primary";

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
      <style global jsx>
        {`
          @import url("https://rsms.me/inter/inter.css");
          html,
          body {
            font-family: "Inter", sans-serif;
            font-size: 18px;
            line-height: 1.8em;
            font-family: Inter, sans-serif;
            letter-spacing: -0.014em;
            -webkit-font-feature-settings: "ss03", "zero", "cv08", "cv11" 1;
            font-feature-settings: "ss03", "zero", "cv08", "cv11" 1;
            color: #292e31;
          }
          @supports (font-variation-settings: normal) {
            html {
              font-family: "Inter var", sans-serif;
            }
          }

          h1 {
            font-size: 6vw;
            line-height: 1.1em;
            line-height: 0.9em;
            margin: 0.2em 0 0.6em;
            font-weight: 900;
          }

          h2 {
            font-size: 4em;
            line-height: 1.1em;
            margin: 1em 0 0;
            font-weight: 800;
            letter-spacing: -0.022em;
            font-weight: 900;
          }
          @media (max-width: 900px) {
            h2 {
              font-size: 3em;
            }
          }

          h3 {
            font-size: 3em;
            line-height: 1.1em;
            margin-bottom: 0.6em;
            font-weight: 800;
            letter-spacing: -0.022em;
          }

          h5 {
            font-size: 1.3em;
            line-height: 1.1em;
            margin-bottom: 0.9em;
            margin-top: 0.6em;
            font-weight: 800;
            letter-spacing: -0.022em;
          }

          h6 {
            font-size: 0.9em;
            line-height: 1.1em;
            margin: 0.5em 0;
            margin-bottom: 0.6em;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            font-weight: 400;
            color: $grey3;
          }
          b {
            font-weight: 900;
          }

          *,
          *:before,
          *:after {
            box-sizing: border-box;
          }
          body {
            margin: 0;
            padding: 0;
            width: 100vw;
            height: 100vh;
          }
        `}
      </style>
    </Layout>
  );
};

export default App;
