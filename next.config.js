module.exports = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  publicRuntimeConfig: {
    BASE_URL: process.env.BASE_URL,
    API_URL: process.env.API_URL,
  },
};
