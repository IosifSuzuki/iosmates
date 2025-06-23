import './OverviewCard.css';

export function OverviewCardItem(title, subtitle) {
  this.title = title;
  this.subtitle = subtitle;
}

export default function OverviewCard(props) {
  const title = props.title;
  const subtitle = props.subtitle;
  const extraClassName = props.className || '';
  let containerClassName =
    'overview-card bg-overlay p-8 rounded-lg flex flex-col gap-4 justify-center';
  containerClassName = [extraClassName.trim(), containerClassName.trim()].join(
    ' ',
  );
  return (
    <div className={containerClassName}>
      <h4 className='text-center font-bold text-title'>{title}</h4>
      <p className='text-center font-normal text-subtitle'>{subtitle}</p>
    </div>
  );
}
