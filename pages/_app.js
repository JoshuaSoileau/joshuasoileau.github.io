import Layout from "../layouts/Primary";

const App = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
      <style global jsx>
        {`
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
