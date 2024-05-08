/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    async rewrites() {
        return [
            {
                source: "/:path*",
                destination: "http://3.35.4.74:8080/:path*"
            }
        ];
    }
};

export default nextConfig;
