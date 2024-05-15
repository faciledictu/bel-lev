import pluginJs from '@eslint/js';
import eslintPluginAstro from 'eslint-plugin-astro';
import globals from 'globals';

export default [
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...eslintPluginAstro.configs.recommended,
];
