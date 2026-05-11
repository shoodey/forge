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
    sortImports: {
        customGroups: [
            {
                groupName: "react-libs",
                elementNamePattern: ["react", "react-**"],
            },
            {
                groupName: "expo-libs",
                elementNamePattern: ["expo", "expo-**"],
            },
            {
                groupName: "forge-libs",
                elementNamePattern: ["@forge/**"],
            },
            {
                groupName: "alias",
                elementNamePattern: ["~/**"],
            },
        ],
        groups: [
            // All type imports at the top
            ["type-builtin", "type-external", "type-internal", "type-parent", "type-sibling", "type-index"],

            { newlinesBetween: true },

            "react-libs",
            "expo-libs",
            ["value-builtin", "value-external"],

            { newlinesBetween: true },

            "forge-libs",

            { newlinesBetween: true },

            "alias",
            ["value-parent", "value-sibling", "value-index"],

            "unknown",
        ],
    },
});
