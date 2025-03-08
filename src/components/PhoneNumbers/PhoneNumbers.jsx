import './PhoneNumbers.css';

export default function PhoneNumbers(props) {
  const phoneNumbers = props.phoneNumbers;
  const phoneNumberJSXs = phoneNumbers.map((phoneNumber, idx) => {
    let href = `tel:${phoneNumber}`;
    return (
      <li key={idx}>
        <a className='font-light text-dark-subtitle' href={href}>
          {phoneNumber}
        </a>
      </li>
    );
  });
  return (
    <div>
      <h4 className='font-bold text-dark-title pb-2'>Phone Numbers:</h4>
      <ul>{phoneNumberJSXs}</ul>
    </div>
  );
}
