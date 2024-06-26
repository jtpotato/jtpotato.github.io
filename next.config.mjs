/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  webpack: (config, options) => {
    config.module.rules.push({
      test: /\.frag/,
      type: "asset/source",
    });

    return config;
  },
  output: "export",
};

export default nextConfig;
