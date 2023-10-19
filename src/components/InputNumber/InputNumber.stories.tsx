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
  },
  args: {
    label: 'Label',
    size: '',
    value: '1234567890',
    placeholder: 'Placeholder',
    type: 'number',
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
  name: 'Default - no value',
  args: {
    value: '',
  },
};

export const DefaultWithValue: Story = {
  render: (props) => <InputNumberWithHooks {...props} />,
  name: 'Default - populated',
};

export const DefaultNoValueNoIcon: Story = {
  render: (props) => <InputNumberWithHooks {...props} />,
  name: 'Default - no value, no icon',
  args: {
    value: '',
  },
};

export const DisabledNoValue: Story = {
  render: (props) => <InputNumberWithHooks {...props} />,
  name: 'Disabled - no value',
  args: {
    value: '',
    disabled: true,
  },
};

export const DisabledWithValue: Story = {
  render: (props) => <InputNumberWithHooks {...props} />,
  name: 'Disabled - populated',
  args: {
    disabled: true,
  },
};

export const ErrorNoValue: Story = {
  render: (props) => <InputNumberWithHooks {...props} />,
  name: 'Error - no value',
  args: {
    value: '',
    error: true,
    errorMessage: 'Error inline message',
  },
};

export const ErrorWithValue: Story = {
  render: (props) => <InputNumberWithHooks {...props} />,
  name: 'Error - populated',
  args: {
    error: true,
    errorMessage: 'Error inline message',
  },
};

export const ErrorNoValueNoIcon: Story = {
  render: (props) => <InputNumberWithHooks {...props} />,
  name: 'Error - no value, no icon',
  args: {
    value: '',
    error: true,
    errorMessage: 'Error inline message',
  },
};

export const DefaultReadonly: Story = {
  render: (props) => <InputNumberWithHooks {...props} />,
  name: 'Redonly',
  args: {
    readOnly: true,
  },
};
