import './ContactForm.css';
import HightlightTitle from './../HightlightTitle/HightlightTitle';

import TextInput from './TextInput/TextInput';
import Textarea from './Textarea/Textarea';
import Button from './Button/Button';

export default function ContactForm(props) {
  const title = 'Contact form'.toUpperCase();
  const onSubmit = props.onSubmit;
  const contactFormRef = props.contactFormRef;
  return (
    <div className='container mx-auto'>
      <HightlightTitle>{title}</HightlightTitle>
      <form onSubmit={onSubmit} ref={contactFormRef}>
        <div className='grid gap-6 grid-cols-1'>
          <TextInput
            id='name'
            labelText='Your name'
            isRequired={true}
            placeholder='Jhon Doe'
          />
          <TextInput
            id='email'
            labelText='Your email address'
            isRequired={true}
            placeholder='john.doe@company.name'
          />
          <TextInput
            id='phone'
            labelText='Your phone number'
            placeholder='123-45-678'
          />
          <TextInput
            id='company'
            labelText='Your company name'
            placeholder='Awesome company name'
          />
          <Textarea
            id='message'
            labelText='Tell us what you need'
            isRequired={true}
            placeholder="Hello! Let's consider the opportunity to work on my project."
          />
          <Button>Let’s Talk</Button>
        </div>
      </form>
    </div>
  );
}
