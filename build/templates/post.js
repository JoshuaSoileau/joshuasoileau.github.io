module.exports = ({ title, slug }) => `import React from 'react';

const Post = () => {
  return (
    <div>
      <h1>${title}</h1>
    </div>
  );
};

export default Post;
`;
