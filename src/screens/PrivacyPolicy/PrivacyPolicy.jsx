import { useRef } from 'react';

import './PrivacyPolicy.css';

import { company, contactForms } from './../../services/shared/data';

import MainNavigation from './../../components/MainNavigation/MainNavigation';
import Footer from './../../components/Footer/Footer';

import {
  ContactInfoStyle,
  ContactInfo,
} from './../../components/ContactInfo/ContactInfo';

import CompanyInfo from './../../components/CompanyInfo/CompanyInfo';

import { dateFormatted } from './../../utils/date';

const effectiveDate = new Date('2025-03-17');
const lastUpdateDate = new Date('2025-03-17');

export default function PrivacyPolicy(props) {
  const mainHeaderRef = useRef();
  const mainEmailHref = `mailto:${contactForms[0].email}`;

  const contactInfoJSXs = contactForms.map((contactForm, idx) => {
    return (
      <ContactInfo
        key={idx}
        style={ContactInfoStyle.FULL}
        contactForm={contactForm}
      />
    );
  });

  return (
    <div className='font-app bg-dark-background text-dark-regular'>
      <MainNavigation ref={mainHeaderRef} logoText='iosmates.com' />
      <main className='container px-6 md:px-10 pt-6 mx-auto flex flex-col'>
        <h1 className='text-center text-xl font-bold pb-4 '>Privacy Policy</h1>
        <div className='flex flex-col gap-2 text-left'>
          <p className='text-left'>
            <b>Effective Date:</b> {dateFormatted(effectiveDate)}
          </p>
          <p className='text-left'>
            <b>Last Updated:</b> {dateFormatted(lastUpdateDate)}
          </p>
        </div>
        <article className='flex flex-col gap-6 pt-6 text-base text-base'>
          <section className='flex flex-col gap-4 leading-8'>
            <h2 className='text-left text-xl font-bold'>1. Introduction</h2>
            <p className='indent-8'>
              Welcome to <b>iOSMates.com</b> (we&rdquo;, &rdquo;our&rdquo;, or
              &rdquo;us&rdquo;). This privacy policy explains how we collect,
              use, and protect the personal data you provide when using our
              website (<a href='/'>https://iosmates.com</a>) and services.
            </p>
            <p className='indent-8'>
              We are committed to protecting your privacy and complying with
              applicable data protection laws. By using our website and
              services, you consent to the practices described in this privacy
              policy.
            </p>
          </section>
          <section className='flex flex-col gap-4'>
            <h2 className='text-left text-xl font-bold'>2. Who we are</h2>
            <div className='indent-8 leading-8'>
              <CompanyInfo company={company} />
            </div>
            <div className='leading-6 flex flex-col gap-6 pl-8'>
              {contactInfoJSXs}
            </div>
            <div className='font-bold indent-8 leading-8'>
              <p> Website hosting provider: Hostinger </p>
              <p> CRM provider: HubSpot</p>
              <p>Analytics provider: Google Analytics</p>
            </div>
          </section>
          <section className='flex flex-col gap-4'>
            <h2 className='text-left text-xl font-bold'>
              3. Information we collect
            </h2>
            <p className='indent-8 leading-8'>
              We collect the following data when you use our website:
            </p>
            <h3 className='text-left text-lg font-bold'>
              3.1. Information you provide voluntarily (via contact form){' '}
            </h3>
            <ul className='list-disc px-8 list-inside leading-8'>
              <li>Name</li>
              <li>Email address</li>
              <li>Company name (if provided)</li>
              <li>Message content (any details you choose to share)</li>
            </ul>
            <h3 className='text-left text-lg font-bold'>
              3.2. Information collected automatically (via Google Analytics)
            </h3>
            <ul className='list-disc px-8 list-inside leading-8'>
              <li>
                <b>IP Address</b> (may be anonymized based on settings)
              </li>
              <li>
                <b>Device and browser information</b> (device type, operating
                system, browser version)
              </li>
              <li>
                <b>User interactions</b> (pages visited, time spent on pages,
                clicks)
              </li>
              <li>
                <b>Geographic data</b> (approximate location based on IP)
              </li>
            </ul>
            <p className='indent-8 leading-8'>
              This data is collected to improve website performance, analyze
              user behavior, and optimize the user experience.
            </p>
          </section>
          <section className='flex flex-col gap-4'>
            <h2 className='text-left text-xl font-bold'>
              4. How we use your information
            </h2>
            <p className='indent-8 leading-8'>
              We use the collected information for the following purposes:
            </p>
            <ul className='list-disc px-8 list-inside leading-8'>
              <li>To respond to inquiries and provide customer support</li>
              <li>
                To analyze website traffic and user interactions via{' '}
                <b>Google Analytics</b>
              </li>
              <li>
                To manage customer relationships through <b>HubSpot CRM</b>
              </li>
              <li>
                To improve our website&aposs functionality and user experience
              </li>
              <li>To comply with legal obligations (if applicable)</li>
            </ul>
            <p className='indent-8 leading-8'>
              We <b>do not</b> use your data for marketing purposes without your
              explicit consent.
            </p>
          </section>
          <section className='flex flex-col gap-4'>
            <h2 className='text-left text-xl font-bold'>
              5. Data sharing & third parties
            </h2>
            <p className='indent-8 leading-8'>
              We do not sell, rent, or trade your personal information. However,
              we may share your data with the following service providers:
            </p>
            <ul className='list-disc px-8 list-inside leading-8'>
              <li>
                <b>Hosting provider:</b> Our website is hosted on{' '}
                <b>Hostinger</b>, which may store publicly available website
                content but does not collect personal data.
              </li>
              <li>
                <b>CRM provider:</b> We use <b>HubSpot CRM</b> to manage
                customer communications.
              </li>
              <li>
                <b>Analytics provider:</b> We use <b>Google Analytics</b> to
                track website performance and user behavior.
              </li>
            </ul>
            <div className='flex flex-col gap-4 leading-8'>
              <h3 className='text-left text-lg font-bold'>
                5.1. Third-party service provider addresses
              </h3>
              <div className='flex flex-col gap-4'>
                <h4 className='text-left text-md font-bold'>
                  5.1.1. Google Analytics{' '}
                </h4>
                <div className='px-8'>
                  <p className='font-bold'>Google LLC</p>
                  <p>1600 Amphitheatre Parkway</p>
                  <p>Mountain View, CA 94043, United States</p>
                </div>
                <h4 className='text-left text-md font-bold'>
                  5.1.2. Hostinger, UAB (hosting provider)
                </h4>
                <div className='px-8'>
                  <p className='font-bold'>Hostinger, UAB</p>
                  <p>Jonavos g. 60C, 44192</p>
                  <p>Kaunas, Lithuania</p>
                </div>
                <h4 className='text-left text-md font-bold'>
                  5.1.3. CRM provider (HubSpot)
                </h4>
                <div className='px-8'>
                  <p className='font-bold'>HubSpot, Inc.</p>
                  <p>25 First Street,</p>
                  <p>Cambridge, MA 02141, United States</p>
                </div>
              </div>
            </div>
          </section>
          <section className='flex flex-col gap-4'>
            <h2 className='text-left text-xl font-bold'>6. Data retention</h2>
            <p className='indent-8 leading-8'>
              We retain your data for the following periods:
            </p>
            <ul className='list-disc px-8 list-inside leading-8'>
              <li>
                <b>Contact form submissions:</b> Retained for as long as
                necessary to respond to inquiries (up to 12 months).
              </li>
              <li>
                <b>Google Analytics data:</b> Retained according to Google’s
                data policies (default is 14 months).
              </li>
              <li>
                <b>IP logs and security logs:</b> Retained for security
                monitoring and legal compliance.
              </li>
            </ul>
            <p className='indent-8 leading-8'>
              If you request data deletion, we will erase your information
              within 30 days, unless legal obligations require otherwise.
            </p>
          </section>
          <section className='flex flex-col gap-4'>
            <h2 className='text-left text-xl font-bold'>7. Your rights</h2>
            <p className='indent-8 leading-8'>
              Depending on your location, you may have the right to:
            </p>
            <ul className='list-disc px-8 list-inside leading-8'>
              <li>Access the personal data we hold about you</li>
              <li>Request correction or deletion of your personal data</li>
              <li>Withdraw consent for data processing</li>
              <li>
                Opt out of Google Analytics tracking (
                <a href='https://tools.google.com/dlpage/gaoptout'>
                  Google Opt-Out Tool
                </a>
                )
              </li>
            </ul>
            <p className='indent-8 leading-8'>
              To exercise your rights, contact us at{' '}
              <a href={mainEmailHref}>{contactForms[0].email}</a>.
            </p>
          </section>
          <section className='flex flex-col gap-4'>
            <h2 className='text-left text-xl font-bold'>8. Data security</h2>
            <p className='indent-8 leading-8'>
              We implement the following security measures:
            </p>
            <ul className='list-disc px-8 list-inside leading-8'>
              <li>
                <b>Secure website hosting</b> with <b>Hostinger</b>
              </li>
              <li>
                <b>Restricted access</b> to customer data stored in{' '}
                <b>HubSpot CRM</b>
              </li>
              <li>
                <b>Google Analytics anonymization</b> (where applicable)
              </li>
              <li>
                <b>Regular security reviews</b> to prevent unauthorized access
              </li>
            </ul>
            <p className='indent-8 leading-8'>
              While we take precautions, no online data transmission is 100%
              secure.
            </p>
          </section>
          <section className='flex flex-col gap-4'>
            <h2 className='text-left text-xl font-bold'>
              9. International data transfers
            </h2>
            <p className='indent-8 leading-8'>
              Since we use{' '}
              <b>Google Analytics, HubSpot CRM, and Hostinger hosting</b>, your
              data may be processed in different jurisdictions, including the{' '}
              <b>United States</b>.
            </p>
            <p className='indent-8 leading-8'>
              We ensure that any data transfers comply with relevant data
              protection laws (such as GDPR where applicable).
            </p>
          </section>
          <section className='flex flex-col gap-4'>
            <h2 className='text-left text-xl font-bold'>
              10. Cookies & tracking technologies
            </h2>
            <p className='indent-8 leading-8'>
              We use <b>Google Analytics</b>, which may place cookies on your
              device to track user interactions. You can control cookies by
              adjusting your browser settings or using the{' '}
              <a href='https://tools.google.com/dlpage/gaoptout'>
                Google Analytics Opt-Out Tool.
              </a>
            </p>
            <p className='indent-8 leading-8'>For more details, refer to:</p>
            <ul className='list-disc px-8 list-inside leading-8'>
              <li>
                <b>Google Analytics privacy policy:</b>
                <a href='https://policies.google.com/privacy'>
                  https://policies.google.com/privacy
                </a>
              </li>
              <li>
                <b>Hostinger privacy policy: </b>
                <a href='https://www.hostinger.com/legal/privacy-policy'>
                  https://www.hostinger.com/legal/privacy-policy
                </a>
              </li>
            </ul>
          </section>
          <section className='flex flex-col gap-4'>
            <h2 className='text-left text-xl font-bold'>11. Policy updates</h2>
            <p className='indent-8 leading-8'>
              We may update this privacy policy from time to time. Changes will
              be posted on this page with an updated &rdquo;Last Updated&rdquo;
              date. We encourage you to review this policy periodically.
            </p>
          </section>
          <section className='flex flex-col gap-4'>
            <h2 className='text-left text-xl font-bold'>12. Contact us</h2>
            <p className='indent-8 leading-8'>
              If you have any questions or requests regarding this privacy
              policy, you can contact us.
            </p>
          </section>
        </article>
      </main>
      <Footer id='footer' company={company} contactForms={contactForms} />
    </div>
  );
}
