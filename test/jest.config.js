const { resolve } = require("path");
const root = resolve(__dirname, "..");
const rootConfig = require(`${root}/jest.config.js`);

module.exports = {

  rootDir: root,

  displayName: 'root-tests',

  testMatch: ['<rootDir>/src/**/*.test.ts'],

  testEnvironment: 'node',

  clearMocks: true,

  transform: {

    '^.+\\.(ts|tsx)$': [

      'ts-jest',

      {

        tsconfig: 'tsconfig.json',

      },

    ],

  },

  moduleNameMapper: {

    '@/(.*)': '<rootDir>/src/$1',

  },

  transformIgnorePatterns: ['node_modules/(?!axios)'],

}
