export function isMobileScreen(breakpoint) {
  switch (breakpoint) {
    case 'xs':
    case 'sm':
    case 'md':
      return true;
    default:
      return false;
  }
}
