import { Preview } from '@storybook/react/preview';

import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primeicons/primeicons.css';

const preview = {
  parameters: {
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
