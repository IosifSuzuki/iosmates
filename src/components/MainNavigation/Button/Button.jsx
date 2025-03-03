import "./Button.css"

export default function Button(props) {
	const title = props.title;
	const path = props.path;
	return (
		<li className="bg-dark-hightlight rounded-lg my-auto p-2 hover:text-dark-title transition-colors duration-300 p-2"><a href={path}>{title}</a></li>
	);
}