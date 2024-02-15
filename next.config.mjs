/** @type {import('next').NextConfig} */
//prod

const nextConfig = {
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true,
    },
};

module.exports = nextConfig;

//dev
// const nextConfig = {
//     output: 'export',
//     distDir: 'dist',
//     images: {
//         unoptimized: true,
//     },
// };
//  export default nextConfig;