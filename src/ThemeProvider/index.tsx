import React, { ReactNode } from 'react';
import { PrimeReactProvider } from 'primereact/api';
import Tailwind from 'primereact/passthrough/tailwind';
import classNames from 'classnames';

type MyComponentProps = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: MyComponentProps) => {
  //My Design System with Tailwind
  const CDS = {
    button: {
      root: ({ props, context }) => ({
        className: classNames(
          'm-0',
          'font-sans text-gray-600 bg-black',
          'text-3xl',
          {
            'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)] dark:focus:shadow-[0_0_0_0.2rem_rgba(147,197,253,0.5)]':
              !context.disabled,
            'opacity-60 select-none pointer-events-none cursor-default':
              context.disabled,
          }
          // {
          //   'text-3xl px-4 py-4': props.size == 'large',
          //   'text-xs px-2 py-2': props.size == 'small',
          //   'p-3 text-base': props.size == null,
          // }
        ),
      }),
    },
  };

  console.log('and tailwind is: ', Tailwind);
  return (
    <PrimeReactProvider value={{ unstyled: true, pt: Tailwind }}>
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
