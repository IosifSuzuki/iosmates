import "./Logo.css"

export default function Logo(props) {
	const title = props.title;
	return (
		<a className="hover:text-dark-hightlight transition-colors duration-300" href="#">{title}</a>
	)
}