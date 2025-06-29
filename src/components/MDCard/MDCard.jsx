import './MDCard.css';

export default function MDCard(props) {
  const content = props.content;
  const extraClassName = props.className ?? '';
  let outerClassName = 'md-card';
  const className = [extraClassName.trim(), outerClassName.trim()].join(' ');
  return (
    <div className={className}>
      <div className='content p-4 bg-overlay flex flex-col gap-4 justify-center'>
        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </div>
  );
}
