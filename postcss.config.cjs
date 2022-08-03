const postcssImport = require("postcss-import")
const normalize = require("postcss-normalize")
const importExtGlob = require("postcss-import-ext-glob")
const mixins = require("postcss-mixins")
const nested = require("postcss-nested");

const postcssPresetEnv = require("postcss-preset-env");
const cssnano = require("cssnano");

const config = {
  plugins: [
    importExtGlob, // must be first
    postcssImport(normalize()), // must be second
    postcssPresetEnv({
      stage: 1
    }),
    mixins,
    nested,
    cssnano({ preset: "default" })
  ]
};

module.exports = config;
