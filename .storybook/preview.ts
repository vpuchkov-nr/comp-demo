import { Preview } from '@storybook/react';

import 'primereact/resources/primereact.min.css';
import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primeicons/primeicons.css';

import './index.css';

import { decorators } from '../src/ThemeProvider';

const preview = {
  parameters: {
    decorators: decorators,
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
} as Preview;

export default preview;
