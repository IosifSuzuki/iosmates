import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { scrollToSection } from './../../utils/html';

export default function ScrollToAnchor(props) {
  const { pathname, hash, key } = useLocation();
  const padding = props.padding ?? 8;
  useEffect(() => {
    if (!hash) {
      return;
    }

    const header = document.querySelector('header');
    const headerHeight = (header.offsetHeight ?? 76) + padding;

    const tryScroll = () => {
      const element = document.querySelector(hash);
      if (element) {
        const id = hash.substring(1);
        scrollToSection(id, headerHeight);
      }
    };

    tryScroll();
    setTimeout(tryScroll, 50);
  }, [hash, key, pathname]);

  return null;
}
