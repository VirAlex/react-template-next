/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['images.ray-ban.com'],
  },
}

// next.config.js
const withVideos = require('next-videos')
 
module.exports = withVideos()