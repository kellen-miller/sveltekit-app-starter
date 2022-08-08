const importExtGlob = require("postcss-import-ext-glob")
const postcssImport = require("postcss-import")
const normalize = require("postcss-normalize")
const apply = require("postcss-class-apply/dist/index")
const postcssPresetEnv = require("postcss-preset-env");
const mixins = require("postcss-mixins")
const nested = require("postcss-nested");

const config = {
  plugins: [
    importExtGlob, // must be first
    postcssImport(normalize), // must be second
    apply,
    postcssPresetEnv({
      stage: 1
    }),
    mixins,
    nested
  ]
};

module.exports = config;
