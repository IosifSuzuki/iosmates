export function ValidationError(code, description) {
  this.code = code;
  this.description = description;
}

export const ValidationCodeError = {
  emptyValue: 1,
  invalidEmail: 2,
  ivalidPhone: 3,
};
