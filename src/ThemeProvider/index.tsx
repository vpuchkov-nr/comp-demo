import React, { ReactNode, JSX } from 'react';
import { PrimeReactProvider } from 'primereact/api';
import { usePassThrough } from 'primereact/passthrough';
import Tailwind from 'primereact/passthrough/tailwind';
import classNames from 'classnames';

type MyComponentProps = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: MyComponentProps) => {
  const CustomTailwind = usePassThrough(
    Tailwind,
    {
      button: {
        root: ({ props, context }) => ({
          className: {
            'bg-yellow-500': props.severity == 'warning',
            'bg-red-500': props.severity == 'danger',
            'bg-green-500': props.severity == 'success',
          },
        }),
      },
    },
    {
      mergeSections: true,
      mergeProps: true,
    }
  );

  return (
    <PrimeReactProvider value={{ unstyled: true, pt: CustomTailwind }}>
      {children}
    </PrimeReactProvider>
  );
};

const decorators = [
  (Story: () => JSX.Element) => (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  ),
];

export { decorators };

export default ThemeProvider;
