import type { Preview } from '@storybook/react-vite'

import React from 'react'
// @ts-expect-error : Temporary workaround for using index.css from legacy code
import '../src/index.css'

import { ThemeProvider } from '../src/shared/theme/ThemeProvider'
import { StorybookThemeSync } from './StorybookThemeSync'

const THEMES = {
  light: '#f5f5f5',
  dark: '#111827',
}

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',

    backgrounds: {
      default: 'light',

      values: [
        {
          name: 'light',
          value: THEMES.light,
        },

        {
          name: 'dark',
          value: THEMES.dark,
        },
      ],
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,

        date: /Date$/i,
      },
    },
  },

  globalTypes: {
    theme: {
      name: 'Theme',

      description: 'Application theme',

      defaultValue: 'light',

      toolbar: {
        icon: 'mirror',

        dynamicTitle: true,

        items: [
          {
            value: 'light',
            title: 'Light',
          },

          {
            value: 'dark',
            title: 'Dark',
          },
        ],
      },
    },
  },

  decorators: [
    (Story, context) => {
      const theme = context.globals.theme as 'light' | 'dark'

      return (
        <StorybookThemeSync theme={theme}>
          <ThemeProvider>
            <Story />
          </ThemeProvider>
        </StorybookThemeSync>
      )
    },
  ],
}

export default preview
