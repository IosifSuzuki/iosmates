import './FilledButton.css';

export default function FilledButton(props) {
	const title = props.children;
	const type = props.type ?? 'submit';
	const onClick = props.onClick;
	const extraClasses = props.className;
	let className =
		'filled-button bg-hightlight text-subtitle hover:text-title font-extrabold md:font-bold text-md md:text-lg p-2.5 text-center';
	className = [className, extraClasses]
		.join(' ')
		.split(' ')
		.map((item) => item.trim())
		.join(' ');
	return (
		<button onClick={onClick} type={type} className={className}>
			{title}
		</button>
	);
}
