import { PrimeReactProvider } from 'primereact/api';
import Tailwind from 'primereact/passthrough/tailwind';
import { ReactNode } from 'react';

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
