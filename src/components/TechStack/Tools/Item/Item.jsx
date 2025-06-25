import './Item.css';

export default function Item(props) {
  const title = props.title;
  const iconURL = props.iconURL;
  const extraClassName = props.className;
  const baseClassName = 'flex flex-col gap-4 items-center';
  const className = [extraClassName.trim(), baseClassName.trim()].join(' ');
  return (
    <div style={{ scrollSnapAlign: 'start' }} className={className}>
      <img className='size-[62px]' alt={title} src={iconURL} loading='lazy' />
      <h3 className='text-center text-title font-bold'>{title}</h3>
    </div>
  );
}
