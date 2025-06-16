import './Logo.css';

import { Link } from 'react-router-dom';

export default function Logo(props) {
  const title = props.title;
  const onClick = props.onClick;
  return (
    <Link
      className='hover:text-dark-hightlight transition-colors duration-300'
      to='/'
      onClick={onClick}
    >
      {title}
    </Link>
  );
}
