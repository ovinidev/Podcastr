module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/require-default-props': 'off',
    'react/jsx-indent': 'off',
    'react/no-unused-prop-types': 'off',
    'react/jsx-closing-tag-location': 'off',
    'react/jsx-wrap-multilines': 'off',
    'react/jsx-closing-bracket-location': 'off',
    'react/button-has-type': 'off',
    'react/destructuring-assignment': 'off',
    'react/self-closing-comp': 'off',
    'react/jsx-no-undef': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-noninteractive-element-interactions': 'off',
    'jsx-one-expression-per-line': 'off',
    'jsx-a11y/control-has-associated-label': 'off',
    'no-noninteractive-element-interactions': 'off',
    'no-shadow': 'off',
    'no-plusplus': 'off',
    'no-console': 'off',
    'no-unused-vars': 'off',
    'import/no-extraneous-dependencies': 'off',
    'click-events-have-key-events': 'off',
    'react/prop-types': 'off',
    'max-len': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'import/named': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-trailing-spaces': 'off',
    'no-use-before-define': 'off',
    'react/jsx-props-no-spreading': 'off',
    'no-undef': 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'arrow-body-style': 'off',
    'no-redeclare': 'off',
    'react/no-danger': 'off',
  },
};
