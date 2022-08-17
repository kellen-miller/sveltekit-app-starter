const postcssImport = require("postcss-import")
const atRulesVariables = require("postcss-at-rules-variables")
const mixins = require("postcss-mixins")
const customMedia = require("postcss-custom-media")
const tailwindNesting = require("tailwindcss/nesting")
const tailwind = require("tailwindcss")
const postcssPresetEnv = require("postcss-preset-env");

const config = {
	plugins: [
		atRulesVariables({ atRules: ["mixins"] }),
		postcssImport({
			plugins: [
				require("postcss-at-rules-variables"),
				require("postcss-import")
			]
		}),
		mixins,
		customMedia,
		tailwindNesting,
		tailwind,
		postcssPresetEnv({
			features: {
				"nesting-rules": false
			},
			stage: 1
		})
	]
};

module.exports = config;

/*
 
 postcssImport > *
 
 mixins > simpleVars, tailwindNesting
 
 tailwindNesting, tailwind > postcssPresetEnv
 
 postcssPresetEnv -> features: { nesting-rules: false } to disable nesting rules
 and use tailwind nesting rules
 
 */