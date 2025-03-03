import "./HightlightTitle.css"

export default function HightlightTitle(props) {
	const title = props.children;
	return (
		<h3 className="hightlight-title text-xl font-semibold pb-4 text-center">{title}</ h3>
	)
}