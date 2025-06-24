import { useState, useEffect } from 'react';

import { useBreakpoint } from './../../hooks/useBreakpoint/useBreakpoint';
import { isMobileScreen } from './../../utils/screen';

import Button from './../Button/Button';

import './Intro.css';

export default function Intro(props) {
  const breakpoint = useBreakpoint();
  const isMobile = isMobileScreen(breakpoint);
  const introRef = props.ref;
  const onClick = props.onClick;

  return (
    <section
      ref={introRef}
      className='w-full flex flex-col justify-center items-center text-center relative overflow-hidden'
    >
      <div className='absolute inset-0 pointer-events-none flex justify-center items-start'>
        {['one', 'two', 'three', 'four', 'five'].map((className) => (
          <div key={className} className={`circle ${className}`}></div>
        ))}
      </div>
      <div className='container mx-auto px-6 md:px-10 absolute flex flex-col gap-4 items-center'>
        <h1 className='intro-title text-title font-extrabold'>iOSmates</h1>
        <p className='text-subtitle text-base font-normal'>
          Elite Swift&nbsp;&amp;&nbsp;SwiftUI engineers. Performance & polish
          delivered.
        </p>
        <Button type='button' onClick={onClick} className='w-auto'>
          Explore services
        </Button>
      </div>
    </section>
  );
}
