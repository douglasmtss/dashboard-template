import js from "@eslint/js";
import globals from "globals";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ['./js/**/*.js']
  },
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      }
    }
  },
  js.configs.recommended,
  prettierRecommended,
  {
    rules: {
      'no-console': 'warn',
      'prettier/prettier': [
        'warn',
        {
          arrowParens: 'avoid',
          printWidth: 120,
          semi: false,
          singleQuote: false,
          trailingComma: 'true',
        }
      ]
    }
  }])