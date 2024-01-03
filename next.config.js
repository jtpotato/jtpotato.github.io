const generateRewrites = require("./src/lib/rewrites/generateRewrites")
const rewriteJson  = require('./src/lib/rewrites/rewrites.json')

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return generateRewrites(rewriteJson);
  },
};

module.exports = nextConfig;
