/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                hostname:"images.unsplash.com"
            },
            {
                hostname:"cdn.dummyjson.com"
            }
        ]
    }
};

export default nextConfig;
