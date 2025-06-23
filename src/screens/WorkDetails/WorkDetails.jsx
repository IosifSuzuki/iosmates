import { useRef, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './WorkDetails.css';

import { company, contactForms } from './../../services/shared/data';
import { findWork } from './../../services/shared/works';

import Converter from './../../services/md/converter';
import { Style } from './../../services/md/config';

import MainNavigation from './../../components/MainNavigation/MainNavigation';
import HScroll from './../../components/HScroll/HScroll';
import Footer from './../../components/Footer/Footer';

export default function WorkDetails(props) {
  const { name } = useParams();
  const mainHeaderRef = useRef();
  const [html, setHtml] = useState('');
  const work = findWork(name);

  const itemsJSX = work.screens.map((path, idx) => {
    return (
      <div
        key={idx}
        className='flex-shrink-0 w-64 scroll-snap-align-start'
        style={{ scrollSnapAlign: 'start' }}
      >
        <img src={path} className='w-full h-full rounded-lg' />
      </div>
    );
  });

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(work.article);
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
    <div className='font-app bg-background text-regular'>
      <MainNavigation ref={mainHeaderRef} logoText='iosmates.com' />
      <main className='container px-6 md:px-10 pt-6 mx-auto flex flex-col'>
        <div className='leading-8' dangerouslySetInnerHTML={{ __html: html }} />
        <h2 className='text-center text-xl font-bold p-4'>Screenshots</h2>
        <HScroll items={itemsJSX} />
      </main>
      <Footer id='footer' company={company} contactForms={contactForms} />
    </div>
  );
}
