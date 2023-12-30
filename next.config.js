/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/posts",
        destination: "https://jtpotato-posts.vercel.app/posts"
      }
    ]
  }
}

module.exports = nextConfig
