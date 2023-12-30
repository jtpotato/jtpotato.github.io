/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/posts',
        destination: 'https://jtpotato-posts.vercel.app/posts',
      },
      {
        source: "/posts/:slug*",
        destination: "https://jtpotato-posts.vercel.app/posts/:slug*"
      },
      {
        source: '/genshin-visions',
        destination: 'https:/jtpotato-genshin-visions.vercel.app/genshin-visions'
      },
      {
        source: '/genshin-visions/:content*',
        destination: 'https:/jtpotato-genshin-visions.vercel.app/genshin-visions/:content*'
      },
    ]
  }
}

module.exports = nextConfig
