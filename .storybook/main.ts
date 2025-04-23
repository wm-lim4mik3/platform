import type { StorybookConfig } from "@storybook/nextjs";

const config: StorybookConfig = {
	stories: ["../src/**/*.stories.(ts|tsx)"],
	addons: ["@storybook/addon-essentials", "@chromatic-com/storybook"],
	framework: {
		name: "@storybook/nextjs",
		options: {},
	},
	staticDirs: ["../public"],
};
export default config;
