import { RuleConfigSeverity } from "@commitlint/types";

const scopes = [
    "repo",
    // Tools
    "typescript",
    "oxfmt",
    "oxlint",
];

const conventionalConfig = {
    scopes,
    commitlint: {
        "scope-empty": [RuleConfigSeverity.Error, "never"],
        "scope-enum": [RuleConfigSeverity.Error, "always", scopes],
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
