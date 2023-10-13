import { Meta, StoryObj } from '@storybook/react';

import Button from './Button.tsx';

const meta: Meta<typeof Button> = {
  component: Button,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  args: {
    tooltip: 'test',
    label: 'test',
    icon: 'pi pi-check',
    className:
      'bg-brown-100 bg-brown-200 bg-brown-300 bg-brown-400 bg-grayscale-200 bg-media-purple-100 bg-media-purple-200 bg-media-purple-300',
    // size: 'large',
  },
};
