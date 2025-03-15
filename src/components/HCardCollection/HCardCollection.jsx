import './HCardCollection.css';
import OverviewCard from './../OverviewCard/OverviewCard';
import HightlightTitle from './../HightlightTitle/HightlightTitle';
import OptionsCard from './../OptionsCard/OptionsCard';

export const HCardItemStyle = {
  PLAIN: 'plain',
  OPTIONS: 'options',
};

export function HCardCollection(props) {
  const title = props.title;
  const cardItems = props.cardItems;
  const style = props.style;
  const id = props.id;
  let cardItemsJSXs = [];

  switch (style) {
    case HCardItemStyle.PLAIN:
      cardItemsJSXs = cardItems.map((cardItem, idx) => {
        return (
          <OverviewCard
            key={idx}
            title={cardItem.title}
            subtitle={cardItem.subtitle}
          />
        );
      });
      break;
    case HCardItemStyle.OPTIONS:
      cardItemsJSXs = cardItems.map((cardItem, idx) => {
        return (
          <OptionsCard
            key={idx}
            title={cardItem.title}
            options={cardItem.options}
          />
        );
      });
  }
  return (
    <section id={id} className='container mx-auto flex flex-col gap-4'>
      <HightlightTitle>{title}</HightlightTitle>
      <div className='hCardCollection p-2'>{cardItemsJSXs}</div>
    </section>
  );
}
