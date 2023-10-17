import { InputText as PrimeInputText } from 'primereact/inputtext';
// import cn from 'classnames';
import Label from '../Label/Label';
import Small from '../Small/Small';
import { ErrorIcon } from '../assets/icons';

export default function InputText(props) {
  console.log('and props are: ', props);
  // const labelClassName = cn({});
  return (
    <div className="flex flex-col gap-1">
      {props.label && <Label id={props.id}>{props.label}</Label>}

      <PrimeInputText {...props} />

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
