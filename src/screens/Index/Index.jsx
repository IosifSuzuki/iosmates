import './Index.css';
import { useRef, useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';

import { contactForms } from './../../services/shared/data';
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
import Footer from './../../components/Footer/Footer';
import ContactForm from './../../components/ContactForm/ContactForm';
import Modal from './../../components/Modal/Modal';

const benefits = {
  title: 'Why choose us?'.toUpperCase(),
  items: [
    new OverviewCardItem(
      'Cost-effective',
      'We provide highly skilled iOS developers at competitive rates, ensuring quality without unnecessary costs.',
    ),
    new OverviewCardItem(
      'Skilled developers',
      'Our team of experts specializes in the latest iOS development technologies, including SwiftUI, SwiftData, Combine, Augmented Reality with SceneKit and RealityKit. In addition to working with cutting-edge technologies, our team has experienced developers with the knowledge to work on projects built with Objective-C and UIKit.',
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
      new CardItemOption(6, 'Sketch/Figma'),
      new CardItemOption(7, 'Instruments'),
    ]),
    new OptionsCardItem('Skills', [
      new CardItemOption(1, 'Tech Communication'),
      new CardItemOption(2, 'Swift & Objective-C'),
      new CardItemOption(3, 'MVVM & MVVM-C'),
      new CardItemOption(4, 'Swift Composable Architecture'),
      new CardItemOption(5, 'Swift Concurrency'),
      new CardItemOption(6, 'UX'),
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
      'Need an iOS expert for your project? We provide a dedicated developer who integrates seamlessly with your team, ensuring efficient, high-quality development without long-term commitments. Need an iOS expert for your project? We provide a dedicated developer who integrates seamlessly with your team, ensuring efficient, high-quality development without long-term commitments',
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

export default function Index(props) {
  const contactFormRef = useRef();
  const mainHeaderRef = useRef();
  const introRef = useRef();
  const [isLoading, setLoading] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDescription, setModalDescription] = useState('');

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

  useEffect(() => {
    const updateHeight = () => {
      if (mainHeaderRef.current && introRef.current) {
        introRef.current.style.height = `${document.documentElement.clientHeight - mainHeaderRef.current.offsetHeight}px`;
      }
    };
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  function handleContactUs(e) {
    const emailJsTemplateID = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;
    const emailJsServiceID = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
    var formData = new FormData(contactFormRef.current);
    let formObject = Object.fromEntries(formData.entries());
    setLoading(true);
    emailjs
      .send(emailJsServiceID, emailJsTemplateID, formObject)
      .then((res) => {
        setModalTitle('Email Sent Successfully!');
        setModalDescription(
          'Your email has been sent successfully. We’ll get back to you as soon as possible. Thank you for reaching out!',
        );
        setModalOpen(true);
        setLoading(false);
      })
      .catch((err) => {
        setModalTitle('Email Sending Failed!');
        setModalDescription(
          'There was an issue sending your email. Please try again! If the problem persists, contact support.',
        );
        setModalOpen(true);
        setLoading(false);
      });
  }

  return (
    <div className='font-app bg-dark-background text-dark-regular'>
      <Modal
        title={modalTitle}
        isOpen={isModalOpen}
        onClose={(e) => {
          setModalOpen(false);
        }}
      >
        <p className='text-base text-dark-subtitle'>{modalDescription}</p>
      </Modal>
      <MainNavigation ref={mainHeaderRef} logoText='iosmates.com' />
      <main className='flex flex-col gap-8'>
        <Intro ref={introRef} />
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
          id='services'
          title={services.title}
          cardItems={services.items}
          style={VCardItemStyle.PLAIN}
        />
        <ContactForm
          id='contact_form'
          contactFormRef={contactFormRef}
          onSubmit={handleContactUs}
          isLoading={isLoading}
        />
      </main>
      <Footer id='footer' contactForms={contactForms} />
    </div>
  );
}
