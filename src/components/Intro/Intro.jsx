import { useState, useEffect } from 'react';

import { useBreakpoint } from './../../hooks/useBreakpoint/useBreakpoint';
import { isMobileScreen } from './../../utils/screen';

import './Intro.css';

const displayBannerImageDurationInSeconds = 24 * 60 * 60;

export default function Intro(props) {
  const breakpoint = useBreakpoint();
  const isMobile = isMobileScreen(breakpoint);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);
  const [fade, setFade] = useState(false);
  const extraClassName = props.className || '';
  const introRef = props.ref;
  const bgImages = (() => {
    if (isMobile) {
      return ['mobile_mac_book_banner_1.png'];
    }
    return ['mac_book_banner_1.png'];
  })().map((item) => {
    return `${import.meta.env.VITE_PUBLIC_URL}/index/${item}`;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % bgImages.length);
        setFade(false);
      }, 200);
    }, displayBannerImageDurationInSeconds * 1000);

    return () => {
      clearInterval(interval);
    };
  });

  let className = 'relative';
  className = [
    ...new Set([...className.split(' '), ...extraClassName.split(' ')]),
  ]
    .filter(Boolean)
    .join(' ');
  let imageClassName =
    'h-full w-full object-cover transition-opacity duration-200';
  if (fade) {
    const correctionInClassName = 'opacity-0';
    imageClassName = [
      ...new Set([
        ...imageClassName.split(' '),
        ...correctionInClassName.split(' '),
      ]),
    ]
      .filter(Boolean)
      .join(' ');
  } else {
    const correctionInClassName = 'opacity-100';
    imageClassName = [
      ...new Set([
        ...imageClassName.split(' '),
        ...correctionInClassName.split(' '),
      ]),
    ]
      .filter(Boolean)
      .join(' ');
  }

  return (
    <div ref={introRef} className={className}>
      <img className={imageClassName} src={bgImages[currentBannerIndex]} />
      <section className='intro'>
        <div className='container px-6 md:px-10 mx-auto h-full flex flex-col justify-center items-center gap-2 text-center'>
          <div className='flex flex-col gap-2 p-8 rounded-lg bg-opacity-70 bg-overlay'>
            <h3 className='text-2xl font-semibold pb-4'>
              Welcome to iosmates.com!
            </h3>
            <p className='text-base'>
              We offer cost-effective iOS development outsourcing with skilled
              talent from Europe.{' '}
            </p>
            <p className='text-base'>
              Our flexible solutions provide quality service at competitive
              rates, tailored to meet your needs
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
