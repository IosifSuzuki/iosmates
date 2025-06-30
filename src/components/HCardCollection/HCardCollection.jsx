import './HCardCollection.css';
import HightlightTitle from './../HightlightTitle/HightlightTitle';
import GradientCard from './../GradientCard/GradientCard';

export const HCardItemStyle = {
  GRADIENT: 'gradient',
};

export function HCardCollection(props) {
  const title = props.title.toUpperCase();
  const cardItems = props.cardItems;
  const style = props.style;
  const id = props.id;
  let cardItemsJSXs = [];

  switch (style) {
    case HCardItemStyle.GRADIENT:
      cardItemsJSXs = cardItems.map((cardItem, idx) => {
        return (
          <GradientCard
            className='flex-1 md:max-w-sm'
            key={idx}
            icon={cardItem.icon}
            title={cardItem.title}
            subtitle={cardItem.subtitle}
          />
        );
      });
      break;
  }
  return (
    <section
      id={id}
      className='container mx-auto px-6 md:px-10 flex flex-col gap-6'
    >
      <HightlightTitle>{title}</HightlightTitle>
      <div className='flex flex-row flex-wrap gap-4'>{cardItemsJSXs}</div>
    </section>
  );
}
