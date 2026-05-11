import { defineConfig } from "oxlint";

import base from "./base.ts";

export default defineConfig({
    extends: [base],
    rules: {
        // Node apps legitimately import node:* builtins
        "import/no-nodejs-modules": "off",
    },
});
