import { useRef, useEffect, useState } from 'react';

import './Services.css';

import Converter from './../../services/md/converter';
import { Style } from './../../services/md/config';

import { company, contactForms } from './../../services/shared/data';

import MainNavigation from './../../components/MainNavigation/MainNavigation';
import Footer from './../../components/Footer/Footer';

export default function Services(props) {
  const servicesPath = '/services/article.md';
  const mainHeaderRef = useRef();
  const [html, setHtml] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(servicesPath);
        if (!res.ok) {
          throw new Error('file not found');
        }
        const text = await res.text();
        const converter = new Converter(Style.ARTICLE);
        setHtml(converter.makeHtml(text));
      } catch (err) {
        console.error(err);
      }
    })();
  });

  return (
    <div className='font-app bg-dark-background text-dark-regular'>
      <MainNavigation ref={mainHeaderRef} logoText='iosmates.com' />
      <main className='container px-6 md:px-10 pt-6 mx-auto flex flex-col'>
        <div className='leading-8' dangerouslySetInnerHTML={{ __html: html }} />
      </main>
      <Footer id='footer' company={company} contactForms={contactForms} />
    </div>
  );
}
