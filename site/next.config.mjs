/** @type {import('next').NextConfig} */
// const isProd = process.env.NODE_ENV === 'production';
const isProd = true;

const nextConfig = {
    basePath: isProd ? '/wayback-gitmoji' : '',
    assetPrefix: isProd ? '/wayback-gitmoji/' : '',  
};

export default nextConfig;
