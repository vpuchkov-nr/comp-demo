import { ReactNode } from 'react';
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
        root: ({ props }) => ({
          className: {
            'bg-yellow-500': props.severity == 'warning',
            'bg-red-500': props.severity == 'danger',
            'bg-green-500': props.severity == 'success',
          },
        }),
      },
      inputtext: {
        root: ({ props, context }) => ({
          className: classNames(
            'm-0 py-0 gap-2',
            'text-grayscale-1400 placeholder-grayscale-900 bg-white border border-grayscale-500 rounded-1 transition-colors duration-200 appearance-none',
            'hover:border-blue-600',
            'focus:border-blue-600 focus:outline-none focus:outline-offset-0 focus:shadow-input-default',
            'read-only:bg-grayscale-300',
            // {
            //   'hover:border-blue-500 focus:outline-none focus:outline-offset-0 focus:shadow-[0_0_0_0.2rem_rgba(191,219,254,1)]':
            //     !context.disabled,
            //   'opacity-60 select-none pointer-events-none cursor-default':
            //     context.disabled,
            // },
            {
              'text-sm px-3 h-10': props.size == null || props.size == '',
              'text-base px-4 h-12': props.size == 'large',
              'text-xs px-2 h-8': props.size == 'small',
            }
          ),
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

export default ThemeProvider;
