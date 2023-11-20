const withMDX = require('@next/mdx')()
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
  async rewrites() {
    return [
      {
        source: '/public/images/:path*.png',
        destination: '/optimised/:path*.webp',
      },
    ]
  }
}
 
module.exports = withMDX(nextConfig)