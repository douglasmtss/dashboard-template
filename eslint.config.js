/**
 * ESLint Configuration (Flat Config)
 * @see https://eslint.org/docs/latest/use/configure/configuration-files
 */

import js from '@eslint/js'
import globals from 'globals'
import prettier from 'eslint-plugin-prettier'
import prettierConfig from 'eslint-config-prettier'
import json from '@eslint/json'

export default [
    // Ignorar arquivos e pastas
    {
        ignores: [
            '**/node_modules/**',
            '**/dist/**',
            '**/build/**',
            '**/.git/**',
            '**/coverage/**',
            '**/*.min.js',
            'public/media/**',
            'public/static/**',
            '**/package-lock.json',
            '**/.vscode/**',
            '**/*.css', // CSS é validado pelo Stylelint
        ],
    },

    // Configuração principal para arquivos JavaScript
    {
        files: ['**/*.js', '**/*.mjs'],
        ...js.configs.recommended,

        languageOptions: {
            ecmaVersion: 2024,
            sourceType: 'module',

            globals: {
                ...globals.browser,
                ...globals.es2021,
                // Bibliotecas globais usadas no projeto
                $: 'readonly', // jQuery
                jQuery: 'readonly', // jQuery
                echarts: 'readonly', // ECharts
                PropTypes: 'readonly', // prop-types
                bootstrap: 'readonly', // Bootstrap
            },

            parserOptions: {
                ecmaFeatures: {
                    impliedStrict: true,
                },
            },
        },

        plugins: {
            prettier,
        },

        rules: {
            // ==========================================
            // Regras de Erros Possíveis
            // ==========================================
            'no-console': ['warn', { allow: ['warn', 'error', 'info'] }],
            'no-debugger': 'warn',
            'no-unused-vars': [
                'error',
                {
                    argsIgnorePattern: '^_',
                    varsIgnorePattern: '^_',
                    caughtErrors: 'none',
                },
            ],
            'no-undef': 'error',
            'no-unreachable': 'error',
            'no-constant-condition': 'warn',
            'no-dupe-keys': 'error',
            'no-duplicate-case': 'error',
            'no-empty': ['error', { allowEmptyCatch: true }],
            'no-extra-semi': 'error',
            'no-func-assign': 'error',
            'no-invalid-regexp': 'error',
            'no-irregular-whitespace': 'error',
            'no-sparse-arrays': 'error',
            'no-unexpected-multiline': 'error',
            'use-isnan': 'error',
            'valid-typeof': 'error',

            // ==========================================
            // Melhores Práticas
            // ==========================================
            eqeqeq: ['error', 'always', { null: 'ignore' }],
            curly: ['error', 'multi-line', 'consistent'],
            'no-eval': 'error',
            'no-implied-eval': 'error',
            'no-with': 'error',
            'no-new-func': 'error',
            'no-new-wrappers': 'error',
            'no-return-assign': ['error', 'except-parens'],
            'no-self-compare': 'error',
            'no-sequences': 'error',
            'no-throw-literal': 'error',
            'no-useless-concat': 'error',
            'no-useless-escape': 'error',
            'no-useless-return': 'error',
            'no-void': 'error',
            'prefer-promise-reject-errors': 'error',
            radix: 'error',
            yoda: ['error', 'never'],

            // ==========================================
            // Variáveis
            // ==========================================
            'no-delete-var': 'error',
            'no-shadow-restricted-names': 'error',
            'no-use-before-define': [
                'error',
                {
                    functions: false,
                    classes: true,
                    variables: true,
                },
            ],

            // ==========================================
            // ES6+ Features
            // ==========================================
            'arrow-body-style': ['error', 'as-needed'],
            'arrow-spacing': 'error',
            'no-duplicate-imports': 'error',
            'no-useless-computed-key': 'error',
            'no-useless-constructor': 'error',
            'no-useless-rename': 'error',
            'no-var': 'error',
            'object-shorthand': ['error', 'always'],
            'prefer-arrow-callback': ['error', { allowNamedFunctions: true }],
            'prefer-const': ['error', { destructuring: 'all' }],
            'prefer-destructuring': [
                'error',
                {
                    array: false,
                    object: true,
                },
                {
                    enforceForRenamedProperties: false,
                },
            ],
            'prefer-rest-params': 'error',
            'prefer-spread': 'error',
            'prefer-template': 'error',
            'rest-spread-spacing': ['error', 'never'],
            'template-curly-spacing': ['error', 'never'],

            // ==========================================
            // Estilo de Código
            // ==========================================
            'array-bracket-spacing': ['error', 'never'],
            'block-spacing': ['error', 'always'],
            'brace-style': ['error', '1tbs', { allowSingleLine: true }],
            'comma-dangle': ['error', 'always-multiline'],
            'comma-spacing': ['error', { before: false, after: true }],
            'comma-style': ['error', 'last'],
            'computed-property-spacing': ['error', 'never'],
            'eol-last': ['error', 'always'],
            'func-call-spacing': ['error', 'never'],
            indent: [
                'error',
                2,
                {
                    SwitchCase: 1,
                    ignoredNodes: ['TemplateLiteral'],
                },
            ],
            'key-spacing': ['error', { beforeColon: false, afterColon: true }],
            'keyword-spacing': ['error', { before: true, after: true }],
            'linebreak-style': ['error', 'unix'],
            'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 1, maxBOF: 0 }],
            'no-trailing-spaces': 'error',
            'no-whitespace-before-property': 'error',
            'object-curly-spacing': ['error', 'always'],
            quotes: [
                'error',
                'single',
                {
                    avoidEscape: true,
                    allowTemplateLiterals: true,
                },
            ],
            semi: ['error', 'never'],
            'semi-spacing': ['error', { before: false, after: true }],
            'space-before-blocks': ['error', 'always'],
            'space-before-function-paren': [
                'error',
                {
                    anonymous: 'never',
                    named: 'never',
                    asyncArrow: 'always',
                },
            ],
            'space-in-parens': ['error', 'never'],
            'space-infix-ops': 'error',
            'space-unary-ops': ['error', { words: true, nonwords: false }],

            // ==========================================
            // Integração com Prettier
            // ==========================================
            'prettier/prettier': 'error',
        },
    },

    // Configuração específica para arquivos de configuração
    {
        files: ['*.config.js', '*.config.mjs'],
        languageOptions: {
            globals: {
                ...globals.node,
            },
        },
    },

    // Configuração para arquivos JSONC (JSON com comentários) - deve vir ANTES de JSON puro
    {
        files: ['**/.vscode/**/*.json', '**/tsconfig*.json', '**/jsconfig.json'],
        plugins: {
            json,
        },
        language: 'json/jsonc',
        rules: {
            'json/no-duplicate-keys': 'error',
        },
    },

    // Configuração para arquivos JSON
    {
        files: ['**/*.json'],
        ignores: ['**/package-lock.json'],
        plugins: {
            json,
        },
        language: 'json/json',
        rules: {
            'json/no-duplicate-keys': 'error',
        },
    },

    // Desabilita regras conflitantes com Prettier
    prettierConfig,
]
