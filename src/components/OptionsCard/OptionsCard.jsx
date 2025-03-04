import "./OptionsCard.css"

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
		return (
			<li key={item.id}> {item.title} </li>
		);
	})
	return (
		<div className="options-card bg-dark-overlay p-8 rounded-lg flex flex-col gap-4 justify-center">
			<h4 className="text-center font-bold text-dark-title">{title}</h4>
			<ul>
				{optionJSXs}
			</ul>
		</div>
	);
}