/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.clerk.com',
      },
      {
        protocol: 'https',
        hostname: 'jxdujzgweuaphpgoowhu.supabase.co',
      },
      {
        protocol: 'https',
        hostname: 'degoxmrelwotcgguvlfl.supabase.co',
      },
    ],
  },
}

export default nextConfig
