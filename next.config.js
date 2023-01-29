/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: ["daisyui.com", "cdn1.vectorstock.com"],
        formats: ["image/avif", "image/webp"],
    },
};

module.exports = nextConfig;
