import { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider } from '../../';
import InputMask from './InputMask.tsx';

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
    placeholder: '123-456-1890',
    helpText: 'This is a helper text example',
    error: false,
    errorMessage: '',
    readOnly: false,
    disabled: false,
  },
};
export default meta;

type Story = StoryObj<typeof InputMask>;

const InputMaskWithHooks = (props) => {
  const [value, setValue] = useState(props.value);
  const handleOnChange = (event) => {
    console.log(event.target.value, event);
    setValue(event.target.value);
  };
  return <Component {...props} onChange={handleOnChange} value={value} />;
};

export const DefaultNoValue: Story = {
  render: (props) => <InputMaskWithHooks {...props} />,
  name: 'No value',
  args: {
    value: '',
  },
};

export const DefaultWithValue: Story = {
  render: (props) => <InputMaskWithHooks {...props} />,
  name: 'Populated',
};

export const DefaultCombinedMask: Story = {
  render: (props) => <InputMaskWithHooks {...props} />,
  name: 'Combined mask',
  args: {
    mask: '(999) aa*-9999? x99999',
    placeholder: '(999) AAX-9999? x99999',
  },
};

export const DefaultSlotChar: Story = {
  render: (props) => <InputMaskWithHooks {...props} />,
  name: 'Slot char',
  args: {
    mask: '99/99/9999',
    placeholder: '99/99/9999',
    slotChar: 'mm/dd/yyyy',
  },
};
