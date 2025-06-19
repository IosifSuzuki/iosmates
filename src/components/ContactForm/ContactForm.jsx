import { useState } from 'react';
import './ContactForm.css';
import HightlightTitle from './../HightlightTitle/HightlightTitle';

import { capitalize } from './../../utils/strings';
import TextInput from './TextInput/TextInput';
import Textarea from './Textarea/Textarea';
import Button from './../Button/Button';
import ErrorLabel from './ErrorLabel/ErrorLabel';
import {
  ValidationKeys,
  validate,
} from './../../services/validation/validation';
import { event } from './../../services/analytics/main';

const formDataValidation = {
  name: ValidationKeys.Require,
  email: ValidationKeys.Email,
  phone: ValidationKeys.Phone,
  company: ValidationKeys.Optional,
  message: ValidationKeys.Require,
};
const requireCapitalizeFields = ['name', 'company', 'message'];

export default function ContactForm(props) {
  const id = props.id;
  const title = 'Contact form'.toUpperCase();
  const isLoading = props.isLoading;
  const onSubmit = props.onSubmit;
  const contactFormRef = props.contactFormRef;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  function resetFormErrors() {
    setFormErrors({
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
    });
  }

  function handleChange(event) {
    let { name, value } = event.target;

    resetFormErrors();

    if (requireCapitalizeFields.includes(name)) {
      value = capitalize(value);
    }

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    let hasFormError = false;
    for (let fieldName in formData) {
      const validationKey = formDataValidation[fieldName];
      const fieldValue = formData[fieldName];
      const validationError = validate(validationKey, fieldValue);
      console.log(validationKey, fieldValue, validationError);
      if (validationError) {
        hasFormError = true;
        setFormErrors((prevState) => ({
          ...prevState,
          [fieldName]: capitalize(validationError.description),
        }));
      }
    }
    event('button_click', {
      label: 'contact_us',
    });
    if (!hasFormError) {
      onSubmit(event);
    }
  }
  return (
    <div id={id} className='container px-6 md:px-10 mx-auto'>
      <HightlightTitle>{title}</HightlightTitle>
      <form onSubmit={handleSubmit} ref={contactFormRef}>
        <div className='grid gap-6 grid-cols-1'>
          <div className='flex flex-col gap-1'>
            <TextInput
              id='name'
              value={formData.name}
              onChange={handleChange}
              labelText='Your name'
              isRequired={true}
              placeholder='Jhon Doe'
            />
            {formErrors.name && <ErrorLabel>{formErrors.name}</ErrorLabel>}
          </div>
          <div className='flex flex-col gap-1'>
            <TextInput
              id='email'
              type='email'
              value={formData.email}
              onChange={handleChange}
              labelText='Your email address'
              isRequired={true}
              placeholder='john.doe@company.name'
            />
            {formErrors.email && <ErrorLabel>{formErrors.email}</ErrorLabel>}
          </div>
          <div className='flex flex-col gap-1'>
            <TextInput
              id='phone'
              value={formData.phone}
              onChange={handleChange}
              labelText='Your phone number'
              placeholder='123-45-678'
            />
            {formErrors.phone && <ErrorLabel>{formErrors.phone}</ErrorLabel>}
          </div>
          <div className='flex flex-col gap-1'>
            <TextInput
              id='company'
              value={formData.company}
              onChange={handleChange}
              labelText='Your company name'
              placeholder='Awesome company name'
            />
            {formErrors.company && (
              <ErrorLabel>{formErrors.company}</ErrorLabel>
            )}
          </div>
          <div className='flex flex-col gap-1'>
            <Textarea
              id='message'
              value={formData.message}
              onChange={handleChange}
              labelText='Tell us what you need'
              isRequired={true}
              placeholder="Hello! Let's consider the opportunity to work on my project."
            />
            {formErrors.message && (
              <ErrorLabel>{formErrors.message}</ErrorLabel>
            )}
          </div>
          <Button isLoading={isLoading}>{'Send message'.toUpperCase()}</Button>
        </div>
      </form>
    </div>
  );
}
