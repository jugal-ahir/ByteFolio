module.exports = {
  reactStrictMode: false,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  output: "standalone",

  webpack: (config, { isServer }) => {
    if (isServer) {
      // Prevents lottie-web from being bundled during server-side rendering
      config.externals.push({
        "lottie-web": "lottie-web",
      });
    }
    return config;
  },
};
