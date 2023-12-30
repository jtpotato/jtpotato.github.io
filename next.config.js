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
      }
    ]
  }
}

module.exports = nextConfig
