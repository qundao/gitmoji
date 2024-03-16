/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';
// const isProd = true;

const nextConfig = {
    basePath: isProd ? '/gitmoji' : '',
    assetPrefix: isProd ? '/gitmoji/' : '',  
    output: 'export',
};

export default nextConfig;
