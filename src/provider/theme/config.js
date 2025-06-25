export const ThemeMode = {
  DARK: 'dark',
  BRIGHT: 'bright',
  AUTOMATIC: 'automatic',

  toggle(mode) {
    switch (mode) {
      case ThemeMode.DARK:
        return ThemeMode.BRIGHT;
      case ThemeMode.BRIGHT:
        return ThemeMode.AUTOMATIC;
      case ThemeMode.AUTOMATIC:
        return ThemeMode.DARK;
    }
  },

  theme(mode) {
    switch (mode) {
      case ThemeMode.DARK:
      case ThemeMode.AUTOMATIC:
        return 'dark';
      case ThemeMode.BRIGHT:
        return 'bright';
    }
  },

  title(mode) {
    switch (mode) {
      case ThemeMode.DARK:
        return 'Dark';
      case ThemeMode.BRIGHT:
        return 'Bright';
      case ThemeMode.AUTOMATIC:
        return 'Auto';
    }
  },
};
