require('dotenv').config({ path: `${process.env.ENVIRONMENT || 'local'}` });

module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack']
    });

    return config;
  },
  env: {
    MENTOI_API_URL: process.env.MENTOI_API_URL
  }
};