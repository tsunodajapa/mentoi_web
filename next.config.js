module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  env: {
    MENTOI_API_URL: 'https://api.mentoi.app'
    // MENTOI_API_URL: 'http://localhost:3333'
  }
};