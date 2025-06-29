import './VCardCollection.css';

import HightlightTitle from './../HightlightTitle/HightlightTitle';
import MDCard from './../MDCard/MDCard';

export const VCardItemStyle = {
  MDCard: 'MD_CARD',
};

export function VCardCollection(props) {
  const id = props.id;
  const title = props.title;
  const style = props.style;
  const items = props.items;

  let cardItemsJSXs = [];

  switch (style) {
    case VCardItemStyle.MDCard:
      cardItemsJSXs = items.map((item, idx) => {
        return <MDCard key={idx} content={item} className='w-4/5 md:w-1/2' />;
      });
      break;
  }

  return (
    <section id={id} className='container mx-auto flex flex-col gap-4'>
      <HightlightTitle>{title}</HightlightTitle>
      <div className='flex flex-col gap-8 items-center'>{cardItemsJSXs}</div>
    </section>
  );
}
