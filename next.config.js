const withNextPlugins = require('next-compose-plugins')
const withVideos = require('next-videos')

/** @type {import('next').NextConfig} */
module.exports = withNextPlugins([withVideos], {
  reactStrictMode: true,
  images: {
    domains: ['images.ray-ban.com'],
  },
})
