import { Meta, StoryObj } from '@storybook/react';

import Button from './Button';

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
  },
};
