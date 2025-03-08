import './Footer.css';
import PhoneNumbers from './../PhoneNumbers/PhoneNumbers';

export function ContactFooterForm(phoneNumbers, email, address) {
  this.phoneNumbers = phoneNumbers;
  this.email = email;
  this.address = address;
}

export function Footer(props) {
  const date = new Date();
  const contactForm = props.contactForm;
  const emailHref = `mailto:${contactForm.email}`;
  return (
    <footer className='mt-8'>
      <div className='container mx-auto py-7 flex flex-col gap-2'>
        <section className='contact-info flex flex-row justify-between items-center'>
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
