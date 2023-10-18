import cn from 'classnames';

export default function Label(props) {
  const className = cn('text-xs text-grayscale-900', props.className);
  return (
    <label htmlFor={props.id} className={className}>
      {props.children}
    </label>
  );
}
