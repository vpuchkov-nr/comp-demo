import { InputText as PrimeInputText } from 'primereact/inputtext';
import cn from 'classnames';
import Label from '../Label/Label';
import Small from '../Small/Small';
import { ErrorIcon } from '../../icons';

export default function InputText(props) {
  const { Icon } = props;

  const iconClassName = cn(
    'absolute top-1/2 text-grayscale-900',
    {
      'ml-2': props.iconPosition == 'left' && props.size == 'small',
      'ml-3': props.iconPosition == 'left' && !props.size,
      'ml-4': props.iconPosition == 'left' && props.size == 'large',

      'mr-2': props.iconPosition == 'right' && props.size == 'small',
      'mr-3': props.iconPosition == 'right' && !props.size,
      'mr-4': props.iconPosition == 'right' && props.size == 'large',
    },
    { 'right-0': props.iconPosition == 'right' },
    {
      'text-base -mt-2': props.size == 'small',
      'text-xl -mt-2.5': !props.size,
      'text-2xl -mt-3': props.size == 'large',
    }
  );

  return (
    <div className="flex flex-col gap-1 items-start">
      {props.label && <Label id={props.id}>{props.label}</Label>}

      <span className="relative">
        {Icon && <Icon className={iconClassName} />}
        <PrimeInputText {...props} />
      </span>

      {props.error && props.errorMessage && (
        <Small className="text-red-600 flex flex-align-center">
          <ErrorIcon />
          {props.errorMessage}
        </Small>
      )}

      {props.helpText && <Small>{props.helpText}</Small>}
    </div>
  );
}
