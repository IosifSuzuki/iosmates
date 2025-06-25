import './Skills.css';

export default function Skills(props) {
  const title = props.title;
  const items = props.items;
  const className = props.className ?? '';
  return (
    <div className={className}>
      <div className='skills'>
        <div className='flex flex-col gap-6 content p-6 bg-overlay'>
          <h3 className='text-center text-title font-bold text-xl'>{title}</h3>
          <ul className='flex flex-col gap-4'>
            {items.map((item, idx) => {
              return (
                <li
                  key={idx}
                  className='text-regular text-subtitle text-center bg-background p-2 rounded-full'
                >
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
