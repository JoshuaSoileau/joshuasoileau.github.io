const slugify = str =>
  str
    .replace(/[^\w\s]/gi, "")
    .trim()
    .replace(/\s+/g, "-")
    .toLowerCase();

module.exports = slugify;
