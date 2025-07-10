/** @type {import('next').NextConfig} */

const { withContentlayer } = require('next-contentlayer');

const repoName = 'NullSect'; // 👈 MUST match your GitHub repo name exactly (case-sensitive)

const nextConfig = {
  output: 'export',
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  images: {
    unoptimized: true,
  },
  compiler: {
    removeConsole: true,
  },
};

module.exports = withContentlayer(nextConfig);
