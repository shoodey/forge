import { defineConfig } from "oxfmt";

export default defineConfig({
    tabWidth: 4,
    printWidth: 120,
    trailingComma: "es5",
    overrides: [
        {
            files: ["*.json*", "*.y*ml", "*.md*"],
            options: {
                tabWidth: 2,
            },
        },
    ],
    ignorePatterns: [],
});
