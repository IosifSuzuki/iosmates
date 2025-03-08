import './VCardCollection.css';

import HightlightTitle from './../HightlightTitle/HightlightTitle';
import OverviewCard from './../OverviewCard/OverviewCard';

export const VCardItemStyle = {
  PLAIN: 'plain',
};

export function VCardCollection(props) {
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
            className='w-full'
          />
        );
      });
      break;
  }

  return (
    <section className='container mx-auto flex flex-col gap-4'>
      <HightlightTitle>{title}</HightlightTitle>
      <div className='vCardCollection p-2'>{cardItemsJSXs}</div>
    </section>
  );
}
