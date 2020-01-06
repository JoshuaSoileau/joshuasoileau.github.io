const fs = require("fs");
const template = require("../templates/post-list");
const glob = require("glob");

const createPost = async () => {
  const path = `./_post-list.js`;

  glob("./pages/blog/**/*.meta.json", {}, (err, allPosts) => {
    if (!allPosts.length) return;

    template(allPosts).then(content => {
      console.log({ content });

      fs.writeFile(path, content, () => {});
    });
  });
};

module.exports = createPost;
