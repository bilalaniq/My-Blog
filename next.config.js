const { withContentlayer } = require('next-contentlayer');

const nextConfig = {
  output: 'export',                   // for static export (out/ folder)
  basePath: '/NullSect',             // important for GitHub Pages
  assetPrefix: '/NullSect/',         // also important
  images: {
    unoptimized: true,               // needed for static export with next/image
  },
  compiler: {
    removeConsole: true,
  },
};

module.exports = withContentlayer(nextConfig);
