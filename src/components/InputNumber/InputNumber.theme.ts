import cn from 'classnames';

const InputNumberTheme = {
  input: {
    root: ({ props, parent }) => {
      return {
        className: cn(
          'm-0 py-0 gap-2',
          'text-grayscale-1400 placeholder-grayscale-900 bg-white',
          'transition-colors duration-200 appearance-none',
          'border border-grayscale-500 !rounded-1',
          'hover:border-blue-600',
          'focus:border-blue-600 focus:outline-none focus:outline-offset-0 focus:shadow-input-default',
          'read-only:bg-grayscale-300',
          'disabled:bg-grayscale-300 disabled:cursor-not-allowed disabled:opacity-60',
          {
            'text-sm px-3 h-10': !props.size,
            'text-base px-4 h-12': props.size == 'large',
            'text-xs px-2 h-8': props.size == 'small',
          },
          {
            'border-red-600 hover:border-red-700 focus:border-red-700 focus:shadow-input-error':
              parent.props.error,
          }
        ),
      };
    },
  },
};

export default InputNumberTheme;
