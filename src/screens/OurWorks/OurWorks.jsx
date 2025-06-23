import { useRef, useEffect, useState } from 'react';

import './OurWorks.css';

import { company, contactForms } from './../../services/shared/data';
import { fetchWorks } from './../../services/shared/works';
import Converter from './../../services/md/converter';
import { Style } from './../../services/md/config';
import { truncateHTML } from './../../services/md/functions';
import {
  cloneElement,
  removeElementsByTag,
  removeElementsByID,
} from './../../utils/html';
import { useBreakpoint } from './../../hooks/useBreakpoint/useBreakpoint';
import { isMobileScreen } from './../../utils/screen';

import { fetchContentFromLinks } from './../../utils/data';

import MainNavigation from './../../components/MainNavigation/MainNavigation';
import WorkItem from './../../components/WorkItem/WorkItem';
import Footer from './../../components/Footer/Footer';

export default function OurWorks(props) {
  const mainHeaderRef = useRef();
  const [workItemsJSX, setWorkItemsJSX] = useState([]);

  const breakpoint = useBreakpoint();
  const isMobile = isMobileScreen(breakpoint);

  useEffect(() => {
    const converter = new Converter(Style.PREVIEW);
    const works = fetchWorks();
    const articleLinks = works.map((work) => work.article);
    (async () => {
      const contentWithLinks = await fetchContentFromLinks(articleLinks);
      const workItemsJSX = works.map((work, idx) => {
        const text = contentWithLinks[work.article];
        const contentHTML = converter.makeHtml(text);

        const truncatedHTML = cloneElement(contentHTML);
        removeElementsByTag(truncatedHTML, ['ul']);
        removeElementsByID(truncatedHTML, ['platoform', 'technologies']);

        const maxChars = isMobile ? 300 : 400;
        truncateHTML(truncatedHTML, maxChars);

        const children = truncatedHTML.children;
        const lastChild = children[children.length - 1];
        if (['H1', 'H2', 'H3'].includes(lastChild.tagName)) {
          lastChild.remove();
        }

        const isLastItem = works.length - idx - 1 === 0;
        return (
          <div key={work.name}>
            <WorkItem
              title={work.fullName}
              link={`/work/details/${work.name}`}
              contentHTML={truncatedHTML.innerHTML}
            />
            {isLastItem ? (
              <></>
            ) : (
              <hr className='border-t border-separate opacity-60' />
            )}
          </div>
        );
      });
      setWorkItemsJSX(workItemsJSX);
    })();
  }, []);
  return (
    <div className='font-app bg-background text-regular'>
      <MainNavigation ref={mainHeaderRef} logoText='iosmates.com' />
      <main className='container px-6 md:px-10 pt-6 mx-auto flex flex-col'>
        {workItemsJSX}
      </main>
      <Footer id='footer' company={company} contactForms={contactForms} />
    </div>
  );
}
