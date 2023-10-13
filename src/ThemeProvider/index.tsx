import React, { ReactNode, JSX } from 'react';
import { PrimeReactProvider } from 'primereact/api';
import Tailwind from 'primereact/passthrough/tailwind';

type MyComponentProps = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: MyComponentProps) => {
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
