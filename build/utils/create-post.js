const fs = require("fs");
const postTemplate = require("../templates/post");
const metaTemplate = require("../templates/post-meta");
const updatePostList = require("./update-post-list");

const createPost = ({ title, slug }) => {
  const path = `./pages/blog/${slug}.js`;
  const content = postTemplate({ title, slug });

  fs.writeFile(path, content, () => {
    const metaPath = `./pages/blog/${slug}.meta.js`;
    const metaContent = metaTemplate({ title, slug });

    console.log({ metaPath });
    console.log({ metaContent });

    fs.writeFile(metaPath, metaContent, updatePostList);
  });
};

module.exports = createPost;
