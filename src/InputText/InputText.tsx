import { InputText as PrimeInputText } from 'primereact/inputtext';
import cn from 'classnames';
import { ErrorIcon } from '../assets/icons';

export default function InputText(props) {
  console.log('and props are: ', props);
  const labelClassName = cn({});
  return (
    <div className="flex flex-col">
      {props.label && <label htmlFor={props.id}>{props.label}</label>}

      <PrimeInputText {...props} />

      {props.error && props.errorMessage && (
        <small className="error-text">
          <ErrorIcon />
          {props.errorMessage}
        </small>
      )}

      {props.helpText && (
        <small className="helper-text">{props.helpText}</small>
      )}
    </div>
  );
}
