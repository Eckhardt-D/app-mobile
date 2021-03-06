module.exports = {
  'extends': [
    'eslint:recommended', 
    'plugin:react/recommended'
   ],
  'parser': 'babel-eslint',
  'env': {
    'jest': true,
  },
  'rules': {
    'no-use-before-define': 'on',
    'react/jsx-filename-extension': 'off',
    'react/prop-types': 'on',
    'comma-dangle': 'off'
  },
  'globals': {
    "fetch": true
  }
}
