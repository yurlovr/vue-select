module.exports = {
  preset: '@vue/cli-plugin-unit-jest/presets/typescript-and-babel',
  'collectCoverage': true,
  'collectCoverageFrom': [
    'src/mixins/*.js',
    '!src/mixins/index.js',
    'src/components/Select.vue',
    '!**/node_modules/**',
  ],
  'coverageReporters': [
    'html',
    'text-summary',
  ],
};
