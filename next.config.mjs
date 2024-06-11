/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["predictaball-teamflagsbucketb6ca46de-2uk8faboxd6r.s3.eu-west-2.amazonaws.com"]
    },
    async headers() {
        return [
            {
                source: '/:path*{/}?',
                headers: [
                    {
                        key: 'X-Accel-Buffering',
                        value: 'no',
                    },
                ],
            },
        ]
    }
};

export default nextConfig;
