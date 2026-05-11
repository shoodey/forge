const scopes = [
    "repo",
    // Tools
    "oxfmt",
    "typescript",
];

const conventionalConfig = {
    scopes,
    commitlint: {
        "scope-empty": [2, "never"],
        "scope-enum": [2, "always", scopes],
    },
    czGit: {
        scopes,
        allowEmptyScopes: false,
        allowCustomScopes: false,
        skipQuestions: ["body", "breaking", "footerPrefix", "footer"],
        messages: {
            scope: "Denote the SCOPE of this change:",
        },
    },
};

export default conventionalConfig;
