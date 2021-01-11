import { Config } from "@jest/types";

const config: Config.InitialOptions = {
  verbose: true,
  testMatch: [
    "**/__tests__/**/*.test.ts?(x)",
  ],
  testEnvironment: "jsdom",
  coverageProvider: "v8",
  bail: true,
  clearMocks: true,
  // transform: {"\\.[jt]sx?$": "babel-jest"}
  transform: {},
  preset: 'ts-jest'
};

export default config;
