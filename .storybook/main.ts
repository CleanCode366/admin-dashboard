import type { StorybookConfig } from '@storybook/react-vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { mergeConfig } from 'vite'

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [
    '@chromatic-com/storybook',
    '@storybook/addon-vitest',
    '@storybook/addon-a11y',
    '@storybook/addon-docs',
    '@storybook/addon-onboarding',
  ],
  framework: '@storybook/react-vite',

  // 👇 add this
  viteFinal: async (config) => {
    return mergeConfig(config, {
      plugins: [tsconfigPaths()],
    })
  },
}

export default config
