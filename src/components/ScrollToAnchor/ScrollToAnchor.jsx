import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToAnchor() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [hash, key, pathname]);

  return null;
}
