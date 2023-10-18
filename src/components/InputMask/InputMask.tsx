import { InputMask as PrimeInputMask } from 'primereact/inputmask';
import Label from '../Label/Label';
import Small from '../Small/Small';
import { ErrorIcon } from '../../icons';

export default function InputText(props) {
  console.log('and props are', props);

  return (
    <div className="flex flex-col gap-1 items-start">
      {props.label && <Label id={props.id}>{props.label}</Label>}

      <PrimeInputMask {...props} />

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
