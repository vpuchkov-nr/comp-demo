import { Button as PrimeButton, ButtonProps } from 'primereact/button';

import './style.scss';

type ButtonSize = 'sm' | 'md' | 'lg';
type ButtonActionStyle =
  | 'brand'
  | 'contrast'
  | 'destructive'
  | 'success'
  | 'warning'
  | 'custom'
  | 'interactive';

type ButtonType = 'primary' | 'secondary' | 'text' | 'link';

type ButtonIconPosition = 'left' | 'right' | 'top' | 'bottom';

export interface ButtonInterface {
  loading?: boolean;
  label?: string;
  disabled?: boolean;
  iconPosition?: ButtonIconPosition;
  icon?: string;
  buttonType?: ButtonType;
  size?: ButtonSize;
  buttonActionStyle?: ButtonActionStyle;
  onClickHandler?: (
    e: React.MouseEvent<HTMLButtonElement>,
    label: string | undefined,
    icon: string | undefined
  ) => void;
  tooltip?: string;
  iconOnly?: boolean;
}

export default function Button(props: ButtonInterface & ButtonProps) {
  const {
    loading,
    buttonType,
    label,
    tooltip,
    icon,
    onClickHandler = () => {},
    size,
    iconOnly,
  } = props;

  const labelText = loading || iconOnly ? '' : label;
  const text = buttonType === 'text';
  const link = buttonType === 'link';

  return (
    <PrimeButton
      {...props}
      size={size}
      onClick={(e: React.MouseEvent<HTMLButtonElement>) =>
        onClickHandler(e, label, icon)
      }
      tooltipOptions={{ position: 'bottom' }}
      label={labelText}
      link={link}
      tooltip={tooltip || label || ''}
      text={text}
    />
  );
}
