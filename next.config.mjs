/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'dist',
    images: {
        unoptimized: true,
    },
};

export default nextConfig;

// const nextConfig = {
//     output: 'export',
//     distDir: 'dist',
// }
// // module.exports = nextConfig;
// export default nextConfig;