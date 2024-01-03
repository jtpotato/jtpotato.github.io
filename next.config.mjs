import generateRewritesModule from "./src/lib/rewrites/generateRewrites.js";
import rewriteJson from "./src/lib/rewrites/rewrites.json" assert { type: 'json' };

const { generateRewrites } = generateRewritesModule

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return generateRewrites(rewriteJson);
  },
};

module.exports = nextConfig;
