import './OverviewCard.css';

export function OverviewCardItem(title, subtitle) {
  this.title = title;
  this.subtitle = subtitle;
}

export default function OverviewCard(props) {
  const title = props.title;
  const subtitle = props.subtitle;
  const extraClassName = props.className ?? '';
  let outerClassName = 'overview-card';
  const className = [extraClassName.trim(), outerClassName.trim()].join(' ');
  return (
    <div className={className}>
      <div className='content p-4 bg-overlay flex flex-col gap-4 justify-center'>
        <h3 className='text-center font-bold text-title text-xl'>{title}</h3>
        <p className='text-center font-normal text-subtitle'>{subtitle}</p>
      </div>
    </div>
  );
}
