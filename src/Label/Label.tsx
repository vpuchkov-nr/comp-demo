import cn from 'classnames';

export default function Label(props) {
  console.log('and props are: ', props);
  const className = cn({});
  return <label htmlFor={props.id}>{props.label}</label>;
}
