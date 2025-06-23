import './OptionsCard.css';

export function OptionsCardItem(title, options) {
  this.title = title;
  this.options = options;
}

export function CardItemOption(id, title) {
  this.id = id;
  this.title = title;
}

export default function OptionsCard(props) {
  const title = props.title;
  const options = props.options;
  const optionJSXs = options.map((item) => {
    return <li key={item.id}> {item.title} </li>;
  });
  return (
    <div className='options-card bg-overlay py-8 px-10 rounded-lg flex flex-col gap-4 justify-center'>
      <h4 className='text-center font-bold text-title'>{title}</h4>
      <ol className='list-decimal'>{optionJSXs}</ol>
    </div>
  );
}
