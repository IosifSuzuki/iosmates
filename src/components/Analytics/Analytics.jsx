import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { initGA, loadPage } from './../../services/analytics/main';

export default function Analytics() {
  const location = useLocation();

  useEffect(() => {
    initGA();
  }, []);

  useEffect(() => {
    loadPage(location.pathname + location.search);
  }, [location]);

  return null;
}
