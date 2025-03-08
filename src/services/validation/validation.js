function Validation() {}

Validation.proto.validateEmail = validateEmail;

function validateEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || email.length === 0) {
    return 'Email is required';
  }
  if (!regex.test(email)) {
    return 'Invalid email format';
  }
  return null;
}

function validatePhone(phone) {
  const regex = /^(\+?\d{1,3}[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/;
  return regex.test(phone);
}
