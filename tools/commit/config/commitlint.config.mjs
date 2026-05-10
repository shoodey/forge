import conventionalConfig from "./conventional-commits.config.mjs";

export default {
    extends: ["@commitlint/config-conventional"],
    rules: conventionalConfig.commitlint,
};
