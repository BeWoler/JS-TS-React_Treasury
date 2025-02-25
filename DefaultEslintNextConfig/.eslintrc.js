module.exports = {
  extends: ['next/core-web-vitals', 'next/typescript'],
  rules: {
    'react/no-array-index-key': 'error',
    '@typescript-eslint/no-explicit-any': 'error',
    'quotes': ['error', 'single', { 'avoidEscape': true }],
    'eol-last': ['error', 'always'],
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 1, 'maxBOF': 0 }],
    'import/order': [
      'error',
      {
        'groups': [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type'
        ],
        'pathGroups': [
          {
            'pattern': '@/**',
            'group': 'internal',
            'position': 'after'
          },
          {
            'pattern': '**/*.+(css|scss|sass|less|styl)',
            'group': 'object',
            'position': 'after'
          },
          {
            'pattern': '{.,..}/**/*.+(css|scss|sass|less|styl)',
            'group': 'object',
            'position': 'after'
          },
          {
            'pattern': '{.,..}/*.+(css|scss|sass|less|styl)',
            'group': 'object',
            'position': 'after'
          }
        ],
        'pathGroupsExcludedImportTypes': ['builtin', 'type'],
        'newlines-between': 'always',
        'alphabetize': {
          'order': 'asc',
          'caseInsensitive': true
        },
        'warnOnUnassignedImports': true
      }
    ],
    '@typescript-eslint/no-unused-vars': ['error', { 'argsIgnorePattern': '^_' }],
    '@typescript-eslint/explicit-function-return-type': ['error', { 'allowExpressions': true }],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'react/self-closing-comp': 'error',
    'react/jsx-boolean-value': ['error', 'never'],
    'react/jsx-curly-brace-presence': ['error', { 'props': 'never', 'children': 'never' }],
    'react/hook-use-state': 'error',
    'no-nested-ternary': 'error',
    'max-len': ['error', { 'code': 100, 'ignoreStrings': true, 'ignoreComments': true }],
    'no-duplicate-imports': 'error',
    '@typescript-eslint/consistent-type-imports': ['error', { 'prefer': 'type-imports' }],
    '@typescript-eslint/no-empty-interface': ['error', { 'allowSingleExtends': true }]
  }
}; 