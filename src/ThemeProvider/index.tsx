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
        root: () => ({
          className: 'bg-zzz-500',
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
