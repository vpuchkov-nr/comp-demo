import React from 'react';
import { Button as PrimeButton } from 'primereact/button';

// import { usePassThrough } from 'primereact/passthrough';
// import Tailwind from 'primereact/passthrough/tailwind';
import ThemeProvider from '../ThemeProvider';

export default function Button(props) {
  // const CustomTailwind = usePassThrough(
  //   Tailwind,
  //   {
  //     button: {
  //       root: {
  //         className: 'bg-zzz-500',
  //       },
  //     },
  //   },
  //   {
  //     mergeSections: true,
  //     mergeProps: true,
  //   }
  // );
  return (
    <ThemeProvider>
      <PrimeButton {...props} />
    </ThemeProvider>
  );
}
