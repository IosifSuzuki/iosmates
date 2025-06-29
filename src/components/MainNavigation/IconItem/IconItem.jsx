export default function IconItem(props) {
  const title = props.title;
  const icon = props.icon;
  const onClick = props.onClick;
  const tooltip = props.tooltip;

  console.log(tooltip);

  return (
    <div>
      <button title={tooltip} className='p-2' onClick={onClick}>
        <div className='flex row-flex gap-2 items-center'>
          {icon} <span>{title}</span>
        </div>
      </button>
    </div>
  );
}
