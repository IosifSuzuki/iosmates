import { MenuIcon, XIcon } from 'lucide-react';

import './MobileMenuToggleButton.css';

export default function MobileMenuToggleButton(props) {
  const isMenuOpen = props.isMenuOpen;
  const onClick = props.onClick;
  return (
    <button
      onClick={onClick}
      aria-labelledby='Menu Toggle Button'
      className='size-6 text-subtitle'
    >
      {isMenuOpen ? <XIcon /> : <MenuIcon />}
    </button>
  );
}
