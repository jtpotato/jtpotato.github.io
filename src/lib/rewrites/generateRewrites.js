function generateRewrites(rewriteObject) {
  let rewrites = [];
  /** @type {[string, string]} */
  const entries = Object.entries(rewriteObject);

  entries.forEach((rewrite) => {
    rewrites.push(
      {
        source: rewrite[0],
        destination: rewrite[1],
      },
      {
        source: rewrite[0] + "/:content*",
        destination: rewrite[1] + "/:content*",
      }
    );
  });

  return rewrites
}

module.exports = {
  generateRewrites
}