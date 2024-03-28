import m from "@next/mdx"
const withMdx = m()

/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() { 
    return [
      {
        source: '/genshin-visions',
        destination: 'https://jtpotato-genshin-visions.vercel.app/genshin-visions',
        permanent: true
      }
    ]
  },
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
};

export default withMdx(nextConfig);
