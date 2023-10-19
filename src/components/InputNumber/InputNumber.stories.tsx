import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '../../';
import InputNumber from './InputNumber.tsx';

const Component = (props) => (
  <ThemeProvider>
    <InputNumber {...props} />
  </ThemeProvider>
);

const meta: Meta<typeof InputNumber> = {
  component: Component,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/hPB6N3qbruHU86qWlETWHA/Central-Design-System?type=design&node-id=20-845',
    },
  },
  argTypes: {
    size: { control: 'radio', options: ['small', '', 'large'] },
    mode: { control: 'radio', options: ['decimal', 'currency', undefined] },
  },
  args: {
    label: 'Label',
    size: '',
    value: '1234567890',
    placeholder: '0987654321',
    helpText: 'This is a helper text example',
    error: false,
    errorMessage: '',
    readOnly: false,
    disabled: false,
    mode: 'decimal',
    useGrouping: false,
    currency: undefined,
    minFractionDigits: 0,
    maxFractionDigits: 0,
    suffix: '',
    prefix: '',
  },
};
export default meta;

type Story = StoryObj<typeof InputNumber>;

const InputNumberWithHooks = (props) => {
  const [value, setValue] = useState(props.value);
  const handleOnChange = (event) => {
    setValue(event.target.value);
  };
  return <Component {...props} onValueChange={handleOnChange} value={value} />;
};

export const DefaultNoValue: Story = {
  render: (props) => <InputNumberWithHooks {...props} />,
  name: 'No value',
  args: {
    value: '',
  },
};

export const DefaultWithValue: Story = {
  render: (props) => <InputNumberWithHooks {...props} />,
  name: 'Populated',
};

export const DefaultWithPrefix: Story = {
  render: (props) => <InputNumberWithHooks {...props} />,
  name: 'With prefix',
  args: {
    prefix: '% ',
  },
};

export const DefaultWithSuffix: Story = {
  render: (props) => <InputNumberWithHooks {...props} />,
  name: 'With suffix',
  args: {
    suffix: ' %',
  },
};

export const DefaultWithGrouping: Story = {
  render: (props) => <InputNumberWithHooks {...props} />,
  name: 'With grouping',
  args: {
    useGrouping: true,
  },
};

export const DefaultWithCurrency: Story = {
  render: (props) => <InputNumberWithHooks {...props} />,
  name: 'With currency',
  args: {
    currency: 'USD',
    mode: 'currency',
  },
};
