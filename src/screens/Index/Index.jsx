import './index.css';
import { useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

import MainNavigation from './../../components/MainNavigation/MainNavigation';
import Intro from './../../components/Intro/Intro';
import {
  HCardItemStyle,
  HCardCollection,
} from './../../components/HCardCollection/HCardCollection';
import {
  VCardItemStyle,
  VCardCollection,
} from './../../components/VCardCollection/VCardCollection';
import { OverviewCardItem } from './../../components/OverviewCard/OverviewCard';
import {
  CardItemOption,
  OptionsCardItem,
} from './../../components/OptionsCard/OptionsCard';
import { ContactFooterForm, Footer } from './../../components/Footer/Footer';
import ContactForm from './../../components/ContactForm/ContactForm';

const benefits = {
  title: 'Why choose us?'.toUpperCase(),
  items: [
    new OverviewCardItem(
      'Cost-effective',
      'We provide skilled iOS developers at competitive rates, ensuring quality without unnecessary costs.',
    ),
    new OverviewCardItem(
      'Skilled developers',
      'Our team specializes in Swift, SwiftUI, UIKit, and modern architectures, delivering reliable and maintainable solutions.',
    ),
    new OverviewCardItem(
      'Flexible models',
      'Choose a model that fits your needs: dedicated developers, project-based work, or a hybrid approach.',
    ),
  ],
};

const techStack = {
  title: 'Tech stacks'.toUpperCase(),
  items: [
    new OptionsCardItem('Tools', [
      new CardItemOption(1, 'Xcode'),
      new CardItemOption(2, 'Swift Package Manager'),
      new CardItemOption(3, 'CocoaPods'),
      new CardItemOption(4, 'Fastlane'),
      new CardItemOption(5, 'TestFlight'),
    ]),
    new OptionsCardItem('Skills', [
      new CardItemOption(1, 'Swift & Objective-C'),
      new CardItemOption(2, 'MVVM & MVVM-C'),
      new CardItemOption(3, 'Swift Composable Architecture'),
      new CardItemOption(4, 'Swift Concurrency'),
      new CardItemOption(5, 'UX'),
    ]),
    new OptionsCardItem('Storage & Cloud', [
      new CardItemOption(1, 'Core Data'),
      new CardItemOption(2, 'File System Management'),
      new CardItemOption(3, 'Firebase Cloud Firestore'),
      new CardItemOption(4, 'iCloud'),
      new CardItemOption(5, 'Keychain & UserDefaults'),
      new CardItemOption(6, 'REST'),
    ]),
  ],
};

const services = {
  title: 'Our Services'.toUpperCase(),
  items: [
    new OverviewCardItem(
      'Project-based Outsourcing',
      'Need an iOS expert for your project? We provide a dedicated developer who integrates seamlessly with your team, ensuring efficient, high-quality development without long-term commitments.',
    ),
    new OverviewCardItem(
      'Custom iOS app development',
      'We build tailored iOS applications that fit your business needs, ensuring seamless performance and user experience.',
    ),
    new OverviewCardItem(
      'Dedicated developer teams',
      'Hire experienced iOS developers as an extension of your team, ensuring long-term collaboration and flexibility.',
    ),
  ],
};

const contactPhoneNumbers = ['+380663174826', '+36703509193'];
const contactForm = new ContactFooterForm(
  contactPhoneNumbers,
  'example@gmail.com',
  '89434, Ukraine, reg. Zakarpatska, district Uzhhorodskyi, town Dovhe Pole, st. Holovna, build 95',
);

export default function Index(props) {
  const contactFormRef = useRef();

  useEffect(() => {
    const emailJsPublicKey = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY;
    const throttleSeconds = 1;
    emailjs.init({
      publicKey: emailJsPublicKey,
      limitRate: {
        id: 'index',
        throttle: throttleSeconds * 10000,
      },
    });
  }, []);

  function handleContactUs(e) {
    e.preventDefault();

    const emailJsTemplateID = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;
    const emailJsServiceID = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
    var formData = new FormData(contactFormRef.current);
    let formObject = Object.fromEntries(formData.entries());

    emailjs
      .send(emailJsServiceID, emailJsTemplateID, formObject)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  return (
    <div className='font-app bg-dark-background text-dark-regular'>
      <MainNavigation logoText='iosmates.com' />
      <main className='flex flex-col gap-8'>
        <Intro />
        <HCardCollection
          title={benefits.title}
          cardItems={benefits.items}
          style={HCardItemStyle.PLAIN}
        />
        <HCardCollection
          title={techStack.title}
          cardItems={techStack.items}
          style={HCardItemStyle.OPTIONS}
        />
        <VCardCollection
          title={services.title}
          cardItems={services.items}
          style={VCardItemStyle.PLAIN}
        />
        <ContactForm
          contactFormRef={contactFormRef}
          onSubmit={handleContactUs}
        />
      </main>
      <Footer contactForm={contactForm} />
    </div>
  );
}
