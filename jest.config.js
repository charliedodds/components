module.exports = {
  roots: ["<rootDir>/src"],
  collectCoverageFrom: [
    "src/**/*.{js,jsx,ts,tsx}",
    "!src/**/*.d.ts",
    "!src/mocks/**",
  ],
  coveragePathIgnorePatterns: [],
  setupFilesAfterEnv: ["./config/jest/setup.ts"],
  testEnvironment: "jsdom",
  modulePaths: ["<rootDir>/src"],
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
    "^.+\\.module\\.(css|sass|scss)$",
  ],
  moduleNameMapper: {
    "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy",
  },
  moduleFileExtensions: [
    "tsx",
    "ts",
    "web.js",
    "js",
    "web.ts",
    "web.tsx",
    "json",
    "web.jsx",
    "jsx",
    "node",
  ],
  resetMocks: true,
};

