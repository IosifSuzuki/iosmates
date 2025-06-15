import './Footer.css';

import { Link } from 'react-router-dom';

import { useBreakpoint } from './../../hooks/useBreakpoint/useBreakpoint';
import { isMobileScreen } from './../../utils/screen';

import { ContactInfoStyle, ContactInfo } from './../ContactInfo/ContactInfo';
import CompanyInfo from './../CompanyInfo/CompanyInfo';

export default function Footer(props) {
  const id = props.id;
  const date = new Date();
  const contactForms = props.contactForms;
  const company = props.company;

  const breakpoint = useBreakpoint();
  const isMobile = isMobileScreen(breakpoint);

  let cantactsClassName = 'cantacts w-full';
  if (isMobile) {
    let correctedClassName = 'flex flex-col gap-2';
    cantactsClassName = [
      ...new Set([
        ...cantactsClassName.split(' '),
        ...correctedClassName.split(' '),
      ]),
    ]
      .filter(Boolean)
      .join(' ');
  } else {
    let correctedClassName = 'flex flex-row justify-between gap-2';
    cantactsClassName = [
      ...new Set([
        ...cantactsClassName.split(' '),
        ...correctedClassName.split(' '),
      ]),
    ]
      .filter(Boolean)
      .join(' ');
  }

  const contactInfoJSXs = contactForms.map((contactForm, idx) => {
    return (
      <ContactInfo
        key={idx}
        contactForm={contactForm}
        style={ContactInfoStyle.FULL}
      />
    );
  });

  return (
    <footer id={id} className='footer-container mt-8 w-full'>
      <div className='container px-6 md:px-10 mx-auto py-7 flex flex-col gap-8'>
        <section className={cantactsClassName}>
          <section className='max-w-80'>
            <div className='address flex flex-col gap-4'>
              <Link className='font-semibold text-sm' to='/privacy-policy'>
                PRIVACY POLICY{' '}
              </Link>
              <CompanyInfo company={company} />
            </div>
          </section>
          <section className='cantacts max-w-80 flex flex-col gap-4'>
            {contactInfoJSXs}
          </section>
        </section>
        <div className='flex flex-col items-center gap-1'>
          <h3 className='font-bold text-dark-title'>
            Your partner in iOS development
          </h3>
          <h4 className='text-dark-title text-center'>
            © {date.getFullYear()} {company.name} All rights reserved.
          </h4>
        </div>
      </div>
    </footer>
  );
}
