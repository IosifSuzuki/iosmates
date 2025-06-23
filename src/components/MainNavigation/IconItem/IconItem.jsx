export default function IconItem(props) {
  const title = props.title;
  const icon = props.icon;
  const onClick = props.onClick;

  return (
    <div>
      <button className='p-2' onClick={onClick}>
        <div className='flex row-flex gap-2'>
          {icon} <span>{title}</span>
        </div>
      </button>
    </div>
  );
}
