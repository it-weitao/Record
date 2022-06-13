module.exports = {
  extends: ['taro/react', 'plugin:prettier/recommended', 'eslint:recommended'],
  rules: {
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-commonjs': 'off',
    'no-unused-vars': 'warn',
  },
}
