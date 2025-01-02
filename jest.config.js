// Sync object
const config = {
  preset: "ts-jest",
  verbose: true,
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testPathIgnorePatterns: ["/node_modules/", "dist"],
};
module.exports = config;
