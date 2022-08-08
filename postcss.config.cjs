const postcssImport = require("postcss-import")
const normalize = require("postcss-normalize")
const nesting = require("tailwindcss/nesting")
const tailwindcss = require("tailwindcss")
const postcssPresetEnv = require("postcss-preset-env");
const mixins = require("postcss-mixins")

const config = {
  plugins: [
    postcssImport(normalize), // must be second
    nesting,
    tailwindcss,
    postcssPresetEnv({
      features: {
        "nesting-rules": false
      },
      stage: 1
    }),
    mixins
  ]
};

module.exports = config;
