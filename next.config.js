module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  env: {
    MENTOI_API_URL: 'http://ec2-3-88-159-111.compute-1.amazonaws.com'
  }
};