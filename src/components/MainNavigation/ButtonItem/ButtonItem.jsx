import './ButtonItem.css';

import { Link } from 'react-router-dom';

export default function ButtonItem(props) {
  const title = props.title;
  const path = props.path;
  const extraClassName = props.className || '';
  const textClassName = props.textClassName || '';
  const onClick = props.onClick;
  let className =
    'button-item my-auto p-2 hover:text-dark-title transition-colors duration-300 p-2';
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
