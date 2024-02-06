/** @type {import('next').NextConfig} */

const nextConfig = {
  output: process.env.NODE_ENV === "development" ? "standalone" : "export",
  distDir: "build",
};

module.exports = nextConfig;
