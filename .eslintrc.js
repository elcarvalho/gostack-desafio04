module.exports = {
    extends: ['airbnb-base', 'prettier', 'prettier/react', 'plugin:react/recommended'],
    globals: {
      Atomics: 'readonly',
      SharedArrayBuffer: 'readonly'
    },
    parser: 'babel-eslint',
    parserOptions: {
      ecmaFeatures: {
        jsx: true
      },
      ecmaVersion: 2018,
      sourceType: 'module'
    },
    plugins: [
      'react',
      'prettier'
    ],
    rules: {
      'prettier/prettier': 'error',
      'no-unused-vars': 'off',
      'class-methods-use-this': 'off',
      'no-undef': 'off',
      'react/jsx-filename-extension': [
        'warn',
        { extensions: ['.jsx', '.js'] }
      ],
      'import/prefer-default-export': 'off'
    }
};
