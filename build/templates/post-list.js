const read = require("../utils/read-file-async");

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

module.exports = async posts => {
  let postsArray = [];

  await asyncForEach(posts, async post => {
    let content = await read(post);
    if (content) content = JSON.parse(content);

    postsArray.push(content);
    console.log(postsArray);
  });

  return `export default ${JSON.stringify(postsArray, null, 2)};
  `;
};
