import "./HCardCollection.css"
import OverviewCard from "./../OverviewCard/OverviewCard"
import HightlightTitle from "./../HightlightTitle/HightlightTitle"
import OptionsCard from "./../OptionsCard/OptionsCard"

export const CardItemStyle = {
	PLAIN: "plain",
	OPTIONS: "options",
}

export function HCardCollection(props) {
	const title = props.title;
	const cardItems = props.cardItems;
	const style = props.style;
	let cardItemsJSx = [];

	switch (style) {
		case CardItemStyle.PLAIN:
			cardItemsJSx = cardItems.map((cardItem, idx) => {
				return (
					<OverviewCard key={idx} title={cardItem.title} subtitle={cardItem.subtitle} />
				);
			});
			break;
		case CardItemStyle.OPTIONS:
			cardItemsJSx = cardItems.map((cardItem, idx) => {
				return (
					<OptionsCard key={idx} title={cardItem.title} options={cardItem.options} />
				);
			});
	}
	return (
		<section className="container mx-auto flex flex-col gap-4">
			<HightlightTitle>{title}</HightlightTitle>
			<div className="hCardCollection">
				{cardItemsJSx}
			</div>
		</section>
	);
}