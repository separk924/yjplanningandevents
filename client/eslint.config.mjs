import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import { defineConfig, globalIgnores } from 'eslint/config'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = defineConfig([
  ...compat.extends("next/core-web-vitals", "next/typescript"),

  // Custom rules and ignores
  {
    rules: {
      // Example: disable some rules if needed
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-unused-vars": "off",
      "@typescript-eslint/no-unused-expressions": "off",
    },
  },
  globalIgnores([
      // Ignore Prisma generated code
      "src/generated/prisma/**",
    ]),
]);

export default eslintConfig;
