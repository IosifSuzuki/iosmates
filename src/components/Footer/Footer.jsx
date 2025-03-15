import './Footer.css';

import { useBreakpoint } from './../../hooks/useBreakpoint/useBreakpoint';
import { isMobileScreen } from './../../utils/screen';

import PhoneNumbers from './../PhoneNumbers/PhoneNumbers';

export function ContactFooterForm(phoneNumbers, email, address) {
  this.phoneNumbers = phoneNumbers;
  this.email = email;
  this.address = address;
}

export function Footer(props) {
  const id = props.id;
  const date = new Date();
  const contactForm = props.contactForm;
  const emailHref = `mailto:${contactForm.email}`;

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

  return (
    <footer id={id} className='mt-8'>
      <div className='container px-6 md:px-10 mx-auto py-7 flex flex-col gap-2'>
        <section className={cantactsClassName}>
          <section className='max-w-80'>
            <div className='address'>
              <a className='font-semibold text-sm' href='#'>
                PRIVACY & POLICY{' '}
              </a>
            </div>
          </section>
          <section className='cantacts max-w-80 flex flex-col gap-2'>
            <PhoneNumbers phoneNumbers={contactForm.phoneNumbers} />
            <div className='email'>
              <h4 className='font-bold'>
                Work email:{' '}
                <a className='font-light text-dark-subtitle' href={emailHref}>
                  {contactForm.email}
                </a>
              </h4>
            </div>
            <div className='address'>
              <h4 className='font-bold'>
                Address:{' '}
                <span className='font-light text-dark-subtitle'>
                  {contactForm.address}
                </span>
              </h4>
            </div>
          </section>
        </section>
        <div className='flex flex-col items-center gap-1'>
          <h3 className='font-bold text-sm text-dark-title'>iosmates.com</h3>
          <h3 className='font-bold text-dark-title'>
            Your partner in iOS development
          </h3>
          <h4 className='text-dark-title'>{date.getFullYear()}</h4>
        </div>
      </div>
    </footer>
  );
}
