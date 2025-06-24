import './GradientCard.css';

export default function GradientCard(props) {
  const title = props.title;
  const subtitle = props.subtitle;
  const icon = props.icon;
  const extraClassName = props.className ?? '';
  const baseClassName =
    'gradient-card-container container mx-auto flex flex-col rounded-lg gap-4 p-8 items-center';
  const className = [extraClassName.trim(), baseClassName.trim()].join(' ');

  return (
    <div className={className}>
      {icon}
      <h2 className='text-white text-center font-bold text-lg'>{title}</h2>
      <p className='text-white text-center'>{subtitle}</p>
    </div>
  );
}
