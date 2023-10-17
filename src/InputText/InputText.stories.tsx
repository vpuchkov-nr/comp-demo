import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import InputText from './InputText.tsx';
import { ThemeProvider } from '../';

const Component = (props) => (
  <ThemeProvider>
    <InputText {...props} />
  </ThemeProvider>
);

const meta: Meta<typeof InputText> = {
  component: Component,
  title: 'InputText',
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
    tooltip: '',
    label: '',
    size: '',
    value: 'Text Input',
    placeholder: 'Placeholder',
    state: '',
    type: 'text',
    helpText: '',
    error: false,
    errorMessage: '',
    readonly: false,
    disabled: false,
  },
};
export default meta;

type Story = StoryObj<typeof InputText>;

const InputTextWithHooks = (props) => {
  // Sets the hooks for both the label and primary props
  const [value, setValue] = useState(props.value);

  // Sets a click handler to change the label's value
  const handleOnChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <Component
      {...props}
      onInput={handleOnChange}
      onChange={handleOnChange}
      value={value}
    />
  );
};

const ARGS = {
  tooltip: '',
  label: '',
  size: '',
  value: 'Text Input',
  placeholder: 'Placeholder',
  state: '',
  type: 'text',
  helpText: '',
  error: false,
  errorMessage: '',
  readonly: false,
  disabled: false,
};

export const DefaultNoValue: Story = {
  render: (props) => <InputTextWithHooks {...props} />,
  name: 'Default - no value',
  args: {
    // ...ARGS,
    value: '',
  },
};

export const DefaultWithValue: Story = {
  render: (props) => <InputTextWithHooks {...props} />,
  name: 'Default - populated',
  // args: {
  //   ...ARGS,
  // },
};

export const DefaultReadonly: Story = {
  render: (props) => <InputTextWithHooks {...props} />,
  name: 'Redonly',
  args: {
    // ...ARGS,
    readonly: true,
  },
};

export const DisabledNoValue: Story = {
  render: (props) => <InputTextWithHooks {...props} />,
  name: 'Disabled - no value',
  args: {
    // ...ARGS,
    value: '',
    disabled: true,
  },
};

export const DisabledWithValue: Story = {
  render: (props) => <InputTextWithHooks {...props} />,
  name: 'Disabled - populated',
  args: {
    // ...ARGS,
    disabled: true,
  },
};

export const ErrorNoValue: Story = {
  render: (props) => <InputTextWithHooks {...props} />,
  name: 'Error - no value',
  args: {
    // ...ARGS,
    value: '',
    error: true,
  },
};

export const ErrorWithValue: Story = {
  render: (props) => <InputTextWithHooks {...props} />,
  name: 'Error - populated',
  args: {
    // ...ARGS,
    error: true,
  },
};
