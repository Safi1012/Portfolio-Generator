module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/prettier',
    '@vue/typescript'
  ],
  rules: {
    // default
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-trailing-spaces': 'error',
    'comma-dangle': ['error', 'never'],

    // prettier
    'prettier/prettier': [{
      singleQuote: true
    }],

    // vue
    "vue/script-indent": ["error", 2, {
      "baseIndent": 1
    }],
    "vue/html-indent": ["error", 2, {
      "attribute": 1,
      "closeBracket": 0,
      "alignAttributesVertically": true,
      "ignores": []
    }],
    "vue/html-closing-bracket-spacing": ["error", {
      "startTag": "never",
      "endTag": "never",
      "selfClosingTag": "always"
    }]
  },
  parserOptions: {
    parser: '@typescript-eslint/parser'
  }
};
