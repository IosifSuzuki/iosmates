import "./OverviewCard.css"

export function OverviewCardItem(title, subtitle) {
	this.title = title;
	this.subtitle = subtitle;
}

export default function OverviewCard(props) {
	const title = props.title;
	const subtitle = props.subtitle;
	return (
		<div className="bg-dark-overlay p-8 rounded-lg flex flex-col gap-4 justify-center">
			<h4 className="text-center font-bold text-dark-title">{title}</h4>
			<p className="text-center font-normal text-dark-subtitle">{subtitle}</p>
		</div>
	);
}