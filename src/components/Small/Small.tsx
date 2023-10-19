import cn from 'classnames';

export default function Small(props) {
  const className = cn('text-xs text-grayscale-900 gap-1', props.className);
  return <small className={className}>{props.children}</small>;
}
