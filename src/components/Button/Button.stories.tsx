import { Meta, StoryObj } from '@storybook/react';
import Button from './Button.tsx';
import { ThemeProvider } from '../../';

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

const argTypes = {
  size: { control: 'radio', options: ['small', '', 'large'] },
  buttonType: {
    control: 'select',
    options: ['primary', 'secondary', 'text', 'link'],
  },
  buttonActionStyle: {
    control: 'select',
    options: [
      'brand',
      'contrast',
      'destructive',
      'success',
      'warning',
      'custom',
      'interactive',
    ],
  },
};

export const Configurable: Story = {
  argTypes,
  args: {
    tooltip: 'test',
    label: 'test',
    icon: 'pi pi-check',
    buttonType: 'primary',
    buttonActionStyle: 'brand',
    disabled: false,
    loading: false,
  },
};

const BasicButton = (props) => {
  return <Component {...props} />;
};

export const PrimeBrand: Story = {
  render: (props) => <BasicButton {...props} />,
  name: 'Prime brand',
  args: {
    tooltip: 'test',
    label: 'test',
    buttonType: 'primary',
    buttonActionStyle: 'brand',
    disabled: false,
    loading: false,
    icon: 'pi pi-check',
  },
};

export const SecondaryBrand: Story = {
  render: (props) => <BasicButton {...props} />,
  name: 'Secondary brand',
  args: {
    tooltip: 'test',
    label: 'test',
    buttonType: 'secondary',
    buttonActionStyle: 'brand',
    disabled: false,
    loading: false,
    icon: 'pi pi-check',
  },
};

export const TextBrand: Story = {
  render: (props) => <BasicButton {...props} />,
  name: 'Text brand',
  args: {
    tooltip: 'test',
    label: 'test',
    buttonType: 'text',
    buttonActionStyle: 'brand',
    disabled: false,
    loading: false,
    icon: 'pi pi-check',
  },
};

export const LinkBrand: Story = {
  render: (props) => <BasicButton {...props} />,
  name: 'Link brand',
  args: {
    tooltip: 'test',
    label: 'test',
    buttonType: 'link',
    buttonActionStyle: 'brand',
    disabled: false,
    loading: false,
    icon: 'pi pi-check',
  },
};

export const IconOnlyBrand: Story = {
  render: (props) => <BasicButton {...props} />,
  name: 'Icon only brand',
  argTypes,
  args: {
    tooltip: 'test',
    label: 'test',
    buttonType: 'primary',
    iconOnly: true,
    buttonActionStyle: 'brand',
    disabled: false,
    loading: false,
    icon: 'pi pi-check',
  },
};

export const PrimeContrast: Story = {
  render: (props) => <BasicButton {...props} />,
  name: 'Prime contrast',
  parameters: {
    backgrounds: {
      name: 'blue',
      value: '#0074E8',
      default: true,
    },
  },
  args: {
    tooltip: 'test',
    label: 'test',
    buttonType: 'primary',
    buttonActionStyle: 'contrast',
    disabled: false,
    loading: false,
    icon: 'pi pi-check',
  },
};

export const SecondaryContrast: Story = {
  render: (props) => <BasicButton {...props} />,
  name: 'Secondary contrast',
  args: {
    tooltip: 'test',
    label: 'test',
    buttonType: 'secondary',
    buttonActionStyle: 'contrast',
    disabled: false,
    loading: false,
    icon: 'pi pi-check',
  },
};

export const TextContrast: Story = {
  render: (props) => <BasicButton {...props} />,
  name: 'Text contrast',
  args: {
    tooltip: 'test',
    label: 'test',
    buttonType: 'text',
    buttonActionStyle: 'contrast',
    disabled: false,
    loading: false,
    icon: 'pi pi-check',
  },
};

export const PrimeDestructive: Story = {
  render: (props) => <BasicButton {...props} />,
  name: 'Prime destructive',
  args: {
    tooltip: 'test',
    label: 'test',
    buttonType: 'primary',
    buttonActionStyle: 'destructive',
    disabled: false,
    loading: false,
    icon: 'pi pi-check',
  },
};

export const SecondaryDestructive: Story = {
  render: (props) => <BasicButton {...props} />,
  name: 'Secondary destructive',
  args: {
    tooltip: 'test',
    label: 'test',
    buttonType: 'secondary',
    buttonActionStyle: 'destructive',
    disabled: false,
    loading: false,
    icon: 'pi pi-check',
  },
};

export const TextDestructive: Story = {
  render: (props) => <BasicButton {...props} />,
  name: 'Text destructive',
  args: {
    tooltip: 'test',
    label: 'test',
    buttonType: 'text',
    buttonActionStyle: 'destructive',
    disabled: false,
    loading: false,
    icon: 'pi pi-check',
  },
};

export const PrimeSucess: Story = {
  render: (props) => <BasicButton {...props} />,
  name: 'Prime success',
  args: {
    tooltip: 'test',
    label: 'test',
    buttonType: 'primary',
    buttonActionStyle: 'success',
    disabled: false,
    loading: false,
    icon: 'pi pi-check',
  },
};

export const TextSuccess: Story = {
  render: (props) => <BasicButton {...props} />,
  name: 'Text success',
  args: {
    tooltip: 'test',
    label: 'test',
    buttonType: 'text',
    buttonActionStyle: 'success',
    disabled: false,
    loading: false,
    icon: 'pi pi-check',
  },
};

export const PrimeWarning: Story = {
  render: (props) => <BasicButton {...props} />,
  name: 'Prime warning',
  args: {
    tooltip: 'test',
    label: 'test',
    buttonType: 'primary',
    buttonActionStyle: 'warning',
    disabled: false,
    loading: false,
    icon: 'pi pi-check',
  },
};

export const TextWarning: Story = {
  render: (props) => <BasicButton {...props} />,
  name: 'Text warning',
  args: {
    tooltip: 'test',
    label: 'test',
    buttonType: 'text',
    buttonActionStyle: 'warning',
    disabled: false,
    loading: false,
    icon: 'pi pi-check',
  },
};
