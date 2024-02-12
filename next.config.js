/** @type {import('next').NextConfig} */
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

const nextConfig = {
  output: process.env.NODE_ENV === "development" ? "standalone" : "export",
  distDir: "build",
};

module.exports = withBundleAnalyzer(nextConfig);
