import { Meta, StoryObj } from '@storybook/react';
import InputText from './InputText.tsx';
import { ThemeProvider } from '../';

const Component = (args) => (
  <ThemeProvider>
    <InputText {...args} />
  </ThemeProvider>
);

const meta: Meta<typeof InputText> = {
  component: Component,
};
export default meta;

type Story = StoryObj<typeof InputText>;

export const Basic: Story = {
  args: {
    tooltip: 'test',
    label: 'test',
    icon: 'pi pi-check',
    className: '',
    severity: 'danger',
  },
};
