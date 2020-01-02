const fs = require("fs");
const template = require("../templates/post-list");
const glob = require("glob");

const createPost = async () => {
  const allPosts = await glob("./pages/**/*.js", { cwd: __dirname });
  const path = `./pages/blog/_post-list.js`;

  console.log();

  glob("./pages/blog/**/*.js", {}, (err, allPosts) => {
    const content = template(allPosts);
    console.log({ content });

    fs.writeFile(path, content, () => {});
  });
};

module.exports = createPost;
