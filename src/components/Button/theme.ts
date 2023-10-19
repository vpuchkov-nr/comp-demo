import cn from 'classnames';

function shouldApplyStyle(
  type,
  style,
  iconOnly,
  buttonType,
  buttonActionStyle
) {
  return (
    (buttonType === type && buttonActionStyle === style) ||
    (iconOnly && buttonType === type && buttonActionStyle === style)
  );
}

const ButtonTheme = {
  root: ({ props }) => ({
    className: cn(
      '!rounded-1',
      'disabled:!bg-opacity-30 disabled:cursor-not-allowed',
      {
        // iconOnly
        'invisible-label': props.iconOnly,
        '!px-1 !py-1': props.iconOnly && props.size == 'small',
        '!px-2 !py-2':
          (props.size == null || props.size == '') && props.iconOnly,
        '!px-3 !py-3': props.size == 'large' && props.iconOnly,
      },
      {
        // brand
        'focus:!shadow-brand active:!shadow-brand':
          props.buttonActionStyle == 'brand',
        'bg-blue-600 text-grayscale-100 border-0 hover:!bg-blue-700 active:!bg-blue-800':
          shouldApplyStyle(
            'primary',
            'brand',
            props.iconOnly,
            props.buttonType,
            props.buttonActionStyle
          ),
        'bg-transparent hover:!bg-blue-100 active:!bg-blue-200 text-blue-600 border-1 border-blue-600':
          shouldApplyStyle(
            'secondary',
            'brand',
            props.iconOnly,
            props.buttonType,
            props.buttonActionStyle
          ),
        'bg-grayscale-100 hover:!bg-blue-100 active:!bg-blue-200 text-blue-600 border-0':
          shouldApplyStyle(
            'text',
            'brand',
            props.iconOnly,
            props.buttonType,
            props.buttonActionStyle
          ),
        'text-blue-600 cursor-pointer !bg-transparent !py-0 !px-1 !text-blue-600 !h-fit':
          shouldApplyStyle(
            'link',
            'brand',
            props.iconOnly,
            props.buttonType,
            props.buttonActionStyle
          ),
      },
      {
        // Contrast
        'focus:!shadow-contrast active:!shadow-contrast':
          props.buttonActionStyle == 'contrast',
        'bg-grayscale-100 text-blue-600 hover:!bg-blue-100 active:!bg-blue-200 border-transparent hover:active:focused:border-1 hover:active:focused:border-blue-200':
          shouldApplyStyle(
            'primary',
            'contrast',
            props.iconOnly,
            props.buttonType,
            props.buttonActionStyle
          ),
        'bg-transparent hover:!bg-blue-700 active:!bg-blue-800 text-grayscale-100 border-1 border-grayscale-100 ':
          shouldApplyStyle(
            'secondary',
            'contrast',
            props.iconOnly,
            props.buttonType,
            props.buttonActionStyle
          ),
        'bg-transparent text-grayscale-100 hover:!bg-blue-700 active:!bg-blue-800 border-0':
          shouldApplyStyle(
            'text',
            'contrast',
            props.iconOnly,
            props.buttonType,
            props.buttonActionStyle
          ),
      },
      {
        // Destructive
        'active:!shadow-destructive focus:!shadow-destructive':
          props.buttonActionStyle == 'destructive',
        'bg-red-600 text-grayscale-100 hover:!bg-red-700 active:!bg-red-800 border-0':
          shouldApplyStyle(
            'primary',
            'destructive',
            props.iconOnly,
            props.buttonType,
            props.buttonActionStyle
          ),
        'bg-transparent hover:!bg-red-100 active:!bg-red-200 text-red-600 border-1 !border-red-600':
          shouldApplyStyle(
            'secondary',
            'destructive',
            props.iconOnly,
            props.buttonType,
            props.buttonActionStyle
          ),
        'bg-transparent text-red-600 hover:!bg-red-100 active:!bg-red-200 border-0':
          shouldApplyStyle(
            'text',
            'destructive',
            props.iconOnly,
            props.buttonType,
            props.buttonActionStyle
          ),
      },
      {
        // Success
        'active:!shadow-success focus:!shadow-success':
          props.buttonActionStyle == 'success',
        'bg-green-600 text-grayscale-100 hover:!bg-green-700 active:!bg-green-800 border-0':
          shouldApplyStyle(
            'primary',
            'success',
            props.iconOnly,
            props.buttonType,
            props.buttonActionStyle
          ),
        'bg-transparent text-green-600 hover:!bg-green-100 active:!bg-green-200 border-0':
          shouldApplyStyle(
            'text',
            'success',
            props.iconOnly,
            props.buttonType,
            props.buttonActionStyle
          ),
      },
      {
        // Success
        'active:!shadow-warning focus:!shadow-warning':
          props.buttonActionStyle == 'warning',
        'bg-yellow-600 text-grayscale-100 hover:!bg-yellow-700 active:!bg-yellow-800 border-0':
          shouldApplyStyle(
            'primary',
            'warning',
            props.iconOnly,
            props.buttonType,
            props.buttonActionStyle
          ),
        'bg-transparent text-yellow-600 hover:!bg-yellow-100 active:!bg-yellow-200 border-0':
          shouldApplyStyle(
            'text',
            'warning',
            props.iconOnly,
            props.buttonType,
            props.buttonActionStyle
          ),
      },
      {
        '!text-xs px-4 !h-8': props.size == 'small',
        '!text-sm px-5 !h-10': props.size == null || props.size == '',
        '!text-base px-6 !h-12': props.size == 'large',
        'invisible-label': props.loading || props.buttonType === 'iconOnly',
      }
    ),
  }),
};

export default ButtonTheme;
