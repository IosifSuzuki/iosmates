import './Index.css';
import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

import { contactForms, company } from './../../services/shared/data';

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
import TechStack from './../../components/TechStack/TechStack';

const benefits = {
  title: 'Why choose us?'.toUpperCase(),
  items: [
    {
      icon: <CheckCircle color='#fff' size={28} strokeWidth={2} />,
      title: '20-30 % cheaper',
      subtitle: 'Lower rates than local hires with no compromise on seniority.',
    },
    {
      icon: <CheckCircle color='#fff' size={28} strokeWidth={2} />,
      title: '8-week launches',
      subtitle: 'Proven playbook ships version 1 to the App Store—fast.',
    },
    {
      icon: <CheckCircle color='#fff' size={28} strokeWidth={2} />,
      title: 'Senior-only team',
      subtitle: 'Every engineer has 5–10 years shipping Swift in production.',
    },
  ],
};

const engineering = {
  title: 'Core Engineering',
  items: [
    'Swift & Objective-C',
    'SwiftUI & UIKit',
    'MVVM-C / Swift Composable Architecture / VIPER',
    'XCTest & Swift Testing',
    '❤️ Fastlane CI scripts ❤️',
  ],
};

const developingWithData = {
  title: 'Data & Networking',
  items: [
    'Core Data / SwiftData',
    'Keychain & UserDefaults',
    'Firebase Cloud Firestore',
    'REST & GraphQL APIs',
    'Push Notifications / APNs',
  ],
};
const tools = {
  title: 'CORE TOOLS',
  items: [
    {
      title: 'XCode',
      iconURL: 'https://cdn.simpleicons.org/xcode',
    },
    {
      title: 'Swift PM',
      iconURL: 'https://cdn.simpleicons.org/swift',
    },
    {
      title: 'CocoaPods',
      iconURL: 'https://cdn.simpleicons.org/cocoapods',
    },
    {
      title: 'Fastlane',
      iconURL: 'https://cdn.simpleicons.org/fastlane',
    },
    {
      title: 'TestFlight',
      icon: {
        bright: 'https://cdn.simpleicons.org/apple/white',
        dark: 'https://cdn.simpleicons.org/apple/dark',
      },
    },
    {
      title: 'Sentry',
      iconURL: 'https://cdn.simpleicons.org/sentry',
    },
  ],
};

const services = {
  title: 'Our Services'.toUpperCase(),
  items: [
    new OverviewCardItem(
      'Custom iOS App Development',
      'Own the App Store We craft pixel-perfect Swift / SwiftUI apps that launch fast and run flawlessly. From discovery through QA & release – we ship, you scale.',
    ),
    new OverviewCardItem(
      'On-Demand iOS Engineers',
      'Scale without hiring headaches Plug vetted senior iOS engineers into your workflow in under 14 days. Velocity, peer reviews, zero onboarding drama – just results.',
    ),
  ],
};

export default function Index(props) {
  const navigate = useNavigate();
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
    const initialViewportHeight = window.innerHeight;

    const updateIntroSize = () => {
      const headerHeight = mainHeaderRef.current.offsetHeight;
      introRef.current.style.height = `${initialViewportHeight - headerHeight}px`;
    };
    const resizeObserver = new ResizeObserver(() => {
      updateIntroSize();
    });
    resizeObserver.observe(mainHeaderRef.current);
    updateIntroSize();
    return () => {
      resizeObserver.disconnect();
    };
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
    <div className='font-app bg-background text-regular'>
      <Modal
        title={modalTitle}
        isOpen={isModalOpen}
        onClose={(e) => {
          setModalOpen(false);
        }}
      >
        <p className='text-base text-subtitle'>{modalDescription}</p>
      </Modal>
      <MainNavigation ref={mainHeaderRef} logoText='iosmates.com' />
      <main className='flex flex-col gap-10'>
        <Intro
          ref={introRef}
          onClick={() => {
            navigate('/#services');
          }}
        />
        <VCardCollection
          id='services'
          title={services.title}
          cardItems={services.items}
          style={VCardItemStyle.PLAIN}
        />
        <HCardCollection
          title={benefits.title}
          cardItems={benefits.items}
          style={HCardItemStyle.GRADIENT}
        />
        <TechStack
          tools={tools}
          engineering={engineering}
          developingWithData={developingWithData}
        />
        <ContactForm
          id='contact_form'
          contactFormRef={contactFormRef}
          onSubmit={handleContactUs}
          isLoading={isLoading}
        />
      </main>
      <Footer id='footer' contactForms={contactForms} company={company} />
    </div>
  );
}
