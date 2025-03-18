function ContactFooterForm(name, phoneNumbers, email, address, specialization) {
  this.name = name;
  this.phoneNumbers = phoneNumbers;
  this.email = email;
  this.address = address;
  this.specialization = specialization;
}

export const contactForms = [
  new ContactFooterForm(
    'Tamás Simon',
    ['+36206297197'],
    'simon@iosmates.com',
    'Budapest, Váci út 1-3, 1062 Hungary',
    'CEO | Head of Sales',
  ),
  new ContactFooterForm(
    'Bogdan Petkanych',
    ['+380663174826'],
    'bogdanpetkanych@gmail.com',
    '89434, Ukraine, reg. Zakarpatska, district Uzhhorodskyi, town Dovhe Pole',
    'Team Lead, Technical Specialist',
  ),
];
