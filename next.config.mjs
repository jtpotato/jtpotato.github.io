import { generateRewrites } from "./src/lib/rewrites/generateRewrites";
import rewriteJson from "./src/lib/rewrites/rewrites.json";

/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return generateRewrites(rewriteJson);
  },
};

module.exports = nextConfig;
