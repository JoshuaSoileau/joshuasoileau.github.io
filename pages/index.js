import { Fragment } from "react";
import Section from "../components/Section";
import BlogList from "../components/BlogList";

const HomePage = () => {
  return (
    <Fragment>
      <Section>
        <p>Hi, my name is</p>
        <h1>Joshua Soileau</h1>
        <p>and I build things on the internet.</p>
      </Section>
      <Section>
        <h2>My thoughts.</h2>
        <BlogList />
      </Section>
      <style jsx>{`
        h1 {
          margin: 0;
        }
      `}</style>
    </Fragment>
  );
};

export default HomePage;
