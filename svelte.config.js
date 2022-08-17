import adapter from "@sveltejs/adapter-auto";
import preprocess from "svelte-preprocess";
import switchCase from "svelte-switch-case";

/** @type {import("@sveltejs/kit").Config} */
const config = {
  preprocess: [
    preprocess({
      postcss: true
    }),
    switchCase()
  ],
  kit: {
	  adapter: adapter(),
	  prerender: { default: true }
  }
};

export default config;
