jest.mock('next/config', () =>
  jest.fn(() => ({
    publicRuntimeConfig: {
      API_URL: process.env.API_URL,
      BASE_URL: process.env.BASE_URL,
    },
  })),
);

jest.mock('next/router', () => ({
  useRouter: jest.fn(() => ({ push: jest.fn() })),
}));

jest.mock('recharts', () => ({
  BarChart: () => null,
  Bar: () => null,
  XAxis: () => null,
  YAxis: () => null,
  ResponsiveContainer: () => null,
  Tooltip: () => null,
}));

export {};
