module.exports = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx)'],
  staticDirs: ['../public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-addon-next-router',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  env: (config) => ({
    ...config,
    BASE_URL: 'http://localhost:6006/',
    API_URL: 'http://localhost:6006/api',
  }),
};
