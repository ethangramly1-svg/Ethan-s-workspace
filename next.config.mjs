const isPagesBuild = process.env.GH_PAGES === 'true';
const repoBase = '/Ethan-s-workspace';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: isPagesBuild ? 'export' : undefined,
  basePath: isPagesBuild ? repoBase : '',
  assetPrefix: isPagesBuild ? `${repoBase}/` : '',
  trailingSlash: isPagesBuild,
  images: {
    unoptimized: isPagesBuild,
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'me7aitdbxq.ufs.sh' },
      { protocol: 'https', hostname: 'prod.spline.design' },
    ],
  },
};

export default nextConfig;
