// Sync object
const config = {
  preset: "ts-jest",
  verbose: true,
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testPathIgnorePatterns: ["/node_modules/", "dist"],
  testMatch: ["**/__tests__/**/*.(spec|test).[jt]s?(x)"],
};
module.exports = config;
