/*module.exports = {
  root: true,
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    jest: true
  },
  extends: 'standard',
  plugins: [
    'jest',
    'vue'
  ],
  rules: {
    // Allow paren-less arrow functions
    'arrow-parens': 0,
    // Allow async-await
    'generator-star-spacing': 0,
    // Allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // Do not allow console.logs etc...
    'no-console': 2
  },
  globals: {
    'jest/globals': true,
    jasmine: true
  }
}*/

module.exports = {
    root: true,

    env: {
        browser: true,
        node: true,
        jest: true,
    },

    parserOptions: {
        parser: 'babel-eslint'
    },

    extends: [
        // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
        // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
        'plugin:vue/essential'
    ],

    // required to lint *.vue files
    plugins: [
        'vue'
    ],

    // add your custom rules here
    rules: {},

    globals: {
        'jest/globals': true,
        jasmine: true
    }
}
