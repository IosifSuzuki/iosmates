import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';

import ScrollToAnchor from './components/ScrollToAnchor/ScrollToAnchor';
import Analytics from './components/Analytics/Analytics';

import { ThemeProvider } from './provider/theme/theme';
import useCookie from './hooks/useCookie/useCookie';

import CookieConsent from './components/CookieConsent/CookieConsent';

import Index from './screens/Index/Index';
import PrivacyPolicy from './screens/PrivacyPolicy/PrivacyPolicy';
import WorkDetails from './screens/WorkDetails/WorkDetails';
import OurWorks from './screens/OurWorks/OurWorks';
import AboutUs from './screens/AboutUs/AboutUs';

function App() {
  const [cookieConsestValue] = useCookie('cookie_consest');
  console.log(cookieConsestValue);

  let cookieConsestContainer;
  let cookieConsestRoot;

  function showCookieConsest() {
    cookieConsestContainer = document.createElement('div');
    cookieConsestContainer.className =
      'w-full h-full z-2 fixed bottom-0 left-0 bg-overlay/10 pointer-events-none';

    cookieConsestRoot = createRoot(cookieConsestContainer);
    document.body.appendChild(cookieConsestContainer);

    const onClose = () => {
      cookieConsestRoot.unmount();
      cookieConsestContainer.remove();
      document.body.style.paddingBottom = '0px';
    };

    cookieConsestRoot.render(
      <div className='relative w-full h-full'>
        <CookieConsent
          id='cookie-banner'
          className='absolute bottom-0 left-0 pointer-events-auto'
          title='THIS WEBSITE USES COOKIES'
          description='We use cookies to personalize content and provide the best user experience on our website. We also collect general user data to better understand our visitors, and we may use third-party services to enhance your experience. By continuing to use our site, you consent to the use of cookies.'
          onClose={onClose}
        />
      </div>,
    );

    setTimeout(() => {
      const banner = cookieConsestContainer.querySelector('#cookie-banner');
      if (banner) {
        const height = banner.getBoundingClientRect().height;
        document.body.style.paddingBottom = height + 'px';
      }
    }, 100);
  }

  function closeCookieConsest() {
    if (cookieConsestRoot) {
      cookieConsestRoot.unmount();
    }
    if (cookieConsestContainer) {
      cookieConsestContainer.remove();
    }
    document.body.style.paddingBottom = '0px';
  }

  useEffect(() => {
    if (cookieConsestValue) {
      closeCookieConsest();
    } else if (!cookieConsestContainer && !cookieConsestRoot) {
      showCookieConsest();
    }
  }, [cookieConsestValue]);

  return (
    <ThemeProvider>
      <BrowserRouter>
        <ScrollToAnchor padding={10} />
        <Analytics />
        <Routes>
          <Route index element={<Index />} />
          <Route path='privacy-policy' element={<PrivacyPolicy />} />
          <Route path='works' element={<OurWorks />} />
          <Route path='work/details/:name' element={<WorkDetails />} />
          <Route path='about_us' element={<AboutUs />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
