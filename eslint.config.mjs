import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  { rules: { "no-console": "off" } },
  { rules: { "no-undef": "off" } },
  { rules: { "no-unused-vars": "off" } },
  { rules: { "no-unused-expressions": "off" } },
];
