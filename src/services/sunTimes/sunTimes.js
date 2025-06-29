import { isDateToday } from './../../utils/date';
import { getClientPosition } from './../../utils/geolocation';

export default function SunTimes() {
  this.baseURL = import.meta.env.VITE_SUN_TIMES_API_URL;
}

SunTimes.prototype.getSunTimes = getSunTimes;

async function getSunTimes() {
  if (!shouldFetchData()) {
    return getCachedSunTimes();
  }

  try {
    const position = await getClientPosition({
      timeout: 5000,
    });
    const { latitude, longitude } = position.coords;
    const sunTimes = await fetchData(this.baseURL, latitude, longitude);
    cacheSunTimes(sunTimes);
    markAsFetchedData();
  } catch (error) {
    console.error('fail to get location: ', error);
  }

  return getCachedSunTimes();
}

async function fetchData(baseUrl, latitude, longitude) {
  const url = new URL(baseUrl);

  url.pathname = '/json';
  url.searchParams.set('lat', latitude);
  url.searchParams.set('lng', longitude);
  url.searchParams.set('time_format', 'unix');
  url.searchParams.set('date', 'today');

  const response = await fetch(url.toString());
  const data = await response.json();
  return {
    sunrise: new Date(Number(data['results']['sunrise']) * 1000),
    sunset: new Date(Number(data['results']['sunset']) * 1000),
  };
}

function shouldFetchData() {
  let date = localStorage.getItem('last_fetched_sun_times');
  if (!date) {
    return false;
  }
  return !isDateToday(date);
}

function markAsFetchedData() {
  const now = new Date();
  localStorage.setItem('last_fetched_sun_times', now.toISOString());
}

function getCachedSunTimes() {
  const jsonStr = localStorage.getItem('sun_times');
  if (!jsonStr) return null;

  const parsed = JSON.parse(jsonStr);
  return {
    sunrise: new Date(parsed.sunrise),
    sunset: new Date(parsed.sunset),
  };
}

function cacheSunTimes(sunTimes) {
  const toSave = {
    sunrise: sunTimes.sunrise.toISOString(),
    sunset: sunTimes.sunset.toISOString(),
  };
  localStorage.setItem('sun_times', JSON.stringify(toSave));
}
