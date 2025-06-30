import './Index.css';
import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

import { contactForms, company } from './../../services/shared/data';
import { getServices } from './../../services/shared/services';
import {
  getBenefits,
  getEngineering,
  getDesignData,
  getTools,
} from './../../services/shared/index';

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
import {
  CardItemOption,
  OptionsCardItem,
} from './../../components/OptionsCard/OptionsCard';
import Footer from './../../components/Footer/Footer';
import ContactForm from './../../components/ContactForm/ContactForm';
import Modal from './../../components/Modal/Modal';
import TechStack from './../../components/TechStack/TechStack';

export default function Index(props) {
  const navigate = useNavigate();
  const contactFormRef = useRef();
  const mainHeaderRef = useRef();
  const introRef = useRef();
  const [isLoading, setLoading] = useState(false);
  const [isModalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('');
  const [modalDescription, setModalDescription] = useState('');
  const [services, setServices] = useState([]);

  const tools = getTools();
  const benefits = getBenefits();
  const designData = getDesignData();
  const engineering = getEngineering();

  for (let i = 0; i < benefits.items.length; i++) {
    benefits.items[i].icon = (
      <CheckCircle color='#fff' size={28} strokeWidth={2} />
    );
  }

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
    const fetchData = async () => {
      try {
        const data = await getServices();
        const services = data.map((item) => item.content);
        setServices(services);
      } catch (error) {
        setServices([]);
        console.error('error fetching services:', error);
      }
    };

    fetchData();
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
          title='SERVICES'
          items={services}
          style={VCardItemStyle.MDCard}
        />
        <HCardCollection
          title={benefits.title}
          cardItems={benefits.items}
          style={HCardItemStyle.GRADIENT}
        />
        <TechStack
          tools={tools}
          engineering={engineering}
          designData={designData}
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
