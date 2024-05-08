/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: [
            'cdn.pharmnews.com', 
            'bizpharm.co.kr', 
            'www.tylenol.co.kr', 
            'mirpharma.net', 
            'barkiri.cdn.ntruss.com', 
            'mblogthumb-phinf.pstatic.net', 
            'm.daewoong.co.kr', 
            'images.chosun.com', 
            'image.edaily.co.kr',
            'encrypted-tbn0.gstatic.com'
        ],
    },
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