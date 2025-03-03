import "./Item.css"

export default function Item(props) {
	const title = props.title;
	const path = props.path;
	return (
		<li className="hover:text-dark-highlight transition-colors duration-300"><a className="p-2 item-underline" href={path}>{title}</a></li>
	);
}