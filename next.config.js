/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const images = {
  remotePatterns: [
    {
      protocol: 'https',
      hostname: 'google.com',
      port: '',
      pathname: '/account123/**',
    },
  ],
}

module.exports = nextConfig
