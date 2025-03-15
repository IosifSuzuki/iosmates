import { useEffect, useState } from 'react';

import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from './../../../tailwind.config';

const tailwondConfigObject = resolveConfig(tailwindConfig);

export function useBreakpoint() {
  const [breakpoint, setBreakpoint] = useState('');

  useEffect(() => {
    const breakpoints = tailwondConfigObject.theme?.screens || {};
    const sortedBreakpoints = Object.entries(breakpoints).sort(
      (a, b) => parseInt(a[1]) - parseInt(b[1]),
    );

    const updateBreakpoint = () => {
      const width = window.innerWidth;
      let activeBreakpoint = 'xs';
      for (const [name, size] of sortedBreakpoints) {
        if (width >= parseInt(size)) activeBreakpoint = name;
      }
      setBreakpoint(activeBreakpoint);
    };

    updateBreakpoint();
    window.addEventListener('resize', updateBreakpoint);
    return () => window.removeEventListener('resize', updateBreakpoint);
  }, []);

  return breakpoint;
}
