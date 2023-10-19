import { ReactNode } from 'react';
import { PrimeReactProvider } from 'primereact/api';
import { usePassThrough } from 'primereact/passthrough';
import Tailwind from 'primereact/passthrough/tailwind';
import InputTextTheme from '../components/InputText/InputText.theme.ts';
import InputNumberTheme from '../components/InputNumber/InputNumber.theme.ts';

type MyComponentProps = {
  children: ReactNode;
};

const ThemeProvider = ({ children }: MyComponentProps) => {
  const CustomTailwind = usePassThrough(
    Tailwind,
    {
      button: {
        root: ({ props }) => ({
          className: {
            'bg-yellow-500': props.severity == 'warning',
            'bg-red-500': props.severity == 'danger',
            'bg-green-500': props.severity == 'success',
          },
        }),
      },
      inputtext: InputTextTheme,
      inputnumber: InputNumberTheme,
      inputmask: InputTextTheme,
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

export default ThemeProvider;
