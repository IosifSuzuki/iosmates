import { ValidationError, ValidationCodeError } from './error_model.js';

export const ValidationKeys = {
  Require: 'require',
  Email: 'email',
  Phone: 'phone',
  Optional: 'optional',
};

export function validate(key, value) {
  let validationError = null;
  switch (key) {
    case ValidationKeys.Require:
      validationError = validateEmptyText(value);
      break;
    case ValidationKeys.Email:
      validationError = validateEmail(value);
      break;
    case ValidationKeys.Phone:
      validationError = validatePhone(value);
      break;
    default:
      break;
  }

  return validationError;
}

function validateEmail(email) {
  if (!email || email.length === 0) {
    return new ValidationError(
      ValidationCodeError.emptyValue,
      'email is required',
    );
  }
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) {
    return new ValidationError(
      ValidationCodeError.invalidEmail,
      'invalid email address',
    );
  }
  return null;
}

function validatePhone(phone) {
  if (!phone || phone.length === 0) {
    return new ValidationError(
      ValidationCodeError.emptyValue,
      'phone number is required',
    );
  }
  const regex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  if (regex.test(phone)) {
    return new ValidationError(
      ValidationCodeError.invalidPhone,
      'invalid phone number',
    );
  }
  return null;
}

function validateEmptyText(text) {
  if (!text || text.length === 0) {
    return new ValidationError(
      ValidationCodeError.emptyValue,
      'filed is required',
    );
  }
  return null;
}
