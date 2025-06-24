import './VCardCollection.css';

import HightlightTitle from './../HightlightTitle/HightlightTitle';
import OverviewCard from './../OverviewCard/OverviewCard';

export const VCardItemStyle = {
  PLAIN: 'plain',
};

export function VCardCollection(props) {
  const id = props.id;
  const title = props.title;
  const style = props.style;
  const cardItems = props.cardItems;

  let cardItemsJSXs = [];

  switch (style) {
    case VCardItemStyle.PLAIN:
      cardItemsJSXs = cardItems.map((cardItem, idx) => {
        return (
          <OverviewCard
            key={idx}
            title={cardItem.title}
            subtitle={cardItem.subtitle}
            className='w-4/5 md:w-1/2'
          />
        );
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
