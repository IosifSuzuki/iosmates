import { useState } from 'react';

import './MainNavigation.css';

import { useBreakpoint } from './../../hooks/useBreakpoint/useBreakpoint';
import { isMobileScreen } from './../../utils/screen';

import { items, ItemStyles } from './Item';
import Logo from './Logo/Logo';
import NavList from './NavList/NavList';
import MobileMenuToggleButton from './MobileMenuToggleButton/MobileMenuToggleButton';

export default function MainNavigation(props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const ref = props.ref;
  const breakpoint = useBreakpoint();
  const isMobile = isMobileScreen(breakpoint);

  const menuItems = items(isMobile);
  const logoText = props.logoText;
  let navClassName =
    'container px-6 md:px-10 flex-col w-full mx-auto py-4 text-dark-subtitle';
  if (isMobile && isMobileMenuOpen) {
    const mobileNavClassName = 'h-screen';
    navClassName = [
      ...new Set([
        ...navClassName.split(' '),
        ...mobileNavClassName.split(' '),
      ]),
    ]
      .filter(Boolean)
      .join(' ');
  }

  function toggleClickHandle() {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  }

  function itemClickHandler(path) {
    setIsMobileMenuOpen(false);
  }

  return (
    <header
      className='main-header bg-dark-background w-full shadow-sm shadow-neutral-700'
      ref={ref}
    >
      <nav className={navClassName}>
        <div className='flex flex-row justify-between items-center'>
          <div className='logo text-lg font-bold p-2'>
            <Logo title={logoText} />
          </div>
          <div>
            {!isMobile && (
              <NavList
                isMobile={isMobile}
                className='flex flex-row items-center gap-5'
                items={menuItems}
              />
            )}
            {isMobile && (
              <MobileMenuToggleButton
                isMenuOpen={isMobileMenuOpen}
                onClick={toggleClickHandle}
              />
            )}
          </div>
        </div>
        {isMobile && isMobileMenuOpen && (
          <div className='h-full bg-dark-background flex-grow'>
            <NavList
              onClick={itemClickHandler}
              isMobile={isMobile}
              className='h-full py-10 flex flex-col justify-center gap-5'
              items={menuItems}
            />
          </div>
        )}
      </nav>
    </header>
  );
}
