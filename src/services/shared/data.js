import general from './../../assets/general.json';

function ContactFooterForm(name, phone, email, about, languages) {
  this.name = name;
  this.phone = phone;
  this.email = email;
  this.about = about;
  this.languages = languages;
}

function Company(name, address, taxNumber, euVAT) {
  this.name = name;
  this.address = address;
  this.taxNumber = taxNumber;
  this.euVAT = euVAT;
}

export const company = new Company(
  general.footer.company.name,
  general.footer.company.address,
  general.footer.company.taxNumber,
  general.footer.company.euVat,
);

export const contactForms = general.footer.contacts.map((contact) => {
  return new ContactFooterForm(
    contact.name,
    contact.phone,
    contact.email,
    contact.about,
    contact.languages.map((language) => language.icon).join(' '),
  );
});
