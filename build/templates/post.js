module.exports = ({ title, slug }) => `import React from 'react';
import Section from "../../components/Section";

const Post = () => {
  return (
    <Section>
      <h1>${title}</h1>
    </Section>
  );
};

export default Post;
`;
