import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { initGA, loadPage } from './../../services/analytics/main';

export default function Analytics() {
  const location = useLocation();
  const referrer = document.referrer ?? '?';

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    loadPage(location.pathname + location.search, referrer);
  }, [location]);

  return null;
}
