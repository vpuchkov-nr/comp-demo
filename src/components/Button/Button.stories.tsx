import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '../../';
import Button from './Button.tsx';

const Component = (args) => (
  <ThemeProvider>
    <Button {...args} />
  </ThemeProvider>
);

const meta: Meta<typeof Button> = {
  component: Component,
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  args: {
    tooltip: 'test',
    label: 'test',
    icon: 'pi pi-check',
    className: '',
    severity: 'danger',
  },
};
