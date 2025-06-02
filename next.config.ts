/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // Clean setup — no deprecated configs
  images: {
    domains: ["lastfm.freetls.fastly.net"]
  },
};

module.exports = nextConfig;
