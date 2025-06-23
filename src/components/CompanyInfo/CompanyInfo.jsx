import './CompanyInfo.css';

export default function CompanyInfo(props) {
  const company = props.company;
  return (
    <section className='company flex flex-col gap-1 text-base'>
      <div className='company-name'>
        <p className='font-semibold text-title'>{company.name}</p>
      </div>
      <address className='company-address not-italic'>
        <p className='font-semibold'>
          Address: <a className='font-light text-subtitle'>{company.address}</a>
        </p>
      </address>
      <div className='company-taxNumber'>
        <p className='font-semibold'>
          Tax Number:{' '}
          <a className='font-light text-subtitle'>{company.taxNumber}</a>
        </p>
      </div>
      <div className='company-taxNumber'>
        <p className='font-semibold'>
          EU VAT Number:{' '}
          <a className='font-light text-subtitle'>{company.euVAT}</a>
        </p>
      </div>
    </section>
  );
}
