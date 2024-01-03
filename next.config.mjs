import { generateRewrites } from "./src/lib/rewrites/generateRewrites.mjs";
import rewriteJson from "./src/lib/rewrites/rewrites.json" assert { type: 'json' };;

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return generateRewrites(rewriteJson);
  },
};

module.exports = nextConfig;
