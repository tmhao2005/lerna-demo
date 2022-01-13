const TEST_REGEX = "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|js?|tsx?|ts?)$";

module.exports = {
  testRegex: TEST_REGEX,
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testPathIgnorePatterns: ["<rootDir>/build/", "<rootDir>/node_modules/", "<rootDir>/dist/", "<rootDir>/lib/"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json"],  
  moduleNameMapper: {
    "^@\/(.*)$": "<rootDir>/src/$1"
  },
}
