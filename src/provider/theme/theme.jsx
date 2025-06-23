import { useState, createContext, useContext, useEffect } from 'react';
import { ThemeMode } from './config.js';
import SunTimes from './../../services/sunTimes/sunTimes';

import { isGeolocationAvailable } from './../../utils/geolocation';

const ThemeContext = createContext();

export const useTheme = () => {
  return useContext(ThemeContext);
};

async function resolveAutomaticTheme() {
  const sunTimesService = new SunTimes();
  const sunTimes = await sunTimesService.getSunTimes();
  if (!sunTimes) {
    throw new Error("can't get sun times");
  }
  const now = new Date();
  if (now >= sunTimes.sunrise && now < sunTimes.sunset) {
    return 'bright';
  }

  return 'dark';
}

export const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem('theme_mode') ?? ThemeMode.DARK,
  );
  const [theme, setTheme] = useState(ThemeMode.theme(themeMode));
  const [isClientGeolocationAvailable, setIsClientGeolocationAvailable] =
    useState(false);

  const toggleThemeMode = () => {
    let newMode = ThemeMode.toggle(themeMode);
    if (!isClientGeolocationAvailable && newMode === ThemeMode.AUTOMATIC) {
      newMode = ThemeMode.toggle(newMode);
      console.log(newMode);
    }
    setThemeMode(newMode);
    localStorage.setItem('theme_mode', newMode);
  };

  useEffect(() => {
    const updateThemeBySunset = async () => {
      if (themeMode != ThemeMode.AUTOMATIC) {
        return;
      }

      const resolvedTheme = await resolveAutomaticTheme();
      setTheme(resolvedTheme);
    };

    switch (themeMode) {
      case ThemeMode.DARK:
      case ThemeMode.BRIGHT:
        setTheme(ThemeMode.theme(themeMode));
        break;
      default:
        break;
    }
    const interval = setInterval(updateThemeBySunset, 60 * 1000);
    updateThemeBySunset();
    return () => clearInterval(interval);
  }, [themeMode]);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  useEffect(() => {
    const checkClientGeolocation = async () => {
      const updatedIsClientGeolocationAvailable =
        await isGeolocationAvailable();
      setIsClientGeolocationAvailable(updatedIsClientGeolocationAvailable);
    };
    checkClientGeolocation();
  }, [themeMode]);

  return (
    <ThemeContext.Provider value={{ themeMode, toggleThemeMode }}>
      {children}
    </ThemeContext.Provider>
  );
};
