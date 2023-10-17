import cn from 'classnames';

export default function Small(props) {
  const className = cn({});
  return <small className="helper-text">{props.children}</small>;
}
