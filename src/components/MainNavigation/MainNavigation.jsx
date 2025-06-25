import { useState } from 'react';
import { Settings, Moon, Sun } from 'lucide-react';

import './MainNavigation.css';

import { useBreakpoint } from './../../hooks/useBreakpoint/useBreakpoint';
import { useTheme } from './../../provider/theme/theme';
import { ThemeMode } from './../../provider/theme/config';
import { isMobileScreen } from './../../utils/screen';
import { scrollToSection } from './../../utils/html';

import { items, ItemStyles, ItemTag } from './Item';
import Logo from './Logo/Logo';
import NavList from './NavList/NavList';
import MobileMenuToggleButton from './MobileMenuToggleButton/MobileMenuToggleButton';

function getThemeIcon(themeMode, isClientGeolocationAvailable) {
  const nextTheme = getNextTheme(themeMode, isClientGeolocationAvailable);
  switch (nextTheme) {
    case ThemeMode.BRIGHT:
      return <Sun size={20} />;
    case ThemeMode.DARK:
      return <Moon size={20} />;
    case ThemeMode.AUTOMATIC:
      return <Settings size={20} />;
  }
}

function getThemeTitle(themeMode, isMobile, isClientGeolocationAvailable) {
  if (!isMobile) {
    return '';
  }
  const nextTheme = getNextTheme(themeMode, isClientGeolocationAvailable);
  return ThemeMode.title(nextTheme);
}

function getNextTheme(themeMode, isClientGeolocationAvailable) {
  switch (themeMode) {
    case ThemeMode.BRIGHT:
      if (isClientGeolocationAvailable) {
        return ThemeMode.AUTOMATIC;
      }
      return ThemeMode.DARK;
    case ThemeMode.DARK:
      return ThemeMode.BRIGHT;
    case ThemeMode.AUTOMATIC:
      return ThemeMode.DARK;
  }
}

export default function MainNavigation(props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { themeMode, toggleThemeMode, isClientGeolocationAvailable } =
    useTheme();
  const ref = props.ref;
  const breakpoint = useBreakpoint();
  const isMobile = isMobileScreen(breakpoint);

  const menuItems = items(
    isMobile,
    getThemeIcon(themeMode, isClientGeolocationAvailable),
    getThemeTitle(themeMode, isMobile, isClientGeolocationAvailable),
  );
  const logoText = props.logoText;
  let navClassName =
    'container px-6 md:px-10 flex-col w-full mx-auto py-4 text-subtitle';
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

  function logoClickHandler() {
    scrollToSection();
  }

  function itemClickHandler(tag) {
    switch (tag) {
      case ItemTag.THEME:
        toggleThemeMode();
        break;
      default:
        setIsMobileMenuOpen(false);
        break;
    }
  }

  return (
    <header
      className='main-header bg-background w-full shadow-sm shadow-separate'
      ref={ref}
    >
      <nav className={navClassName}>
        <div className='flex flex-row justify-between items-center'>
          <div className='logo text-lg font-bold p-2'>
            <Logo title={logoText} onClick={logoClickHandler} />
          </div>
          <div>
            {!isMobile && (
              <NavList
                onClick={itemClickHandler}
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
          <div className='h-full bg-background flex-grow'>
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
