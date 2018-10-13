// tslint:disable

module.exports = function(wallaby) {
  const testPathExp = 'src/**/*.test.ts?(x)';

  return {
    files: [
      'tsconfig.json',
      'tsconfig.test.json',
      'src/**/*.+(js|jsx|ts|tsx|json|snap|css|less|sass|scss|jpg|jpeg|gif|png|svg)',
      `!${testPathExp}`
    ],

    tests: [testPathExp],

    env: {
      runner: 'node',
      type: 'node'
    },
    compilers: {
      '**/*.js?(x)': wallaby.compilers.babel({
        babel: require('babel-core'),
        presets: ['react-app']
      })
    },
    preprocessors: {
      '**/*.js?(x)': file =>
        require('babel-core').transform(file.content, {
          compact: false,
          filename: file.path,
          presets: ['react-app'],
          sourceMap: true
        })
    },

    setup: () => {
      const jestConfig = require('react-scripts-ts/scripts/utils/createJestConfig')(
        p => require.resolve('react-scripts-ts/' + p)
      );
      Object.keys(jestConfig.transform || {}).forEach(
        k => ~k.indexOf('^.+\\.(js|jsx') && void delete jestConfig.transform[k]
      );
      delete jestConfig.testEnvironment;
      wallaby.testFramework.configure(jestConfig);
    },

    testFramework: 'jest'
  };
};
