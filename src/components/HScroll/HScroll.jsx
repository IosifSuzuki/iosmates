import './HScroll.css';

export default function HScroll(props) {
  const items = props.items;
  return (
    <div className='h-scroll-container flex gap-4 max-w-full'>{items}</div>
  );
}
