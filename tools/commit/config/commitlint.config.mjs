import conventionalConfig from "./conventional-commits.config.mjs";

// oxlint-disable-next-line import/no-anonymous-default-export
export default {
    extends: ["@commitlint/config-conventional"],
    rules: conventionalConfig.commitlint,
};
