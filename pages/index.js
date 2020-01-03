import { Fragment } from "react";
import Section from "../components/Section";
import BlogList from "../components/BlogList";

const HomePage = () => {
  return (
    <Fragment>
      <Section>
        <h1>My name is Josh Soileau.</h1>
        <p>I am a web developer.</p>
      </Section>
      <Section>
        <h2>My thoughts.</h2>
        <BlogList />
      </Section>
    </Fragment>
  );
};

export default HomePage;
