import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import InputMask from './InputMask.tsx';
import { ThemeProvider } from '../../';

const Component = (props) => (
  <ThemeProvider>
    <InputMask {...props} />
  </ThemeProvider>
);

const meta: Meta<typeof InputMask> = {
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
    value: '999-999-9998',
    mask: '999-999-9999',
    placeholder: '999-999-9999',
    type: 'text',
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

type Story = StoryObj<typeof InputMask>;

const InputMaskWithHooks = (props) => {
  const [value, setValue] = useState(props.value);
  const handleOnChange = (event) => {
    setValue(event.target.value);
  };
  return <Component {...props} onChange={handleOnChange} value={value} />;
};

export const DefaultNoValue: Story = {
  render: (props) => <InputMaskWithHooks {...props} />,
  name: 'Default - no value',
  args: {
    value: '',
  },
};

export const DefaultWithValue: Story = {
  render: (props) => <InputMaskWithHooks {...props} />,
  name: 'Default - populated',
};

export const DefaultNoValueNoIcon: Story = {
  render: (props) => <InputMaskWithHooks {...props} />,
  name: 'Default - no value, no icon',
  args: {
    value: '',
  },
};

export const DisabledNoValue: Story = {
  render: (props) => <InputMaskWithHooks {...props} />,
  name: 'Disabled - no value',
  args: {
    value: '',
    disabled: true,
  },
};

export const DisabledWithValue: Story = {
  render: (props) => <InputMaskWithHooks {...props} />,
  name: 'Disabled - populated',
  args: {
    disabled: true,
  },
};

export const ErrorNoValue: Story = {
  render: (props) => <InputMaskWithHooks {...props} />,
  name: 'Error - no value',
  args: {
    value: '',
    error: true,
    errorMessage: 'Error inline message',
  },
};

export const ErrorWithValue: Story = {
  render: (props) => <InputMaskWithHooks {...props} />,
  name: 'Error - populated',
  args: {
    error: true,
    errorMessage: 'Error inline message',
  },
};

export const ErrorNoValueNoIcon: Story = {
  render: (props) => <InputMaskWithHooks {...props} />,
  name: 'Error - no value, no icon',
  args: {
    value: '',
    error: true,
    errorMessage: 'Error inline message',
  },
};

export const DefaultReadonly: Story = {
  render: (props) => <InputMaskWithHooks {...props} />,
  name: 'Redonly',
  args: {
    readOnly: true,
  },
};
