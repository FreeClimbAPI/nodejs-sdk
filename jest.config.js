// Sync object
const config = {
  preset: "ts-jest",
  verbose: true,
  transform: {
    "^.+\\.(ts|tsx)?$": "ts-jest",
    "^.+\\.(js|jsx)$": "babel-jest",
  },
  testPathIgnorePatterns: ["/node_modules/", "dist"],
};
module.exports = config;
