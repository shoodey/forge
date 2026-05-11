import { defineConfig } from "oxlint";

export default defineConfig({
    categories: {
        correctness: "error",
        style: "warn",
        suspicious: "error",
        pedantic: "warn",
        perf: "warn",
    },
    // https://oxc.rs/docs/guide/usage/linter/plugins.html#supported-plugins
    plugins: [
        // Core
        "typescript",
        "eslint",
        "unicorn",
        "oxc",
        // Convenience
        "import",
        "node",
        "promise",
    ],
    options: {
        typeAware: true,
    },
    rules: {
        "eslint/sort-keys": "off",
        "eslint/sort-imports": "off",
    },
});
