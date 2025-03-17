import './ContactInfo.css';

import PhoneNumbers from './../PhoneNumbers/PhoneNumbers';

export const ContactInfoStyle = {
  REGULAR: 'rgular',
  FULL: 'full',
};

export function ContactInfo(props) {
  const contactForm = props.contactForm;
  const emailHref = `mailto:${contactForm.email}`;
  const style = props.style || ContactInfoStyle.REGULAR;

  return (
    <section className='cantacts max-w-80 flex flex-col gap-2'>
      {style === ContactInfoStyle.FULL && (
        <div className='name'>
          <p className='font-bold'>
            Full name:{' '}
            <a className='font-light text-dark-subtitle' href={emailHref}>
              {contactForm.name}
            </a>
          </p>
        </div>
      )}
      <PhoneNumbers phoneNumbers={contactForm.phoneNumbers} />
      <div className='email'>
        <p className='font-bold'>
          Work email:{' '}
          <a className='font-light text-dark-subtitle' href={emailHref}>
            {contactForm.email}
          </a>
        </p>
      </div>
      <div className='address'>
        <p className='font-bold'>
          Address:{' '}
          <span className='font-light text-dark-subtitle'>
            {contactForm.address}
          </span>
        </p>
      </div>
      <div className='specialization'>
        <p className='font-bold'>
          Specialization:{' '}
          <span className='font-light text-dark-subtitle'>
            {contactForm.specialization}
          </span>
        </p>
      </div>
    </section>
  );
}
