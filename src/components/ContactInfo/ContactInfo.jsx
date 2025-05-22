import './ContactInfo.css';

export const ContactInfoStyle = {
  REGULAR: 'regular',
  FULL: 'full',
};

export function ContactInfo(props) {
  const contactForm = props.contactForm;
  const emailHref = `mailto:${contactForm.email}`;
  const style = props.style ?? ContactInfoStyle.REGULAR;

  return (
    <section className='cantacts max-w-80 flex flex-col gap-2'>
      {style === ContactInfoStyle.FULL && (
        <div className='name'>
          <p className='font-bold text-dark-subtitle'>
            <a href={emailHref}> {contactForm.name}</a>
          </p>
        </div>
      )}
      <div className='specialization'>
        <p className='font-light text-dark-subtitle'>{contactForm.about}</p>
      </div>
      <div className='phone'>
        <p className='font-bold'>
          Phone:{' '}
          <a className='font-light text-dark-subtitle' href={emailHref}>
            {contactForm.phone}
          </a>
        </p>
      </div>
      <div className='email'>
        <p className='font-bold'>
          Email:{' '}
          <a className='font-light text-dark-subtitle' href={emailHref}>
            {contactForm.email}
          </a>
        </p>
      </div>
      <div className='languages'>
        <p className='font-bold'>
          Languages: <a className='font-light'>{contactForm.languages}</a>
        </p>
      </div>
    </section>
  );
}
