import ReactGA from 'react-ga4';

export function initGA() {
  const measurementID = import.meta.env.VITE_GA_MEASUREMENT_ID;
  ReactGA.initialize(measurementID);
}

export function loadPage(url) {
  ReactGA.send({ hitType: 'pageview', page: url });
}

export function event(name, params) {
  ReactGA.event(name, params);
}
