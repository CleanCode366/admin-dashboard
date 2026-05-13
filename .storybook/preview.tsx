import type { Preview } from '@storybook/react-vite'

import '@/index.css'

import { ToastProvider } from '../src/shared/integrations/Toast'

import { ThemeProvider } from '../src/shared/theme'

const preview: Preview = {
  decorators: [
    (Story) => (
      <ThemeProvider>
        <ToastProvider />

        <Story />
      </ThemeProvider>
    ),
  ],

  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,

        date: /Date$/i,
      },
    },

    a11y: {
      test: 'todo',
    },
  },
}

export default preview
