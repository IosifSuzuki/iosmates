import './Logo.css';

import { Link } from 'react-router-dom';

export default function Logo(props) {
  const title = props.title;
  return (
    <Link
      className='hover:text-dark-hightlight transition-colors duration-300'
      to='/'
    >
      {title}
    </Link>
  );
}
