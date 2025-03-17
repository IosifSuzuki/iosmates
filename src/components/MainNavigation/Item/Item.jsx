import { Link } from 'react-router-dom';
import './Item.css';

export default function Item(props) {
  const title = props.title;
  const path = props.path;
  const extraClassName = props.className || '';
  const textClassName = props.textClassName || '';
  const onClick = props.onClick;

  let className = 'p-2';
  className = [
    ...new Set([...className.split(/\s+/), ...extraClassName.split(/\s+/)]),
  ].join(' ');

  return (
    <li className={className}>
      <Link onClick={onClick} className={textClassName} to={path}>
        {title}
      </Link>
    </li>
  );
}
