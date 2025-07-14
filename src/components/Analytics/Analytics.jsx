import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import useCookie from './../../hooks/useCookie/useCookie';

import { initGA, loadPage } from './../../services/analytics/main';

export default function Analytics() {
  const [cookieConsestValue] = useCookie('cookieConsest');
  const location = useLocation();
  const referrer = document.referrer ?? '?';

  useEffect(() => {
    if (Boolean(cookieConsestValue)) {
      initGA();
    }
  }, [cookieConsestValue]);

  useEffect(() => {
    loadPage(location.pathname + location.search, referrer);
  }, [location]);

  return null;
}
