const readline = require("readline");
const fs = require("fs");

const createPost = require("./utils/create-post");
const slugify = require("./utils/slugify");

const ask = query => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  return new Promise(resolve =>
    rl.question(query, ans => {
      rl.close();
      resolve(ans);
    })
  );
};

const execute = async () => {
  /** TODO: stop doing anything if this value is falsey */
  const title = await ask("What is the title of the post? ");

  let slug = slugify(title);

  const slugResponse = await ask(`What URL should it live at?
  /blog/${slug}
  `);

  slug = slugResponse ? slugify(slugResponse) : slug;

  createPost({ slug, title: title.trim() });
};

execute();
