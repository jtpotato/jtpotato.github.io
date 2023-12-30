/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/posts",
        destination: "https://jtpotato-posts.netlify.app/posts"
      }
    ]
  }
}

module.exports = nextConfig
