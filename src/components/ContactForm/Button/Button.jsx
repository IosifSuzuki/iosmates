import "./Button.css"

export default function Button(props) {
	const text = props.children;
	return (
		<button type="button" className="bg-dark-hightlight text-dark-subtitle hover:text-dark-title font-bold rounded-lg text-md p-2.5 text-center">{text}</button>
	)
}