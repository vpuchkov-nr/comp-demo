import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import cn from 'classnames';
import InputText from './InputText.tsx';
import { ThemeProvider } from '../../';

const Component = (props) => (
  <ThemeProvider>
    <InputText {...props} />
  </ThemeProvider>
);

const SeachIcon = (props) => {
  const { className } = props;
  const iconClassName = cn('pi pi-search', className);
  return <i className={iconClassName} />;
};

const meta: Meta<typeof InputText> = {
  component: Component,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/hPB6N3qbruHU86qWlETWHA/Central-Design-System?type=design&node-id=20-845',
    },
  },
  argTypes: {
    size: { control: 'radio', options: ['small', '', 'large'] },
    iconPosition: { control: 'radio', options: ['left', 'right'] },
  },
  args: {
    label: 'Label',
    size: '',
    value: 'Text Input',
    placeholder: 'Placeholder',
    type: 'text',
    helpText: 'This is a helper text example',
    error: false,
    errorMessage: '',
    readonly: false,
    disabled: false,
    Icon: SeachIcon,
    iconPosition: 'left',
  },
};
export default meta;

type Story = StoryObj<typeof InputText>;

const InputTextWithHooks = (props) => {
  const [value, setValue] = useState(props.value);
  const handleOnChange = (event) => {
    setValue(event.target.value);
  };
  return <Component {...props} onInput={handleOnChange} value={value} />;
};

export const DefaultNoValue: Story = {
  render: (props) => <InputTextWithHooks {...props} />,
  name: 'Default - no value',
  args: {
    value: '',
  },
};

export const DefaultWithValue: Story = {
  render: (props) => <InputTextWithHooks {...props} />,
  name: 'Default - populated',
};

export const DefaultNoValueNoIcon: Story = {
  render: (props) => <InputTextWithHooks {...props} />,
  name: 'Default - no value, no icon',
  args: {
    value: '',
    Icon: null,
  },
};

export const DisabledNoValue: Story = {
  render: (props) => <InputTextWithHooks {...props} />,
  name: 'Disabled - no value',
  args: {
    value: '',
    disabled: true,
  },
};

export const DisabledWithValue: Story = {
  render: (props) => <InputTextWithHooks {...props} />,
  name: 'Disabled - populated',
  args: {
    disabled: true,
  },
};

export const ErrorNoValue: Story = {
  render: (props) => <InputTextWithHooks {...props} />,
  name: 'Error - no value',
  args: {
    value: '',
    error: true,
    errorMessage: 'Error inline message',
  },
};

export const ErrorWithValue: Story = {
  render: (props) => <InputTextWithHooks {...props} />,
  name: 'Error - populated',
  args: {
    error: true,
    errorMessage: 'Error inline message',
  },
};

export const ErrorNoValueNoIcon: Story = {
  render: (props) => <InputTextWithHooks {...props} />,
  name: 'Error - no value, no icon',
  args: {
    value: '',
    error: true,
    errorMessage: 'Error inline message',
    Icon: null,
  },
};

export const DefaultReadonly: Story = {
  render: (props) => <InputTextWithHooks {...props} />,
  name: 'Redonly',
  args: {
    readonly: true,
  },
};
